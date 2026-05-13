"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-neo-yellow flex items-center justify-center font-mono">
      <div className="bg-white border-[3px] border-black shadow-neo-xl w-[420px] py-12 px-10 flex flex-col items-center gap-5">
        {/* App name */}
        <span className="font-mono font-bold text-[0.8rem] tracking-[0.15em] uppercase text-neo-text">
          NEOCHAT
        </span>

        {/* Heading */}
        <h1 className="font-syne text-[2rem] m-0 text-center text-neo-text">
          Welcome back.
        </h1>

        <div className="w-full border-t border-[#eee]" />

        {/* Google button */}
        <Button
          onClick={() => signIn("google", { callbackUrl: "/messages" })}
          className="w-full bg-white hover:bg-white border-2 border-black shadow-neo py-[14px] px-5 font-mono font-bold text-[0.9rem] text-neo-text tracking-[0.02em] neo-btn-hover rounded-none h-auto gap-[10px]"
        >
          <LogIn size={18} />
          Continue with Google
        </Button>

        {/* Sign up link */}
        <p className="text-[0.85rem] text-neo-muted m-0 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-neo-orange font-bold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
