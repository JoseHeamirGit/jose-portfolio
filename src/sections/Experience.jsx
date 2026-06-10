import Section from '../components/Section'
import { experience } from '../data/portfolio'

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Leadership across backend delivery and product systems."
    >
      <div className="space-y-6">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                {item.period}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.role}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{item.company}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.focus.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-slate-300"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-3 text-slate-300">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3 leading-7">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-lime-300" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Experience
