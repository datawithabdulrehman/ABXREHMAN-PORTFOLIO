import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/profile'

const ACCENT_MAP = {
  cyan: { text: 'text-accent-cyan', border: 'hover:border-accent-cyan/60', ring: 'group-hover:shadow-[0_0_30px_rgba(0,245,196,0.15)]' },
  purple: { text: 'text-accent-purple', border: 'hover:border-accent-purple/60', ring: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]' },
  pink: { text: 'text-accent-pink', border: 'hover:border-accent-pink/60', ring: 'group-hover:shadow-[0_0_30px_rgba(244,63,142,0.15)]' },
  orange: { text: 'text-accent-orange', border: 'hover:border-accent-orange/60', ring: 'group-hover:shadow-[0_0_30px_rgba(255,107,53,0.15)]' },
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="cell-label text-accent-orange">
        In [04]: <span className="text-text-muted">projects.load_all()</span>
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
        Notebooks turned into products
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const accent = ACCENT_MAP[p.accent]
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className={`group relative flex flex-col rounded-2xl border border-text-faint/40 bg-bg-card p-6 transition-all ${accent.border} ${accent.ring}`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs ${accent.text}`}>[{p.id}]</span>
                <div className="flex items-center gap-3 text-text-muted">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="transition-colors hover:text-text-primary"
                  >
                    <FiGithub size={18} />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="transition-colors hover:text-text-primary"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-text-primary">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-text-faint/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
