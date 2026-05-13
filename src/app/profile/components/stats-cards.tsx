import { MessageSquare, Users, Calendar } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export default function StatsCards() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Messages Sent */}
      <div
        style={{
          border: "2px solid #000",
          boxShadow: "4px 4px 0 #000",
          backgroundColor: "#fff",
          padding: "20px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#555",
            textTransform: "uppercase",
            fontFamily: "var(--font-ibm), monospace",
            marginBottom: "8px",
          }}
        >
          MESSAGES SENT
        </div>
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "3rem",
            color: "#0d0d0d",
            lineHeight: 1,
          }}
        >
          {currentUser.stats.messagesSent}
        </div>
        {/* Decorative icon */}
        <MessageSquare
          size={64}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#e0e0e0",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Servers Joined */}
      <div
        style={{
          border: "2px solid #000",
          boxShadow: "4px 4px 0 #000",
          backgroundColor: "#ffde00",
          padding: "20px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#555",
            textTransform: "uppercase",
            fontFamily: "var(--font-ibm), monospace",
            marginBottom: "8px",
          }}
        >
          SERVERS JOINED
        </div>
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "3rem",
            color: "#0d0d0d",
            lineHeight: 1,
          }}
        >
          {currentUser.stats.serversJoined}
        </div>
        <Users
          size={64}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#0d0d0d",
            opacity: 0.15,
          }}
        />
      </div>

      {/* Member Since */}
      <div
        style={{
          border: "2px solid #000",
          boxShadow: "4px 4px 0 #000",
          backgroundColor: "#fff",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#555",
              textTransform: "uppercase",
              fontFamily: "var(--font-ibm), monospace",
              marginBottom: "8px",
            }}
          >
            MEMBER SINCE
          </div>
          <div
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "1.8rem",
              color: "#0d0d0d",
              lineHeight: 1,
            }}
          >
            {currentUser.stats.memberSince}
          </div>
        </div>
        {/* Orange calendar icon box */}
        <div
          style={{
            marginLeft: "auto",
            width: "52px",
            height: "52px",
            border: "2px solid #000",
            backgroundColor: "#ff5c00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Calendar size={24} color="#fff" />
        </div>
      </div>
    </div>
  );
}
