import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type UserAvatarProps = {
  initials: string;
  image?: string | null;
  isCurrentUser?: boolean;
  showOnlineDot?: boolean;
  offline?: boolean;
  size?: "sm" | "md";
};

export default function UserAvatar({
  initials,
  image,
  isCurrentUser = false,
  showOnlineDot = false,
  offline = false,
  size = "sm",
}: UserAvatarProps) {
  const sizeClass = size === "md" ? "w-9 h-9" : "w-8 h-8";

  const borderClass = offline ? "border-[#999]" : "border-black";
  const bgClass = offline
    ? "bg-[#e0e0e0]"
    : isCurrentUser
    ? "bg-neo-orange"
    : "bg-[#e0e0e0]";
  const textClass = offline
    ? "text-[#999]"
    : isCurrentUser
    ? "text-white"
    : "text-neo-text";

  const avatar = (
    <Avatar
      className={cn(
        sizeClass,
        "rounded-none border-2",
        borderClass,
        bgClass,
        !showOnlineDot && "shrink-0"
      )}
    >
      {image && <AvatarImage src={image} referrerPolicy="no-referrer" />}
      <AvatarFallback className={cn("text-[0.65rem]", bgClass, textClass)}>
        {initials}
      </AvatarFallback>
    </Avatar>
  );

  if (showOnlineDot) {
    return (
      <div className="relative shrink-0">
        {avatar}
        <span className="absolute -bottom-[2px] -right-[2px] w-[9px] h-[9px] bg-neo-green border-2 border-white rounded-full" />
      </div>
    );
  }

  return avatar;
}
