export default function Loading() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-72 min-h-screen bg-black border-r border-neutral-800 animate-pulse" />
      <div className="flex-1 p-8">
        <div className="h-10 w-64 bg-neutral-200 rounded mb-2 animate-pulse" />
        <div className="h-5 w-48 bg-neutral-100 rounded mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-neutral-100 border border-neutral-200 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="h-96 bg-neutral-100 border border-neutral-200 rounded-lg animate-pulse" />
      </div>
    </div>
  )
}
