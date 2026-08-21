import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'glass border-b border-text-faint/40' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm text-text-primary">
          <span className="text-accent-cyan">&gt;</span> abdul_rehman
          <span className="animate-pulse text-accent-cyan">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-accent-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full border border-accent-cyan/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent-cyan transition-all hover:bg-accent-cyan/10 hover:shadow-[0_0_20px_rgba(0,245,196,0.25)]"
            >
              say hi
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className={`h-px w-6 bg-text-primary transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-text-primary transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-text-primary transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <ul className="glass flex flex-col gap-1 border-t border-text-faint/40 px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm uppercase tracking-widest text-text-muted hover:text-accent-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  )
}
