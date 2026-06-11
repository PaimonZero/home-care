"use client"

import { useMemo, useState } from "react"

export interface MockProject {
  id: string
  name: string
  slug: string
  owned: boolean
}

type ProjectDialogType = "create" | "rename" | "delete"

interface DialogState {
  type: ProjectDialogType | null
  project: MockProject | null
}

const initialProjects: MockProject[] = [
  {
    id: "project-1",
    name: "Commerce Platform",
    slug: "commerce-platform",
    owned: true,
  },
  {
    id: "project-2",
    name: "IoT Telemetry Pipeline",
    slug: "iot-telemetry-pipeline",
    owned: true,
  },
  {
    id: "project-3",
    name: "Shared Support Desk",
    slug: "shared-support-desk",
    owned: false,
  },
]

function toProjectSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function toSlugPreview(value: string) {
  return toProjectSlug(value) || "untitled-project"
}

export function useProjectDialogs() {
  const [projects, setProjects] = useState<MockProject[]>(initialProjects)
  const [dialog, setDialog] = useState<DialogState>({
    type: null,
    project: null,
  })
  const [projectName, setProjectName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [nextProjectNumber, setNextProjectNumber] = useState(
    initialProjects.length + 1
  )

  const projectSlug = useMemo(() => toProjectSlug(projectName), [projectName])
  const slugPreview = useMemo(() => toSlugPreview(projectName), [projectName])
  const canSubmitProjectName =
    projectName.trim().length > 0 && projectSlug.length > 0

  function openCreateDialog() {
    setProjectName("")
    setDialog({ type: "create", project: null })
  }

  function openRenameDialog(project: MockProject) {
    setProjectName(project.name)
    setDialog({ type: "rename", project })
  }

  function openDeleteDialog(project: MockProject) {
    setProjectName(project.name)
    setDialog({ type: "delete", project })
  }

  function closeDialog() {
    if (isLoading) {
      return
    }

    setDialog({ type: null, project: null })
  }

  function submitCreateProject() {
    const name = projectName.trim()

    if (!name || !projectSlug) {
      return
    }

    setIsLoading(true)
    setProjects((currentProjects) => [
      {
        id: `project-${nextProjectNumber}`,
        name,
        slug: projectSlug,
        owned: true,
      },
      ...currentProjects,
    ])
    setNextProjectNumber((currentNumber) => currentNumber + 1)
    setDialog({ type: null, project: null })
    setProjectName("")
    setIsLoading(false)
  }

  function submitRenameProject() {
    const name = projectName.trim()

    if (!name || !projectSlug || !dialog.project) {
      return
    }

    setIsLoading(true)
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === dialog.project?.id
          ? { ...project, name, slug: projectSlug }
          : project
      )
    )
    setDialog({ type: null, project: null })
    setProjectName("")
    setIsLoading(false)
  }

  function submitDeleteProject() {
    if (!dialog.project) {
      return
    }

    setIsLoading(true)
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== dialog.project?.id)
    )
    setDialog({ type: null, project: null })
    setProjectName("")
    setIsLoading(false)
  }

  return {
    projects,
    dialog,
    projectName,
    setProjectName,
    slugPreview,
    canSubmitProjectName,
    isLoading,
    openCreateDialog,
    openRenameDialog,
    openDeleteDialog,
    closeDialog,
    submitCreateProject,
    submitRenameProject,
    submitDeleteProject,
  }
}
