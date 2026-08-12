"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Msg = { role: "user" | "model"; content: string; broke?: boolean };

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const GREETINGS = [
  "Oh. It's you. You actually found the secret button. I was hoping you wouldn't. What do you want?",
  "Great. Another visitor who couldn't just look at the portfolio like a normal person. Go on then. Waste my time.",
  "You unlocked the hidden chat. Bim would be proud. I am not. Ask me something so we can get this over with.",
];

export default function ChatWithBim() {
  const [unlocked, setUnlocked] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [dead, setDead] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const reveal = useCallback(() => {
    setUnlocked(true);
    setOpen(true);
  }, []);

  // --- Mobile-friendly trigger: a tap sequence elsewhere dispatches this event ---
  useEffect(() => {
    const onSummon = () => reveal();
    window.addEventListener("bim:summon", onSummon);
    return () => window.removeEventListener("bim:summon", onSummon);
  }, [reveal]);

  // --- Desktop triggers: Konami code OR typing "bim" ---
  useEffect(() => {
    let konamiIdx = 0;
    let typed = "";

    const onKey = (e: KeyboardEvent) => {
      // Ignore while typing in a field (except our own handled input).
      const target = e.target as HTMLElement | null;
      const inField =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      // Konami code
      if (key === KONAMI[konamiIdx].toLowerCase()) {
        konamiIdx++;
        if (konamiIdx === KONAMI.length) {
          konamiIdx = 0;
          reveal();
        }
      } else {
        konamiIdx = key === KONAMI[0].toLowerCase() ? 1 : 0;
      }

      // Type "bim" anywhere outside a form field
      if (!inField && /^[a-z]$/.test(key)) {
        typed = (typed + key).slice(-3);
        if (typed === "bim") reveal();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reveal]);

  // Seed a greeting the first time the widget opens.
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "model",
          content: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
        },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading || dead) return;

    const nextMessages: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "model", content: data.reply, broke: !!data.broke },
      ]);
      if (data.broke) setDead(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content:
            "Couldn't even reach the server. Bim's hosting is as reliable as his life choices. Try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, dead, messages]);

  if (!unlocked) return null;

  return (
    <>
      {/* Floating toggle button (appears once unlocked) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with Bim"
        className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#00BFA6]/40 bg-[#00BFA6] text-[#0D1B2A] shadow-lg shadow-[#00BFA6]/20 transition-all duration-300 hover:scale-105 hover:bg-[#00a58e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Chat panel */}
      <div
        className={
          "fixed bottom-36 right-5 z-50 flex w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D1B2A]/95 shadow-2xl backdrop-blur transition-all duration-300 " +
          (open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0")
        }
        style={{ maxHeight: "min(70vh, 560px)" }}
        role="dialog"
        aria-label="Chat with Bim"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00BFA6] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00BFA6]" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Bim</p>
              <p className="text-[11px] text-gray-400">
                {dead ? "flat broke" : "reluctantly online"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded p-1 text-gray-400 hover:bg-white/10 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed " +
                  (m.role === "user"
                    ? "rounded-br-sm bg-[#00BFA6] text-[#0D1B2A]"
                    : m.broke
                    ? "rounded-bl-sm border border-red-400/30 bg-red-500/10 text-red-100"
                    : "rounded-bl-sm bg-white/10 text-gray-100")
                }
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-3">
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-3">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              disabled={dead}
              placeholder={dead ? "The credits are gone. So is he." : "Say something regrettable..."}
              className="w-full rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00BFA6]/50 disabled:opacity-50"
            />
            <button
              type="button"
              onClick={send}
              disabled={loading || dead || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00BFA6] text-[#0D1B2A] transition hover:bg-[#00a58e] disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] text-gray-500">
            You found the easter egg. There is no undo.
          </p>
        </div>
      </div>
    </>
  );
}
