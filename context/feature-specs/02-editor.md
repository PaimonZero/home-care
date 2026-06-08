We need the base chrome components that frame every editor screen - the top navbar and the left sidebar shell. There will be reused and extended in every chapter the follows.

## Editor navbar

Create `components/editor/editor-navbar.tsx`

Requirements:

- fixed-height top navbar
- left, center, and right sections
- left section contains sidebar toggle button
- use `PanelLeftOpen` / `PanelLeftClose` icons based on sidebar state
- right section stays empty for now
- dark background with subtle bottom border

### Project Sidebar

Create `components/editor/project-sidebar.tsx`

Requirements:

- sidebar should float above the editor canvas
- opening it should not push page content
- slides in from the left
- accepts `isOpen` prop
- header with `Project` title + close button
- shadcn `Tabs`:
  - My Project
  - Shared
- both tabs show empty placeholder state
- full-width `New Project` button at the bottom with `Plus` icon

## Dialog patten

Use the existing color tokens form `globals.css` for the dialog styling.

Support:

- title
- description
- footer actions

Do not build actual dialogs yet.

### Check when done

- new components compile without TypeScripts error.
- no lint error
- dialog patten is ready for future use
