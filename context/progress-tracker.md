# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Light mode

## Current Goal

- Light mode toggle cascade fix is implemented and verified.

## Completed

### 00 Light Mode

- Added `context/feature-specs/00-light-mode.md`.
- Updated `context/ui-context.md` from dark-only to dark-default with optional light mode.
- Added light-mode CSS variable values in `app/globals.css`.
- Added a root theme provider that applies `dark` or `light` on `<html>` and persists selection in `localStorage`.
- Added an inline theme initialization script to avoid loading the wrong saved theme before hydration.
- Added an editor navbar theme toggle with Lucide `Sun` and `Moon` icons.
- Fixed light mode switching by applying `data-theme` on `<html>` and scoping light CSS variables to `:root[data-theme="light"]`.

### 01 Design System

- Configured shadcn/ui for the app.
- Installed UI primitives: Button, Card, Dialog, Input, Tabs, Textarea, and Scroll Area.
- Installed Lucide React and class merge utilities.
- Added Ghost AI dark theme tokens in `app/globals.css`.
- Added reusable `cn()` helper in `lib/utils.ts`.

### 02 Editor Chrome

- Added editor navbar with sidebar toggle sections.
- Added floating project sidebar with My Project and Shared tabs, placeholder states, close action, and New Project action.
- Added reusable editor dialog content pattern with title, description, and footer slots.
- Added inert closed state to the floating project sidebar for keyboard accessibility.
- Added an `/editor` route that renders the editor chrome.

### 03 Authentication

- Installed `@clerk/ui` for Clerk dark theme support.
- Wrapped the root layout in `ClerkProvider` with the Clerk dark theme and app CSS variable appearance overrides.
- Added Clerk sign-in and sign-up pages with a minimal two-panel desktop layout and form-only mobile layout.
- Updated the auth pages to use a 50/50 desktop split with a token-based colored left panel, feature rows, and bottom copyright text.
- Applied Geist Sans explicitly at the root body and Clerk appearance layer to match the UI typography guidelines.
- Added root `proxy.ts` with protected-by-default Clerk route protection, public auth routes, and a public root redirect route.
- Updated `/` to redirect authenticated users to `/editor` and unauthenticated users to `/sign-in`.
- Added Clerk `UserButton` to the editor navbar.

### 04 Project Dialogs and Editor Home

- Added the `/editor` home empty state with heading, description, and wired `New Project` action.
- Added mock project data, owned/shared project sidebar lists, and owner-only rename/delete actions.
- Added create, rename, and delete project dialogs with shared hook-managed dialog, form, and loading state.
- Added mobile sidebar backdrop scrim that closes the sidebar when tapped.
- Fixed project dialog input text contrast and slug validation for names with leading special characters.

## In Progress

- None currently.

## Next Up

- Select the next feature unit from `context/feature-specs`.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Add decisions that affect the system design or data model.

## Session Notes

- Design system implementation verified with `npm run lint` and `npm run build`.
- Editor chrome implementation verified with `npm run lint` and `npm run build`.
- Project sidebar accessibility fix verified with `npm run lint` and `npm run build`.
- Auth implementation verified with `npm run lint` and `npm run build`.
- Project dialogs and editor home implementation verified with `npm run lint` and `npm run build`.
- Project dialog input contrast and slug edge-case fixes verified with `npm run lint` and `npm run build`.
- Light mode implementation verified with `npm run lint` and `npm run build`.
- Light mode toggle cascade fix verified with `npm run lint` and `npm run build`.
