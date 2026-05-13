export const currentUser = {
  id: "1",
  name: "Alex Rivera",
  handle: "@arivera_neo",
  role: "DEVELOPER",
  avatar: null as null | string,
  initials: "AR",
  bio: "Hey, I'm Alex. I build unapologetically loud user interfaces and write code that works. No blurs, no soft corners, just raw pixels and solid structural integrity.\n\nCurrently obsessing over CSS Grid, vintage dashboard interfaces, and mechanical keyboards that wake up the neighbors.",
  interests: ["React", "Tailwind CSS", "Figma", "Coffee"],
  stats: {
    messagesSent: "14.2k",
    serversJoined: 42,
    memberSince: "Oct 2022",
  },
};

export const onlineUsers = [
  { id: "1", name: "Alex Rivera", handle: "@arivera_neo", initials: "AR", isBot: false, isCurrentUser: true },
  { id: "2", name: "Sarah J", handle: "@sarah_j", initials: "SJ", isBot: false, isCurrentUser: false },
  { id: "3", name: "Marcus T", handle: "@marcust", initials: "MT", isBot: false, isCurrentUser: false },
  { id: "4", name: "Bot_Alpha", handle: "@bot_alpha", initials: "BA", isBot: true, isCurrentUser: false },
];

export const offlineUsers = [
  { id: "5", name: "Elena R.", handle: "@elenar", initials: "ER", isBot: false },
  { id: "6", name: "David K.", handle: "@davidk", initials: "DK", isBot: false },
  { id: "7", name: "Priya R.", handle: "@priyar", initials: "PR", isBot: false },
];

export const servers = [
  { id: "1", name: "NEOCHAT", abbr: "NC", color: "#ff5c00", active: true },
  { id: "2", name: "Design Hub", abbr: "DH", color: "#4fc3f7", active: false },
  { id: "3", name: "UX Squad", abbr: "UX", color: "#9c27b0", active: false },
];

export const channels = ["showcase", "general", "random"];

export const messages = [
  {
    id: "1",
    userId: "2",
    username: "Sarah J",
    initials: "SJ",
    isCurrentUser: false,
    timestamp: "Today at 9:12 AM",
    text: "Just finished the new landing page concept. Going heavy on the primary-container orange. Thoughts?",
    image: null,
  },
  {
    id: "2",
    userId: "3",
    username: "Marcus T",
    initials: "MT",
    isCurrentUser: false,
    timestamp: "Today at 9:35 AM",
    text: "Let's see it! I've been experimenting with replacing all subtle gradients with raw hard drop shadows. It's aggressive but works.",
    image: null,
  },
  {
    id: "3",
    userId: "1",
    username: "Alex Rivera",
    initials: "AR",
    isCurrentUser: true,
    timestamp: "Today at 9:08 AM",
    text: "Here's a snippet of the new component library. Removed all border radii and pushed the structural honesty.",
    image: "component-preview",
  },
];

export const dmMessages = [
  {
    id: "1",
    userId: "2",
    username: "Sarah J",
    initials: "SJ",
    isCurrentUser: false,
    timestamp: "10:42 AM",
    text: "Has anyone reviewed the new button states? The active: transformation seems a bit too drastic on smaller components.",
  },
  {
    id: "2",
    userId: "1",
    username: "Alex Rivera",
    initials: "AR",
    isCurrentUser: true,
    timestamp: "10:45 AM",
    text: "I agree. Let's reduce the translation from 4px to 2px for anything smaller than an icon button. I'll push a PR shortly.",
  },
];

export const friends = {
  online: [
    { id: "1", name: "Alex Rivera", initials: "AR", isCurrentUser: true },
    { id: "2", name: "Sarah J", initials: "SJ", isCurrentUser: false },
    { id: "3", name: "Marcus T", initials: "MT", isCurrentUser: false },
  ],
  offline: [
    { id: "4", name: "Elena R.", initials: "ER" },
    { id: "5", name: "David K.", initials: "DK" },
    { id: "6", name: "Bot_Alpha", initials: "BA" },
  ],
  totalCount: 24,
  offlineCount: 21,
};

export const globalMessages = [
  {
    id: "1",
    userId: "3",
    username: "Marcus T",
    initials: "MT",
    isCurrentUser: false,
    timestamp: "Today at 10:15 AM",
    text: "Has anyone checked out the new layout update? The hard shadows are taking a minute to get used to, but I'm kind of digging the raw feel.",
  },
  {
    id: "2",
    userId: "2",
    username: "Sarah J",
    initials: "SJ",
    isCurrentUser: false,
    timestamp: "Today at 10:45 AM",
    text: "I completely agree. It feels very intentional. Less 'SaaS dashboard' and more like an old-school control panel mixed with a zine.",
  },
  {
    id: "3",
    userId: "1",
    username: "Alex Rivera",
    initials: "AR",
    isCurrentUser: true,
    timestamp: "Today at 11:02 AM",
    text: "Hey everyone! Just joined the server. Excited to see what Neochat is all about. The UI here is wild.",
  },
];

export const globalUsers = {
  online: [
    { id: "1", name: "Alex Rivera", initials: "AR", isCurrentUser: true },
    { id: "2", name: "Sarah J", initials: "SJ", isCurrentUser: false },
    { id: "3", name: "PixelPunk", initials: "PP", isCurrentUser: false },
  ],
  offline: [
    { id: "4", name: "Marcus T", initials: "MT" },
    { id: "5", name: "Guest_001", initials: "G0" },
  ],
  totalCount: 15,
  offlineCount: 12,
};
