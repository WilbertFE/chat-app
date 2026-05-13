"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, PlusCircle, Smile, Send } from "lucide-react";
import { dmMessages as initialDmMessages, currentUser } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DmMessage = {
  id: string;
  userId: string;
  username: string;
  initials: string;
  isCurrentUser: boolean;
  timestamp: string;
  text: string;
};

export default function DmPanel() {
  const [messages, setMessages] = useState<DmMessage[]>(initialDmMessages);
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
        timestamp: time,
        text,
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col bg-white border-l-2 border-l-black h-full overflow-hidden">
      {/* Header */}
      <div className="px-5 h-[60px] border-b-2 border-b-black flex items-center gap-3 shrink-0 bg-white">
        <span className="font-syne text-[1.2rem]"># SARAH J</span>
        <div className="ml-auto flex items-center gap-2.5">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 border-none bg-transparent hover:bg-transparent"
            aria-label="Notifications"
          >
            <Bell size={18} color="#555" />
          </Button>
          <Input
            type="text"
            placeholder="Search..."
            className="border-2 border-black py-1.5 px-2.5 font-mono text-[0.8rem] outline-none w-40 bg-neo-bg rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
          />
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
        {/* Date divider */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 border-t border-t-[#ccc] border-dashed" />
          <span className="text-xs font-bold text-neo-muted border border-[#ccc] py-0.5 px-2.5 font-mono tracking-[0.08em]">
            TODAY
          </span>
          <div className="flex-1 border-t border-t-[#ccc] border-dashed" />
        </div>

        {/* DM messages */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex gap-2.5 items-start",
              msg.isCurrentUser ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div
              className={`w-9 h-9 shrink-0 border-2 border-black flex items-center justify-center font-bold text-[0.65rem] font-mono ${
                msg.isCurrentUser ? "bg-neo-orange text-white" : "bg-[#e0e0e0] text-neo-text"
              }`}
            >
              {msg.initials}
            </div>
            <div
              className={cn(
                "max-w-[65%] flex flex-col gap-1",
                msg.isCurrentUser ? "items-end" : "items-start"
              )}
            >
              <div
                className={cn(
                  "flex items-baseline gap-2",
                  msg.isCurrentUser ? "flex-row-reverse" : "flex-row"
                )}
              >
                <span className="text-xs text-[#999] font-mono">{msg.timestamp}</span>
                <span
                  className={`font-bold text-[0.85rem] font-mono ${
                    msg.isCurrentUser ? "text-neo-orange" : "text-neo-text"
                  }`}
                >
                  {msg.username}
                </span>
              </div>
              <div
                className={`border-2 border-black py-2.5 px-3.5 text-sm font-mono text-neo-text leading-[1.6] ${
                  msg.isCurrentUser ? "bg-neo-pink" : "bg-white"
                }`}
              >
                {msg.text}
              </div>
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
            aria-label="Attach"
          >
            <PlusCircle size={18} color="#555" />
          </Button>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message"
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
            aria-label="Send"
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
