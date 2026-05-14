"use client";

import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { dmMessages as initialDmMessages } from "@/lib/mock-data";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/user-avatar";
import ChatInputBar from "@/components/chat-input-bar";

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
  const currentUser = useCurrentUser();
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
            <UserAvatar initials={msg.initials} isCurrentUser={msg.isCurrentUser} size="md" />
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

      <ChatInputBar
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        placeholder="Type your message"
      />
    </div>
  );
}
