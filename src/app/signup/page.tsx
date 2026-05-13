"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-neo-orange flex items-center justify-center font-mono">
      <div className="bg-white border-[3px] border-black shadow-neo-xl w-[420px] py-12 px-10 flex flex-col items-center gap-5">
        {/* Heading */}
        <h1 className="font-syne text-[2rem] m-0 text-center text-neo-text">
          Join the conversation.
        </h1>

        <p className="font-mono text-[0.875rem] text-neo-muted m-0 text-center leading-[1.5]">
          Create an account to get started.
        </p>

        <div className="w-full border-t border-[#eee]" />

        {/* Google button */}
        <Button
          onClick={() => signIn("google", { callbackUrl: "/messages" })}
          className="w-full bg-white hover:bg-white border-2 border-black shadow-neo py-[14px] px-5 font-mono font-bold text-[0.85rem] text-neo-text tracking-[0.08em] uppercase neo-btn-hover rounded-none h-auto gap-[10px]"
        >
          <GoogleIcon />
          CONTINUE WITH GOOGLE
        </Button>

        {/* Sign in link */}
        <p className="text-[0.85rem] text-neo-muted m-0 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-neo-orange font-bold underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
