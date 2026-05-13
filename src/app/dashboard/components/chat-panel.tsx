"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Plus, Smile, Send, Megaphone } from "lucide-react";
import { messages as initialMessages, currentUser } from "@/lib/mock-data";

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
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderLeft: "2px solid #000",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0 20px",
          height: "60px",
          borderBottom: "2px solid #000",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexShrink: 0,
          backgroundColor: "#fff",
        }}
      >
        <span style={{ fontFamily: "var(--font-ibm), monospace", fontWeight: 700, fontSize: "1.1rem" }}>#</span>
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>
          showcase
        </span>
        <span style={{ fontSize: "0.8rem", color: "#555", fontFamily: "var(--font-ibm), monospace" }}>
          Post your latest mockups here!
        </span>
        <div style={{ marginLeft: "auto" }}>
          <Bell size={18} color="#555" />
        </div>
      </div>

      {/* Messages area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {/* Welcome banner */}
        <div
          style={{
            backgroundColor: "#ffde00",
            border: "2px solid #000",
            padding: "14px 16px",
            marginBottom: "16px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <Megaphone size={20} style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontWeight: 700, color: "#ff5c00", fontSize: "0.9rem", marginBottom: "4px" }}>
              Welcome to #showcase!
            </div>
            <div style={{ fontSize: "0.8rem", color: "#0d0d0d", fontFamily: "var(--font-ibm), monospace" }}>
              This is the place to drop your boldest, most brutalist designs. Keep shadows hard and borders thick.
            </div>
          </div>
        </div>

        {/* Message list */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              padding: "6px 0",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                flexShrink: 0,
                border: "2px solid #000",
                backgroundColor: msg.isCurrentUser ? "#ff5c00" : "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.65rem",
                color: msg.isCurrentUser ? "#fff" : "#0d0d0d",
                fontFamily: "var(--font-ibm), monospace",
              }}
            >
              {msg.initials}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: msg.isCurrentUser ? "#ff5c00" : "#0d0d0d",
                    fontFamily: "var(--font-ibm), monospace",
                  }}
                >
                  {msg.username}
                </span>
                <span style={{ fontSize: "0.75rem", color: "#999", fontFamily: "var(--font-ibm), monospace" }}>
                  {msg.timestamp}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  color: "#0d0d0d",
                  fontFamily: "var(--font-ibm), monospace",
                }}
              >
                {msg.text}
              </p>
              {msg.image && (
                <div
                  style={{
                    marginTop: "8px",
                    border: "2px solid #000",
                    boxShadow: "4px 4px 0 #000",
                    backgroundColor: "#1a1a2e",
                    padding: "16px",
                    maxWidth: "360px",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
                    {["#ff5c00", "#ffde00", "#4fc3f7"].map((c) => (
                      <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: c }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {[60, 45, 80, 35].map((w, i) => (
                      <div
                        key={i}
                        style={{
                          height: "8px",
                          width: `${w}%`,
                          backgroundColor: i % 2 === 0 ? "#ff5c00" : "#4fc3f7",
                          opacity: 0.7,
                        }}
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

      {/* Input bar */}
      <div
        style={{
          padding: "12px 20px",
          borderTop: "2px solid #000",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#fff",
          flexShrink: 0,
        }}
      >
        <button
          style={{
            width: "36px",
            height: "36px",
            border: "2px solid #000",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
          aria-label="Attach file"
        >
          <Plus size={16} />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message in #showcase"
          style={{
            flex: 1,
            border: "2px solid #000",
            padding: "8px 12px",
            fontFamily: "var(--font-ibm), monospace",
            fontSize: "0.875rem",
            outline: "none",
            backgroundColor: "#fffdf5",
          }}
        />
        <button
          style={{
            width: "36px",
            height: "36px",
            border: "2px solid #000",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
          aria-label="Emoji"
        >
          <Smile size={16} />
        </button>
        <button
          onClick={sendMessage}
          style={{
            width: "36px",
            height: "36px",
            border: "2px solid #000",
            backgroundColor: "#ff5c00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "2px 2px 0 #000",
            flexShrink: 0,
          }}
          aria-label="Send message"
          className="neo-btn-hover"
        >
          <Send size={14} color="#fff" />
        </button>
      </div>
    </div>
  );
}
