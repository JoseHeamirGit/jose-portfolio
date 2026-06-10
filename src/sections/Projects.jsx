import { ArrowUpRight, FolderKanban } from 'lucide-react'
import Section from '../components/Section'
import { projects } from '../data/portfolio'

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected backend projects built around real business workflows."
      className="bg-slate-900/45"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group relative flex min-h-[340px] overflow-hidden rounded-lg border border-emerald-300/15 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-emerald-300/45"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 opacity-80" />
            <div className="absolute -right-16 -top-16 size-36 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-lime-300/15" />

            <div className="relative flex w-full flex-col">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-md bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                      <FolderKanban size={21} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Project 0{index + 1}
                    </span>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {project.name}
                  </h3>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 text-slate-300 transition group-hover:border-emerald-300/45 group-hover:text-emerald-200">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <p className="leading-7 text-slate-300">{project.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-6">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
