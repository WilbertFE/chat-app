import DashboardSidebar from "@/components/dashboard-sidebar";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is NEOCHAT?",
    a: "NEOCHAT is a bold, unapologetically raw real-time communication platform built for communities that value structural honesty over soft, blurred aesthetics. No gradients. No blur. Just hard edges and clear hierarchy.",
  },
  {
    q: "How do I create a server?",
    a: 'Click the green "+" button at the bottom of the server strip on the left, or use the "New Server" button in the sidebar. Give your server a name and start inviting members.',
  },
  {
    q: "How do I send a direct message?",
    a: 'Navigate to the Messages page using the sidebar. Your existing DM conversations are listed there. Click any conversation to open it, or use the "+ New Server" button to find someone new.',
  },
  {
    q: "Can I customize my profile?",
    a: 'Yes. Head to your Profile page and click "EDIT PROFILE" in the top-right of the profile header. You can update your display name, bio, and interests.',
  },
  {
    q: "What file types can I share in chat?",
    a: "NEOCHAT supports images (PNG, JPG, GIF, WebP), documents (PDF, TXT), and code snippets with syntax highlighting. Files are displayed inline with a hard-edged bordered preview.",
  },
  {
    q: "How does the bold text formatting work?",
    a: "Wrap your text with double asterisks to make it bold — for example, **this text** renders as bold in the chat. This is the only formatting shortcut available to keep things minimal.",
  },
  {
    q: "Is NEOCHAT free to use?",
    a: "The core experience — messaging, servers, DMs, and profile — is completely free. There are no hidden paywalls or premium tiers for basic communication features.",
  },
  {
    q: "How do I log out?",
    a: 'Click the "Logout" link at the bottom of the sidebar, just below your username and handle. You will be redirected to the Sign In page.',
  },
];

export default function HelpPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fffdf5",
      }}
    >
      <DashboardSidebar activeRoute="help" />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          fontFamily: "var(--font-ibm), monospace",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "40px 48px 32px",
            borderBottom: "2px solid #000",
            backgroundColor: "#ffde00",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "2.5rem",
              margin: "0 0 8px",
              color: "#0d0d0d",
              textTransform: "uppercase",
            }}
          >
            Help & FAQ
          </h1>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
            Answers to the most common questions about NEOCHAT.
          </p>
        </div>

        {/* FAQ list */}
        <div style={{ padding: "32px 48px", maxWidth: "820px" }}>
          {faqs.map((item, i) => (
            <details
              key={i}
              style={{
                border: "2px solid #000",
                boxShadow: "4px 4px 0 #000",
                backgroundColor: "#fff",
                marginBottom: "16px",
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#0d0d0d",
                  listStyle: "none",
                  userSelect: "none",
                }}
              >
                <span>{item.q}</span>
                <ChevronDown size={18} style={{ flexShrink: 0, color: "#555" }} />
              </summary>
              <div
                style={{
                  padding: "14px 20px 18px",
                  borderTop: "2px solid #000",
                  fontSize: "0.875rem",
                  color: "#333",
                  lineHeight: 1.7,
                  backgroundColor: "#fffdf5",
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* Contact card */}
        <div
          style={{
            margin: "0 48px 48px",
            border: "2px solid #000",
            boxShadow: "4px 4px 0 #000",
            backgroundColor: "#ff5c00",
            padding: "24px 28px",
            maxWidth: "820px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "#fff",
              marginBottom: "6px",
            }}
          >
            STILL NEED HELP?
          </div>
          <p style={{ margin: "0 0 16px", fontSize: "0.875rem", color: "rgba(255,255,255,0.85)" }}>
            Can&apos;t find what you&apos;re looking for? Reach us directly.
          </p>
          <a
            href="mailto:support@neochat.app"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#fff",
              border: "2px solid #000",
              boxShadow: "3px 3px 0 #000",
              fontFamily: "var(--font-ibm), monospace",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "#0d0d0d",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
