import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-text-faint/40 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center md:flex-row md:justify-between md:px-10">
        <p className="font-mono text-xs text-text-muted">
          © {year} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-text-muted transition-colors hover:text-accent-cyan"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  )
}
