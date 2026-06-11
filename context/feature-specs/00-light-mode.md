# Light Mode

## Goal

Add optional light mode while keeping dark mode as the default theme.

This changes the UI theme scope from dark-only to dark-default with user-selectable light mode.

## Theme Model

- Dark mode remains the default on first load.
- Users can switch between dark and light mode from the editor navbar.
- The selected theme persists in `localStorage`.
- The active theme is applied to the root `<html>` element.
- The active theme is exposed through both the root theme class and `data-theme`.
- Avoid flash of the wrong theme before hydration.

## Token Strategy

- Continue using existing semantic CSS variables and Tailwind tokens.
- Do not replace component styles with raw color classes.
- Theme-specific values must be assigned through CSS custom properties only.
- Add light-mode values for the existing role variables:
  - `--bg-base`
  - `--bg-surface`
  - `--bg-elevated`
  - `--bg-subtle`
  - `--border-default`
  - `--border-subtle`
  - `--text-primary`
  - `--text-secondary`
  - `--text-muted`
  - `--text-faint`
  - accent, state, shadcn, and sidebar token mappings

## UI Controls

- Add a compact icon-only theme toggle to the editor navbar.
- Use Lucide `Sun` and `Moon` icons.
- Keep the existing navbar layout: sidebar toggle left, title/center area empty, user actions right.

## Clerk

- Keep Clerk appearance mapped through CSS variables.
- Do not hardcode Clerk colors.
- Clerk should follow the active CSS variable values where possible.

## Constraints

- Do not modify generated foundation components in `components/ui/*`.
- Do not add API routes or persistence beyond `localStorage`.
- Do not change canvas node color semantics in this feature.

## Check When Done

- Dark mode is still the initial/default theme.
- Light mode can be toggled from the editor navbar.
- Theme choice persists after reload.
- Existing token-based UI remains readable in both themes.
- No TypeScript errors.
- No lint errors.
