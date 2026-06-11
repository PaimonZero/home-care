"use client"

import { Pencil, Plus, Trash2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { MockProject } from "@/components/editor/use-project-dialogs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  projects?: MockProject[]
  onClose?: () => void
  onNewProject?: () => void
  onRenameProject?: (project: MockProject) => void
  onDeleteProject?: (project: MockProject) => void
  className?: string
}

function EmptyProjectState({ label }: { label: string }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border-subtle bg-elevated/60 p-6 text-center">
      <p className="text-sm font-medium text-copy-secondary">{label}</p>
      <p className="mt-2 max-w-48 text-sm text-copy-muted">
        Create a project to start building a system design.
      </p>
    </div>
  )
}

function ProjectList({
  projects,
  onRenameProject,
  onDeleteProject,
}: {
  projects: MockProject[]
  onRenameProject?: (project: MockProject) => void
  onDeleteProject?: (project: MockProject) => void
}) {
  if (projects.length === 0) {
    return <EmptyProjectState label="No projects yet" />
  }

  return (
    <div className="space-y-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group flex items-center justify-between gap-3 rounded-xl border border-surface-border bg-elevated px-3 py-2"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-copy-primary">
              {project.name}
            </p>
            <p className="truncate font-mono text-xs text-copy-muted">
              {project.slug}
            </p>
          </div>

          {project.owned ? (
            <div className="flex shrink-0 items-center gap-1">
              <Button
                aria-label={`Rename ${project.name}`}
                variant="ghost"
                size="icon-sm"
                onClick={() => onRenameProject?.(project)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                aria-label={`Delete ${project.name}`}
                variant="ghost"
                size="icon-sm"
                onClick={() => onDeleteProject?.(project)}
              >
                <Trash2 className="h-4 w-4 text-state-error" />
              </Button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function ProjectSidebar({
  isOpen,
  projects = [],
  onClose,
  onNewProject,
  onRenameProject,
  onDeleteProject,
  className,
}: ProjectSidebarProps) {
  const ownedProjects = projects.filter((project) => project.owned)
  const sharedProjects = projects.filter((project) => !project.owned)

  return (
    <aside
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "fixed bottom-4 left-4 top-16 z-40 flex w-[min(20rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-surface-border bg-sidebar/95 shadow-2xl shadow-base/60 backdrop-blur transition-all duration-200",
        isOpen
          ? "translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-[calc(100%+1rem)] opacity-0",
        className
      )}
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border px-4">
        <h2 className="text-sm font-semibold text-copy-primary">Project</h2>
        <Button
          aria-label="Close project sidebar"
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-project" className="min-h-0 flex-1 gap-0">
        <div className="border-b border-surface-border px-4 py-3">
          <TabsList className="grid w-full grid-cols-2 bg-subtle">
            <TabsTrigger value="my-project">My Project</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="min-h-0 flex-1">
          <div className="p-4">
            <TabsContent value="my-project">
              <ProjectList
                projects={ownedProjects}
                onRenameProject={onRenameProject}
                onDeleteProject={onDeleteProject}
              />
            </TabsContent>
            <TabsContent value="shared">
              {sharedProjects.length > 0 ? (
                <ProjectList projects={sharedProjects} />
              ) : (
                <EmptyProjectState label="No shared projects" />
              )}
            </TabsContent>
          </div>
        </ScrollArea>
      </Tabs>

      <div className="shrink-0 border-t border-surface-border p-4">
        <Button className="w-full" onClick={onNewProject}>
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
