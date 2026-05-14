"use client";

import { useState, useRef, useEffect } from "react";
import { Tag, Megaphone } from "lucide-react";
import { globalMessages as initialMessages } from "@/lib/mock-data";
import { useCurrentUser } from "@/hooks/use-current-user";
import UserAvatar from "@/components/user-avatar";
import ChatInputBar from "@/components/chat-input-bar";

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
            <UserAvatar initials={msg.initials} isCurrentUser={msg.isCurrentUser} image={msg.isCurrentUser ? currentUser.image : undefined} size="md" />
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

      <ChatInputBar
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        placeholder="Type your message in #global-chat"
      />
    </div>
  );
}
