import { dark } from "@clerk/ui/themes"

export const clerkAppearance = {
  baseTheme: dark,
  variables: {
    borderRadius: "var(--radius)",
    colorBorder: "var(--border-default)",
    colorBackground: "var(--bg-surface)",
    colorDanger: "var(--state-error)",
    colorInputBackground: "var(--bg-elevated)",
    colorInputText: "var(--text-primary)",
    colorNeutral: "var(--text-secondary)",
    colorPrimary: "var(--accent-primary)",
    colorPrimaryForeground: "var(--primary-foreground)",
    colorSuccess: "var(--state-success)",
    colorText: "var(--text-primary)",
    colorTextSecondary: "var(--text-secondary)",
    fontFamily: "var(--font-geist-sans)",
    fontFamilyButtons: "var(--font-geist-sans)",
    fontFamilyMono: "var(--font-geist-mono)",
  },
} as const
