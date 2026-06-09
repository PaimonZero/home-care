export const SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"
export const SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"
export const AFTER_SIGN_IN_URL =
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL ?? "/editor"
export const AFTER_SIGN_UP_URL =
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL ?? "/editor"

function routePath(url: string) {
  try {
    return new URL(url).pathname
  } catch {
    return url
  }
}

export const SIGN_IN_PATH = routePath(SIGN_IN_URL)
export const SIGN_UP_PATH = routePath(SIGN_UP_URL)
