import {
  ArrowRight,
  Cpu,
  FileDown,
  Leaf,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import { profile, stats } from '../data/portfolio'

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pt-36"
    >
      <div className="hero-aurora absolute inset-0 -z-10" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-45" />
      <div className="jungle-canopy absolute inset-x-0 top-0 -z-10 h-44" />
      <div className="data-vine absolute left-[8%] top-24 -z-10 hidden h-72 w-px sm:block" />
      <div className="data-vine delay-300 absolute right-[12%] top-20 -z-10 hidden h-80 w-px sm:block" />
      <div className="leaf-fall absolute left-[18%] top-24 -z-10 text-emerald-300/30">
        <Leaf size={34} />
      </div>
      <div className="leaf-fall delay-500 absolute right-[22%] top-32 -z-10 text-lime-300/25">
        <Leaf size={28} />
      </div>
      <div className="absolute left-[8%] top-28 -z-10 size-28 rounded-full border border-emerald-300/20 animate-drift" />
      <div className="absolute bottom-24 right-[10%] -z-10 size-40 rounded-full border border-lime-200/10 animate-drift delay-300" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex animate-rise items-center gap-2 rounded-md border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.16)]">
            <Sparkles size={16} />
            {profile.title}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            <span className="intro-line block">{profile.name}</span>
            <span className="intro-line text-3xl delay-100 mt-2 block text-emerald-300 sm:mt-3">
              Full Stack Developer
            </span>
            
          </h1>

          <p className="intro-line delay-300 mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build dependable Java backend systems like trail maps through
            complex product terrain: payroll workflows, REST APIs, integrations,
            and clean React interfaces.
          </p>

          <div className="intro-line delay-400 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-300/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-lime-300/60 hover:bg-emerald-300/10"
            >
              <FileDown size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative animate-rise delay-150">
          <div className="float-slow absolute -right-1 -top-8 hidden rounded-md border border-emerald-300/20 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-emerald-200 shadow-xl shadow-slate-950/40 sm:inline-flex">
            Spring Boot
          </div>
          <div className="float-slow delay-500 absolute -bottom-4 left-7 hidden rounded-md border border-lime-300/20 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-lime-200 shadow-xl shadow-slate-950/40 sm:inline-flex">
            React
          </div>
          <div className="rounded-lg border border-emerald-300/15 bg-white/[0.04] p-5 shadow-2xl shadow-emerald-950/30 backdrop-blur">
            <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-300" />
              <span className="size-3 rounded-full bg-emerald-400" />
              <div className="ml-auto flex items-center gap-2 text-xs text-slate-500">
                <TerminalSquare size={14} />
                {/* canopy.profile */}
              </div>
            </div>
            <pre className="overflow-x-auto pb-1 text-sm leading-7 text-slate-300">
              <code>{`const developer = {
  name: 'Jose Heamir',
  title: 'Full Stack Developer',
  backend: ['Java', 'Spring Boot', 'REST APIs'],
  database: ['MySQL'],
  frontend: ['React'],
  exploring: ['Microservices', 'AI Integration', 'Cloud Technologies'],
  focus: 'Building scalable business applications'
}`}</code>
            </pre>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-emerald-300/15 bg-slate-900/70 p-4"
              >
                <Cpu className="mb-3 text-emerald-300" size={17} />
                <p className="text-sm font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
