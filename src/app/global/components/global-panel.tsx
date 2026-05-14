"use client";

import { useState, useRef, useEffect } from "react";
import { Tag, Megaphone, PlusCircle, Smile, Send } from "lucide-react";
import { globalMessages as initialMessages } from "@/lib/mock-data";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type GlobalMessage = {
  id: string;
  userId: string;
  username: string;
  initials: string;
  isCurrentUser: boolean;
  timestamp: string;
  text: string;
};

export default function GlobalPanel() {
  const currentUser = useCurrentUser();
  const [messages, setMessages] = useState<GlobalMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        userId: currentUser.id,
        username: currentUser.name,
        initials: currentUser.initials,
        isCurrentUser: true,
        timestamp: `Today at ${time}`,
        text,
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col bg-white border-l-2 border-l-black h-full overflow-hidden">
      {/* Header */}
      <div className="px-5 h-[60px] border-b-2 border-b-black flex items-center gap-3 shrink-0 bg-white">
        <Tag size={18} className="shrink-0 text-neo-text" />
        <div className="flex flex-col">
          <span className="font-syne text-[1.1rem] leading-tight">global-chat</span>
          <span className="text-[0.7rem] text-neo-muted font-mono leading-tight">
            The community hub for everyone.
          </span>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto py-4 px-5 flex flex-col gap-1">
        {/* Welcome banner */}
        <div className="bg-neo-yellow border-2 border-black py-3.5 px-4 mb-4 flex items-center gap-3">
          <Megaphone size={20} className="shrink-0" />
          <span className="font-bold text-neo-text text-[0.95rem] font-mono">
            Welcome to the global chat!
          </span>
        </div>

        {/* Message list */}
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3 items-start py-1.5">
            <div
              className={`w-9 h-9 shrink-0 border-2 border-black flex items-center justify-center font-bold text-[0.65rem] font-mono ${
                msg.isCurrentUser
                  ? "bg-neo-orange text-white"
                  : "bg-[#e0e0e0] text-neo-text"
              }`}
            >
              {msg.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className={`font-bold text-[0.9rem] font-mono ${
                    msg.isCurrentUser ? "text-neo-orange" : "text-neo-text"
                  }`}
                >
                  {msg.username}
                </span>
                <span className="text-xs text-[#999] font-mono">{msg.timestamp}</span>
              </div>
              <p className="m-0 text-sm leading-[1.6] text-neo-text font-mono">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="border-t-2 border-t-[#ccc] border-dashed" />
      <div className="py-3 px-5 border-t-2 border-t-black flex items-center gap-2 bg-white shrink-0 flex-col">
        <div className="flex w-full items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 border-none bg-transparent hover:bg-transparent shrink-0"
            aria-label="Attach file"
          >
            <PlusCircle size={18} color="#555" />
          </Button>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message in #global-chat"
            className="flex-1 border-2 border-black py-2 px-3 font-mono text-sm outline-none bg-neo-bg rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
          />
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 border-none bg-transparent hover:bg-transparent shrink-0"
            aria-label="Emoji"
          >
            <Smile size={18} color="#555" />
          </Button>
          <Button
            onClick={sendMessage}
            size="icon"
            className="w-9 h-9 border-2 border-black bg-neo-orange hover:bg-neo-orange shadow-neo-xs shrink-0 neo-btn-hover"
            aria-label="Send message"
          >
            <Send size={14} color="#fff" />
          </Button>
        </div>
        <div className="w-full text-center text-[0.7rem] text-[#999] font-mono">
          Bold text uses <strong>**</strong>
        </div>
      </div>
    </div>
  );
}
