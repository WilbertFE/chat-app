import { friends } from "@/lib/mock-data";

export default function FriendsSidebar() {
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
      {/* Header */}
      <div
        style={{
          padding: "16px 16px 8px",
          borderBottom: "2px solid #000",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#0d0d0d",
            textTransform: "uppercase",
          }}
        >
          FRIENDS — {friends.totalCount}
        </div>
      </div>

      {/* Online */}
      <div style={{ padding: "12px 16px 8px" }}>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          ONLINE — {friends.online.length}
        </div>
        {friends.online.map((user) => (
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
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: user.isCurrentUser ? "#ff5c00" : "#0d0d0d",
              }}
            >
              {user.name}
            </span>
          </div>
        ))}
      </div>

      {/* Offline */}
      <div style={{ padding: "8px 16px", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#999",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          OFFLINE — {friends.offlineCount}
        </div>
        {friends.offline.map((user) => (
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
