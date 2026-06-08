"use client"

import type { ReactNode } from "react"

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface EditorDialogContentProps {
  title: string
  description?: string
  footer?: ReactNode
  children?: ReactNode
  className?: string
}

export function EditorDialogContent({
  title,
  description,
  footer,
  children,
  className,
}: EditorDialogContentProps) {
  return (
    <DialogContent
      className={cn(
        "max-w-md gap-5 rounded-3xl border border-surface-border bg-elevated p-6 text-copy-primary shadow-2xl shadow-base/70 ring-0",
        className
      )}
    >
      <DialogHeader>
        <DialogTitle className="text-base font-semibold text-copy-primary">
          {title}
        </DialogTitle>
        {description ? (
          <DialogDescription className="text-sm leading-6 text-copy-muted">
            {description}
          </DialogDescription>
        ) : null}
      </DialogHeader>

      {children ? <div className="text-sm text-copy-secondary">{children}</div> : null}

      {footer ? (
        <DialogFooter className="-mx-6 -mb-6 border-surface-border bg-surface p-4">
          {footer}
        </DialogFooter>
      ) : null}
    </DialogContent>
  )
}
