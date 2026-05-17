import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type AppointmentPayload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  concerns?: string[];
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
};

export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  const ip = getClientIp(request);
  const rate = await supabase.rpc("check_rate_limit", {
    ip_address: ip,
    max_requests: 5,
    window_seconds: 3600
  });

  if (rate.error) {
    return NextResponse.json(
      { error: "Rate limiting failed. Please try again later." },
      { status: 500 }
    );
  }

  if (!rate.data) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let payload: AppointmentPayload = {};
  try {
    payload = (await request.json()) as AppointmentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing: string[] = [];
  if (!payload.firstName?.trim()) missing.push("firstName");
  if (!payload.lastName?.trim()) missing.push("lastName");
  if (!payload.phone?.trim()) missing.push("phone");
  if (!payload.email?.trim()) missing.push("email");
  if (!payload.date?.trim()) missing.push("date");
  if (!payload.time?.trim()) missing.push("time");
  if (!payload.concerns || payload.concerns.length === 0) missing.push("concerns");

  const todayISO = new Date().toISOString().split("T")[0];
  if (payload.date && payload.date < todayISO) {
    return NextResponse.json(
      { error: "Date must be today or later." },
      { status: 400 }
    );
  }

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("appointments").insert({
    id: crypto.randomUUID(),
    first_name: payload.firstName?.trim(),
    last_name: payload.lastName?.trim(),
    phone: payload.phone?.trim(),
    email: payload.email?.trim(),
    date: payload.date,
    time: payload.time,
    concerns: payload.concerns,
    created_at: new Date().toISOString()
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
