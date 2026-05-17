import { NextResponse } from "next/server";
import { clinicProfile } from "@/data/clinicProfile";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequest = {
  messages?: ChatMessage[];
};

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini is not configured." },
      { status: 500 }
    );
  }

  let body: ChatRequest = {};
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = body.messages ?? [];
  if (messages.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const contents = messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }]
  }));

  try {
    const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: clinicProfile }]
        },
        contents,
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 256
        }
      })
    });

    const raw = await response.text();
    let data: any = null;
    try {
      data = JSON.parse(raw);
    } catch {
      data = { error: { message: raw } };
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "Gemini request failed." },
        { status: 500 }
      );
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((part: { text: string }) => part.text)
        .join("") || "Thanks!";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Gemini request failed." },
      { status: 500 }
    );
  }
}
