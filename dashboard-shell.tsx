import type { ReactNode } from "react"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Freelancer Dashboard</span>
          </div>
          <nav className="flex items-center gap-4">
            <div className="relative h-8 w-8 rounded-full bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">JD</div>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid items-start gap-6 py-8">{children}</div>
      </main>
    </div>
  )
}
