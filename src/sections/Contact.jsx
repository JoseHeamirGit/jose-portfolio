import { ArrowRight, FileDown } from 'lucide-react'
import Section from '../components/Section'
import { contactMethods, profile } from '../data/portfolio'

function Contact() {
  return (
    <Section id="contact" className="pb-14">
      <div className="rounded-lg border border-emerald-300/25 bg-emerald-400/[0.08] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Looking for a Full Stack Developer with Java depth and React range?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              I am open to conversations about backend engineering, payroll
              products, integrations, and software leadership roles.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {contactMethods.map((method) => {
              const Icon = method.icon

              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
                >
                  <Icon size={18} />
                  {method.value}
                </a>
              )
            })}
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-300/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-lime-300/60 hover:bg-emerald-300/10"
            >
              <FileDown size={18} />
              Download Resume
            </a>
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Back to Top
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
