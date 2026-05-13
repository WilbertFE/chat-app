import { onlineUsers, offlineUsers } from "@/lib/mock-data";

export default function MembersSidebar() {
  return (
    <div
      style={{
        width: "220px",
        minWidth: "220px",
        backgroundColor: "#fffdf5",
        borderLeft: "2px solid #000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-ibm), monospace",
        height: "100%",
        overflowY: "auto",
      }}
    >
      {/* Online section */}
      <div style={{ padding: "16px 16px 8px" }}>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          ONLINE — {onlineUsers.length}
        </div>
        {onlineUsers.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "5px 0",
            }}
          >
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  border: "2px solid #000",
                  backgroundColor: user.isCurrentUser ? "#ff5c00" : "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  color: user.isCurrentUser ? "#fff" : "#0d0d0d",
                }}
              >
                {user.initials}
              </div>
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "9px",
                  height: "9px",
                  backgroundColor: "#00c853",
                  border: "2px solid #fff",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: user.isCurrentUser ? "#ff5c00" : "#0d0d0d",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {user.name}
              </div>
            </div>
            {user.isBot && (
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  backgroundColor: "#4fc3f7",
                  border: "1px solid #000",
                  padding: "1px 5px",
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                }}
              >
                BOT
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Offline section */}
      <div style={{ padding: "8px 16px", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#999",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          OFFLINE — 20
        </div>
        {offlineUsers.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "5px 0",
              opacity: 0.5,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                border: "2px solid #999",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.65rem",
                color: "#999",
                flexShrink: 0,
              }}
            >
              {user.initials}
            </div>
            <span style={{ fontSize: "0.8rem", color: "#999" }}>{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
