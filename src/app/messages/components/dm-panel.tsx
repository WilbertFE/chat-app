"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, PlusCircle, Smile, Send } from "lucide-react";
import { dmMessages as initialDmMessages, currentUser } from "@/lib/mock-data";

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
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>
          # SARAH J
        </span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            style={{
              width: "32px",
              height: "32px",
              border: "none",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Notifications"
          >
            <Bell size={18} color="#555" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            style={{
              border: "2px solid #000",
              padding: "6px 10px",
              fontFamily: "var(--font-ibm), monospace",
              fontSize: "0.8rem",
              outline: "none",
              width: "160px",
              backgroundColor: "#fffdf5",
            }}
          />
        </div>
      </div>

      {/* Messages area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Date divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "8px 0",
          }}
        >
          <div style={{ flex: 1, borderTop: "1px dashed #ccc" }} />
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#555",
              border: "1px solid #ccc",
              padding: "2px 10px",
              fontFamily: "var(--font-ibm), monospace",
              letterSpacing: "0.08em",
            }}
          >
            TODAY
          </span>
          <div style={{ flex: 1, borderTop: "1px dashed #ccc" }} />
        </div>

        {/* DM messages */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              gap: "10px",
              flexDirection: msg.isCurrentUser ? "row-reverse" : "row",
              alignItems: "flex-start",
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
            <div
              style={{
                maxWidth: "65%",
                display: "flex",
                flexDirection: "column",
                alignItems: msg.isCurrentUser ? "flex-end" : "flex-start",
                gap: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  flexDirection: msg.isCurrentUser ? "row-reverse" : "row",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#999",
                    fontFamily: "var(--font-ibm), monospace",
                  }}
                >
                  {msg.timestamp}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: msg.isCurrentUser ? "#ff5c00" : "#0d0d0d",
                    fontFamily: "var(--font-ibm), monospace",
                  }}
                >
                  {msg.username}
                </span>
              </div>
              <div
                style={{
                  backgroundColor: msg.isCurrentUser ? "#ffd6cc" : "#fff",
                  border: "2px solid #000",
                  padding: "10px 14px",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-ibm), monospace",
                  color: "#0d0d0d",
                  lineHeight: 1.6,
                }}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div style={{ borderTop: "2px dashed #ccc" }} />
      <div
        style={{
          padding: "12px 20px",
          borderTop: "2px solid #000",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#fff",
          flexShrink: 0,
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", width: "100%", alignItems: "center", gap: "8px" }}>
          <button
            style={{
              width: "32px",
              height: "32px",
              border: "none",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
            aria-label="Attach"
          >
            <PlusCircle size={18} color="#555" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message"
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
              width: "32px",
              height: "32px",
              border: "none",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
            aria-label="Emoji"
          >
            <Smile size={18} color="#555" />
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
            aria-label="Send"
            className="neo-btn-hover"
          >
            <Send size={14} color="#fff" />
          </button>
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "0.7rem",
            color: "#999",
            fontFamily: "var(--font-ibm), monospace",
          }}
        >
          Bold text uses <strong>**</strong>
        </div>
      </div>
    </div>
  );
}
