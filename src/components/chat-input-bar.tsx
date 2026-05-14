"use client";

import { PlusCircle, Smile, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ChatInputBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder: string;
};

export default function ChatInputBar({ value, onChange, onSend, placeholder }: ChatInputBarProps) {
  return (
    <>
      <div className="border-t-2 border-t-[#ccc] border-dashed" />
      <div className="py-3 px-5 border-t-2 border-t-black flex items-center gap-2 bg-white shrink-0 flex-col">
        <div className="flex w-full items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 border-none bg-transparent hover:bg-transparent shrink-0"
            aria-label="Attach file"
          >
            <PlusCircle size={18} color="#555" />
          </Button>
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
            placeholder={placeholder}
            className="flex-1 border-2 border-black py-2 px-3 font-mono text-sm outline-none bg-neo-bg rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
          />
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 border-none bg-transparent hover:bg-transparent shrink-0"
            aria-label="Emoji"
          >
            <Smile size={18} color="#555" />
          </Button>
          <Button
            onClick={onSend}
            size="icon"
            className="w-9 h-9 border-2 border-black bg-neo-orange hover:bg-neo-orange shadow-neo-xs shrink-0 neo-btn-hover"
            aria-label="Send message"
          >
            <Send size={14} color="#fff" />
          </Button>
        </div>
        <div className="w-full text-center text-[0.7rem] text-[#999] font-mono">
          Bold text uses <strong>**</strong>
        </div>
      </div>
    </>
  );
}
