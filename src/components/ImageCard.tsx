import * as React from "react"

import { cn } from "@/lib/utils"

function ImageCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card"
      className={cn(
        "bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function ImageCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function ImageCardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function ImageCardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function ImageCardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function ImageCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-content"
      className={cn("px-6 py-6", className)}
      {...props}
    />
  )
}

function ImageCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

// Image container component for the top part
function ImageCardImage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-image"
      className={cn("", className)}
      {...props}
    />
  )
}

export {
  ImageCard,
  ImageCardHeader,
  ImageCardFooter,
  ImageCardTitle,
  ImageCardAction,
  ImageCardDescription,
  ImageCardContent,
  ImageCardImage,
}