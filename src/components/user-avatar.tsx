import { cn } from "@/lib/utils";

type UserAvatarProps = {
  initials: string;
  isCurrentUser?: boolean;
  showOnlineDot?: boolean;
  offline?: boolean;
  size?: "sm" | "md";
};

export default function UserAvatar({
  initials,
  isCurrentUser = false,
  showOnlineDot = false,
  offline = false,
  size = "sm",
}: UserAvatarProps) {
  const sizeClass = size === "md" ? "w-9 h-9" : "w-8 h-8";

  const colorClass = offline
    ? "border-[#999] bg-[#e0e0e0] text-[#999]"
    : isCurrentUser
    ? "border-black bg-neo-orange text-white"
    : "border-black bg-[#e0e0e0] text-neo-text";

  if (showOnlineDot) {
    return (
      <div className="relative shrink-0">
        <div
          className={cn(
            sizeClass,
            "border-2 flex items-center justify-center font-bold text-[0.65rem] font-mono",
            colorClass
          )}
        >
          {initials}
        </div>
        <span className="absolute -bottom-[2px] -right-[2px] w-[9px] h-[9px] bg-neo-green border-2 border-white rounded-full" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        sizeClass,
        "shrink-0 border-2 flex items-center justify-center font-bold text-[0.65rem] font-mono",
        colorClass
      )}
    >
      {initials}
    </div>
  );
}
