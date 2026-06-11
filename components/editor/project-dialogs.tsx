"use client"

import type { FormEvent } from "react"

import { Dialog } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EditorDialogContent } from "@/components/editor/editor-dialog"
import type { useProjectDialogs } from "@/components/editor/use-project-dialogs"

interface ProjectDialogsProps {
  dialogs: ReturnType<typeof useProjectDialogs>
}

export function ProjectDialogs({ dialogs }: ProjectDialogsProps) {
  function handleCreateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dialogs.submitCreateProject()
  }

  function handleRenameSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dialogs.submitRenameProject()
  }

  function handleDeleteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dialogs.submitDeleteProject()
  }

  return (
    <>
      <Dialog
        open={dialogs.dialog.type === "create"}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            dialogs.closeDialog()
          }
        }}
      >
        <EditorDialogContent
          title="Create Project"
          description="Name the architecture workspace before opening the canvas."
          footer={
            <>
              <Button
                type="button"
                variant="ghost"
                onClick={dialogs.closeDialog}
                disabled={dialogs.isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="create-project-form"
                disabled={!dialogs.canSubmitProjectName || dialogs.isLoading}
              >
                Create Project
              </Button>
            </>
          }
        >
          <form
            id="create-project-form"
            className="space-y-4"
            onSubmit={handleCreateSubmit}
          >
            <label className="block space-y-2">
              <span className="text-sm font-medium text-copy-secondary">
                Project name
              </span>
              <Input
                className="bg-surface text-copy-primary placeholder:text-copy-muted"
                value={dialogs.projectName}
                onChange={(event) => dialogs.setProjectName(event.target.value)}
                placeholder="Realtime payments system"
              />
            </label>
            <div className="rounded-xl border border-surface-border bg-surface px-3 py-2">
              <p className="text-xs font-medium uppercase text-copy-faint">
                Slug preview
              </p>
              <p className="mt-1 font-mono text-sm text-brand">
                {dialogs.slugPreview}
              </p>
            </div>
          </form>
        </EditorDialogContent>
      </Dialog>

      <Dialog
        open={dialogs.dialog.type === "rename"}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            dialogs.closeDialog()
          }
        }}
      >
        <EditorDialogContent
          title="Rename Project"
          description={`Current project name: ${
            dialogs.dialog.project?.name ?? "Untitled project"
          }`}
          footer={
            <>
              <Button
                type="button"
                variant="ghost"
                onClick={dialogs.closeDialog}
                disabled={dialogs.isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="rename-project-form"
                disabled={!dialogs.canSubmitProjectName || dialogs.isLoading}
              >
                Rename Project
              </Button>
            </>
          }
        >
          <form
            id="rename-project-form"
            className="space-y-4"
            onSubmit={handleRenameSubmit}
          >
            <label className="block space-y-2">
              <span className="text-sm font-medium text-copy-secondary">
                Project name
              </span>
              <Input
                autoFocus
                className="bg-surface text-copy-primary placeholder:text-copy-muted"
                value={dialogs.projectName}
                onChange={(event) => dialogs.setProjectName(event.target.value)}
              />
            </label>
          </form>
        </EditorDialogContent>
      </Dialog>

      <Dialog
        open={dialogs.dialog.type === "delete"}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            dialogs.closeDialog()
          }
        }}
      >
        <EditorDialogContent
          title="Delete Project"
          description={`Delete ${
            dialogs.dialog.project?.name ?? "this project"
          }? This action cannot be undone.`}
          footer={
            <>
              <Button
                type="button"
                variant="ghost"
                onClick={dialogs.closeDialog}
                disabled={dialogs.isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="delete-project-form"
                variant="destructive"
                disabled={dialogs.isLoading}
              >
                Delete Project
              </Button>
            </>
          }
        >
          <form id="delete-project-form" onSubmit={handleDeleteSubmit}>
            <p className="text-sm leading-6 text-copy-secondary">
              Confirming will remove this mock project from the sidebar for the
              current session.
            </p>
          </form>
        </EditorDialogContent>
      </Dialog>
    </>
  )
}
