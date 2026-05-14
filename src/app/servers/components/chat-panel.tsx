"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Megaphone } from "lucide-react";
import { messages as initialMessages } from "@/lib/mock-data";
import { useCurrentUser } from "@/hooks/use-current-user";
import UserAvatar from "@/components/user-avatar";
import ChatInputBar from "@/components/chat-input-bar";

type Message = {
  id: string;
  userId: string;
  username: string;
  initials: string;
  isCurrentUser: boolean;
  timestamp: string;
  text: string;
  image: string | null;
};

export default function ChatPanel() {
  const currentUser = useCurrentUser();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
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
        image: null,
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col bg-white border-l-2 border-l-black h-full overflow-hidden">
      {/* Header */}
      <div className="px-5 h-[60px] border-b-2 border-b-black flex items-center gap-3 shrink-0 bg-white">
        <span className="font-mono font-bold text-[1.1rem]">#</span>
        <span className="font-syne text-[1.2rem]">showcase</span>
        <span className="text-[0.8rem] text-neo-muted font-mono">
          Post your latest mockups here!
        </span>
        <div className="ml-auto">
          <Bell size={18} color="#555" />
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto py-4 px-5 flex flex-col gap-1">
        {/* Welcome banner */}
        <div className="bg-neo-yellow border-2 border-black py-3.5 px-4 mb-4 flex items-start gap-3">
          <Megaphone size={20} className="shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-neo-orange text-[0.9rem] mb-1">
              Welcome to #showcase!
            </div>
            <div className="text-[0.8rem] text-neo-text font-mono">
              This is the place to drop your boldest, most brutalist designs. Keep shadows hard and borders thick.
            </div>
          </div>
        </div>

        {/* Message list */}
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3 items-start py-1.5">
            <UserAvatar initials={msg.initials} isCurrentUser={msg.isCurrentUser} size="md" />
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
              {msg.image && (
                <div className="mt-2 border-2 border-black shadow-neo bg-[#1a1a2e] p-4 max-w-[360px]">
                  <div className="flex gap-1.5 mb-2">
                    {["#ff5c00", "#ffde00", "#4fc3f7"].map((c) => (
                      <div key={c} style={{ backgroundColor: c }} className="w-2 h-2 rounded-full" />
                    ))}
                  </div>
                  <div className="flex flex-col gap-1">
                    {[60, 45, 80, 35].map((w, i) => (
                      <div
                        key={i}
                        style={{ width: `${w}%`, backgroundColor: i % 2 === 0 ? "#ff5c00" : "#4fc3f7" }}
                        className="h-2 opacity-70"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <ChatInputBar
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        placeholder="Type your message in #showcase"
      />
    </div>
  );
}
