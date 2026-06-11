import type { ReactNode } from "react";
import { FileText, Network, Sparkles } from "lucide-react";

interface AuthShellProps {
  children: ReactNode;
}

const featureItems = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description:
      "Describe your system, and Ghost AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Network,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="grid min-h-screen bg-base font-sans text-copy-primary lg:grid-cols-2">
      <section className="hidden min-h-screen border-r border-surface-border bg-accent-dim px-12 py-10 lg:flex lg:flex-col xl:px-14">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-xl border border-surface-border-subtle bg-brand text-sm font-semibold text-primary-foreground">
            G
          </div>
          <span className="text-lg font-semibold text-copy-primary">
            Ghost AI
          </span>
        </div>

        <div className="flex max-w-2xl flex-1 flex-col justify-center">
          <h1 className="max-w-lg text-4xl font-semibold leading-tight text-copy-primary">
            Design systems at the speed of thought.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-copy-muted">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <ul className="mt-16 space-y-8">
            {featureItems.map(({ description, icon: Icon, title }) => (
              <li key={title} className="flex gap-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-brand bg-accent-dim text-brand">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-copy-secondary">
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-copy-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-copy-faint">
          © {new Date().getFullYear()} Ghost AI. All rights reserved.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-base px-4 py-10 sm:px-6 lg:px-12">
        <div className="flex w-full max-w-xl justify-center">{children}</div>
      </section>
    </main>
  );
}
