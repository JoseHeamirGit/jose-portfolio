import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const sectionIds = ['home', ...navItems.map((item) => item.href.slice(1))]

    const updateActiveSection = () => {
      const currentSection = sectionIds.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId)

        if (!section) {
          return current
        }

        const sectionTop = section.offsetTop - 120

        return window.scrollY >= sectionTop ? sectionId : current
      }, 'home')

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const handleNavClick = (event, href) => {
    const section = document.querySelector(href)

    if (!section) {
      return
    }

    event.preventDefault()
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    section.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
    window.history.pushState(null, '', href)
    setActiveSection(href.slice(1))
    closeMenu()
  }

  const getNavLinkClass = (href) => {
    const isActive = activeSection === href.slice(1)
    const baseClass =
      'rounded-md px-3 py-2 text-sm font-medium transition hover:bg-emerald-300/10 hover:text-white'

    return isActive
      ? `${baseClass} bg-emerald-300/10 text-emerald-200 ring-1 ring-emerald-300/25`
      : `${baseClass} text-slate-300`
  }

  const getMobileNavLinkClass = (href) => {
    const isActive = activeSection === href.slice(1)
    const baseClass =
      'rounded-md px-3 py-3 text-sm font-medium transition hover:bg-emerald-300/10'

    return isActive
      ? `${baseClass} bg-emerald-300/10 text-emerald-200 ring-1 ring-emerald-300/25`
      : `${baseClass} text-slate-200`
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-300/15 bg-slate-950/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="group inline-flex items-center gap-3"
          aria-current={activeSection === 'home' ? 'page' : undefined}
        >
          <span className="grid size-9 place-items-center rounded-md border border-emerald-400/35 bg-emerald-400/10 text-sm font-bold text-emerald-200 shadow-[0_0_28px_rgba(16,185,129,0.22)]">
            J
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={getNavLinkClass(item.href)}
              aria-current={
                activeSection === item.href.slice(1) ? 'page' : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            download
            className="rounded-md bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md border border-white/10 text-slate-200"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={getMobileNavLinkClass(item.href)}
                aria-current={
                  activeSection === item.href.slice(1) ? 'page' : undefined
                }
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              download
              onClick={closeMenu}
              className="rounded-md bg-emerald-400 px-3 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
