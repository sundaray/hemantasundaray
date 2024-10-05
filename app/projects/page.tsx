import { Icons } from "@/components/icons"

export default function ProjectsPage() {
  return (
    <div className="container max-w-xl">
      <h1 className="mb-4 text-4xl font-bold">Projects</h1>
      <div className="rounded-md border bg-slate-50 p-4 md:p-6">
          <a 
            href="https://www.makeaudio.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:underline transition"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              www.makeaudio.app
            </h2>
            <Icons.externalLink className="inline-block size-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        <p className="text-slate-600">Convert text to audio</p>
        <p className="mt-4 text-sm text-slate-500">Launched in March, 2024</p>
        <p className="text-sm text-slate-500">Total revenue till date: $105</p>
      </div>
    </div>
  )
}