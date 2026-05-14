"use client"

import * as React from "react"
import { Avatar } from "radix-ui"
import { cn } from "@/lib/utils"

function AvatarRoot({
  className,
  ...props
}: React.ComponentProps<typeof Avatar.Root>) {
  return (
    <Avatar.Root
      className={cn("relative flex shrink-0 overflow-hidden", className)}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof Avatar.Image>) {
  return (
    <Avatar.Image
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof Avatar.Fallback>) {
  return (
    <Avatar.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center font-bold font-mono",
        className
      )}
      {...props}
    />
  )
}

export { AvatarRoot as Avatar, AvatarImage, AvatarFallback }
