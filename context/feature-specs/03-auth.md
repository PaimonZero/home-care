Clerk is already installed and connected. Wire it into the next.js app: provider, auth pages, redirect, route protection and user menu.

## Design

Use Clerk's `dark` theme from `@clerk/ui/themes` as the base.

Override Clerk appearance variable using the app's existing CSS variables. Do not hardcode colors.

### Sign-in and sign-up pages:

- large screens: simple two-panel layout
- left: compact logo, tagline, short text-only feature list
- right: centered Clerk form
- small screens: form only
- no gradients
- no oversized hero sections
- no feature cards
- no scroll-heavy layouts

Keep the layout minimal and professional.

## Implementation

Wrap the root layout with `ClerkProvider` using Clerk's `dark` theme.

Create Sign-in and Sign-up pages using Clerk components.

Use `proxy.ts` at the project root, not `middleware.ts`.

Define public routes using the existing sign-in and sign-up env vars. Protect anything by default.

Update `/`:

- authenticated users redirect to '/editor'
- unauthenticated users redirect to '/sign-in'

Add Clerk's built-in `UserButton` to the editor navbar right section for profile setting and logout

Keep Clerk's default user menu and profile flows intact. Do not rebuild or heavily customize Clerk internals.

Use the existing Clerk env vars. Do not rename or invent new ones.

## Dependencies

install: @clerk/ui

## Check when done

- `proxy.ts` exist at the root
- all routes are protected except public auth path
- auth pages use CSS variables with no hardcoded colors
- `ClerkProvider` wraps the root layout
- `npm run build` passes
