import Section from '../components/Section'
import { skillCategories } from '../data/portfolio'

const accentStyles = {
  sky: {
    icon: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/20',
    bar: 'from-emerald-300 to-lime-300',
    glow: 'shadow-emerald-950/30',
  },
  cyan: {
    icon: 'bg-cyan-400/10 text-cyan-300 ring-cyan-400/20',
    bar: 'from-cyan-300 to-emerald-300',
    glow: 'shadow-cyan-950/30',
  },
  emerald: {
    icon: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/20',
    bar: 'from-emerald-300 to-lime-300',
    glow: 'shadow-emerald-950/30',
  },
  indigo: {
    icon: 'bg-indigo-400/10 text-indigo-300 ring-indigo-400/20',
    bar: 'from-indigo-300 to-emerald-300',
    glow: 'shadow-indigo-950/30',
  },
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A balanced toolkit for building, shipping, and leading."
      className="bg-slate-900/45"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon
          const styles = accentStyles[category.accent]

          return (
            <article
              key={category.title}
              className={`group rounded-lg border border-emerald-300/15 bg-slate-950/70 p-6 shadow-2xl ${styles.glow} transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-slate-950`}
            >
              <div className="mb-7 flex items-start gap-4">
                <div
                  className={`grid size-12 shrink-0 place-items-center rounded-md ring-1 ${styles.icon}`}
                >
                  <CategoryIcon size={23} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon

                  return (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white/[0.04] text-slate-300 ring-1 ring-white/10">
                            <SkillIcon size={16} />
                          </span>
                          <span className="truncate text-sm font-semibold text-slate-100">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-slate-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-2.5 overflow-hidden rounded-full bg-slate-800 ring-1 ring-white/5"
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${styles.bar} shadow-[0_0_18px_rgba(125,211,252,0.18)]`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export default Skills
