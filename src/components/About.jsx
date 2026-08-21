import { motion } from 'framer-motion'
import { FiMapPin, FiBookOpen, FiTarget } from 'react-icons/fi'
import { profile } from '../data/profile'

const facts = [
  { icon: FiBookOpen, label: 'education', value: profile.education },
  { icon: FiMapPin, label: 'based in', value: profile.location },
  { icon: FiTarget, label: 'focus', value: 'Machine Learning & Data Science' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <p className="cell-label text-accent-purple">In [02]: <span className="text-text-muted">about.py</span></p>

      <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Curious by nature,{' '}
            <span className="text-accent-cyan">analytical</span> by training.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted">
            I'm {profile.name}, a Data Science student at the Virtual
            University of Pakistan, spending most of my time inside Jupyter
            notebooks trying to make sense of numbers. I like the moment a
            model finally clicks — when a scatterplot stops looking like
            noise and starts looking like a story.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            My work so far spans regression and forecasting, computer
            vision, and recommendation systems — small, self-driven projects
            that let me practice the full pipeline: cleaning data, building
            models, and shipping something people can actually try.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4"
        >
          {facts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass flex items-start gap-4 rounded-xl border border-text-faint/40 p-5"
            >
              <span className="rounded-lg bg-accent-cyan/10 p-2.5 text-accent-cyan">
                <Icon size={18} />
              </span>
              <div>
                <p className="cell-label text-text-muted">{label}</p>
                <p className="mt-1 text-sm text-text-primary">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
