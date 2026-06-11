import { SignUp } from "@clerk/nextjs"

import { AuthShell } from "@/components/auth/auth-shell"
import { AFTER_SIGN_UP_URL, SIGN_IN_URL, SIGN_UP_PATH } from "@/lib/auth-routes"
import { clerkAppearance } from "@/lib/clerk-appearance"

export default function SignUpPage() {
  return (
    <AuthShell>
      <SignUp
        appearance={clerkAppearance}
        fallbackRedirectUrl={AFTER_SIGN_UP_URL}
        forceRedirectUrl={AFTER_SIGN_UP_URL}
        path={SIGN_UP_PATH}
        routing="path"
        signInUrl={SIGN_IN_URL}
      />
    </AuthShell>
  )
}
