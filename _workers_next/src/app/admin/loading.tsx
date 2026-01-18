export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="md:hidden h-12 border-b bg-background/90" />
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="hidden md:flex md:flex-col md:w-64 bg-muted/40 border-r p-6 gap-4">
          <div className="h-6 w-32 rounded-md bg-muted/60 animate-pulse" />
          <div className="space-y-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-9 w-full rounded-md bg-muted/50 animate-pulse" />
            ))}
          </div>
        </aside>
        <main className="flex-1 p-6 md:p-12 space-y-6">
          <div className="h-8 w-48 rounded-md bg-muted/60 animate-pulse" />
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 rounded-xl bg-muted/40 animate-pulse" />
            ))}
          </div>
          <div className="h-64 rounded-xl bg-muted/40 animate-pulse" />
        </main>
      </div>
    </div>
  )
}
