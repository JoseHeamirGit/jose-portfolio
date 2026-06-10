import Section from '../components/Section'
import { highlights } from '../data/portfolio'

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A backend-minded lead who cares about product clarity."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <p className="text-2xl font-semibold leading-snug text-white">
            I turn business workflows into maintainable systems that teams can
            trust, extend, and ship.
          </p>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-300">
          <p>
            My work sits at the intersection of backend architecture, API design,
            integrations, and team leadership. I enjoy making complex business
            logic understandable, especially in payroll and employee management
            domains where correctness matters every day.
          </p>
          <p>
            Alongside Java and Spring Boot, I use React to build clean interfaces
            that communicate the product clearly and give recruiters a direct
            view into my full-stack range.
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-lg border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-slate-300"
          >
            <span className="mb-3 block h-1 w-10 rounded-full bg-lime-300" />
            {highlight}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default About
