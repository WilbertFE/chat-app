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
    <div className="flex h-screen overflow-hidden bg-neo-bg">
      <DashboardSidebar activeRoute="help" />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto font-mono">
        {/* Header */}
        <div className="px-12 pt-10 pb-8 border-b-2 border-b-black bg-neo-yellow">
          <h1 className="font-syne text-[2.5rem] m-0 mb-2 text-neo-text uppercase">
            Help & FAQ
          </h1>
          <p className="m-0 text-[0.9rem] text-neo-muted">
            Answers to the most common questions about NEOCHAT.
          </p>
        </div>

        {/* FAQ list */}
        <div className="p-8 px-12 max-w-[820px]">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="border-2 border-black shadow-neo bg-white mb-4 cursor-pointer"
            >
              <summary className="p-4 px-5 flex items-center justify-between gap-3 font-bold text-[0.95rem] text-neo-text list-none select-none">
                <span>{item.q}</span>
                <ChevronDown size={18} className="shrink-0 text-neo-muted" />
              </summary>
              <div className="py-[14px] px-5 pb-[18px] border-t-2 border-t-black text-[0.875rem] text-[#333] leading-[1.7] bg-neo-bg">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* Contact card */}
        <div className="mx-12 mb-12 border-2 border-black shadow-neo bg-neo-orange py-6 px-7 max-w-[820px]">
          <div className="font-syne text-[1.1rem] text-white mb-[6px]">
            STILL NEED HELP?
          </div>
          <p className="m-0 mb-4 text-[0.875rem] text-white/85">
            Can&apos;t find what you&apos;re looking for? Reach us directly.
          </p>
          <a
            href="mailto:support@neochat.app"
            className="inline-block py-[10px] px-5 bg-white border-2 border-black shadow-neo-sm font-mono font-bold text-[0.8rem] text-neo-text no-underline uppercase tracking-[0.05em] neo-btn-hover"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
