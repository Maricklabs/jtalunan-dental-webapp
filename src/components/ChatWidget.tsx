"use client";

import { FormEvent, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const quickQuestions = [
  "What services do you offer?",
  "How do I book an appointment?",
  "What are your clinic hours?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! How can we help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isSending) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Chat failed");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Thanks!" }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, we could not send your message right now."
        }
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <div
        className={`fixed bottom-28 right-6 z-50 w-[320px] overflow-hidden rounded-2xl border border-sand/60 bg-white shadow-lift transition-all duration-300 sm:w-[360px] ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
          <div className="flex items-center justify-between bg-[#3b82f6] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <img
                src="/images/Logo_wbg.png"
                alt="JT Alunan Dental Clinic"
                className="h-7 w-7 rounded-full bg-white/90 p-1"
              />
              <p className="text-sm font-semibold">JT Alunan Dental Clinic</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/20 px-2 py-1 text-xs"
              aria-label="Close chat"
            >
              Close
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
            <div className="rounded-xl border border-sand/60 bg-cream/70 px-3 py-2 text-xs text-ink/70">
              Need help? Try asking one of these:
              <div className="mt-2 flex flex-col gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="rounded-lg bg-white px-3 py-2 text-left text-xs text-ink shadow-soft"
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[80%] rounded-2xl bg-olive px-3 py-2 text-xs text-cream"
                      : "max-w-[80%] rounded-2xl bg-sand/60 px-3 py-2 text-xs text-ink"
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form
            className="flex items-center gap-2 border-t border-sand/60 bg-white px-4 py-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
              className="w-full rounded-full border border-sand/70 px-3 py-2 text-xs"
            />
            <button
              type="submit"
              className="h-8 w-8 rounded-full bg-olive text-xs text-cream"
              disabled={isSending}
              aria-label="Send message"
            >
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            </button>
          </form>
        </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://m.me/JTAlunanDentalClinic"
          target="_blank"
          rel="noreferrer"
          className={`flex h-16 w-16 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lift transition hover:-translate-y-0.5 ${
            isOpen ? "pointer-events-none scale-90 opacity-0" : "opacity-100"
          }`}
          aria-label="Chat on Messenger"
        >
          <i className="fa-brands fa-facebook-messenger text-3xl" aria-hidden="true" />
        </a>
        <div className="relative">
          <div
            className={`absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs text-ink shadow-lift transition ${
              isOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            Need Help? <span className="font-semibold">Ask us</span>
          </div>
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-cream shadow-lift transition hover:-translate-y-0.5"
            aria-label="Open chatbot"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark text-2xl" aria-hidden="true" />
            ) : (
              <img
                src="/images/Logo_wbg.png"
                alt="JT Alunan Dental Clinic"
                className="h-16 w-16 object-contain"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
