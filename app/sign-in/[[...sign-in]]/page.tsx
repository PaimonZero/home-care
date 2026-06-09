import { SignIn } from "@clerk/nextjs"

import { AuthShell } from "@/components/auth/auth-shell"
import { AFTER_SIGN_IN_URL, SIGN_IN_PATH, SIGN_UP_URL } from "@/lib/auth-routes"
import { clerkAppearance } from "@/lib/clerk-appearance"

export default function SignInPage() {
  return (
    <AuthShell>
      <SignIn
        appearance={clerkAppearance}
        fallbackRedirectUrl={AFTER_SIGN_IN_URL}
        forceRedirectUrl={AFTER_SIGN_IN_URL}
        path={SIGN_IN_PATH}
        routing="path"
        signUpUrl={SIGN_UP_URL}
      />
    </AuthShell>
  )
}
