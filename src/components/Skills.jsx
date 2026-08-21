import { motion } from 'framer-motion'
import { FiCode } from 'react-icons/fi'
import {
  SiPython,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiGit,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiStreamlit,
  SiJupyter,
} from 'react-icons/si'
import { skillGroups } from '../data/profile'

const ICONS = {
  Python: SiPython,
  SQL: SiMysql,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  'Git & GitHub': SiGit,
  'Scikit-learn': SiScikitlearn,
  'TensorFlow / Keras': SiTensorflow,
  OpenCV: SiOpencv,
  Streamlit: SiStreamlit,
  'Jupyter Notebook': SiJupyter,
}

const ACCENTS = ['text-accent-cyan', 'text-accent-purple', 'text-accent-pink', 'text-accent-orange']

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="cell-label text-accent-pink">
        In [03]: <span className="text-text-muted">skills.json</span>
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
        The toolkit behind the models
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="rounded-2xl border border-text-faint/40 bg-bg-card p-6"
          >
            <p className={`font-mono text-xs uppercase tracking-widest ${ACCENTS[gi % ACCENTS.length]}`}>
              # {group.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {group.items.map((item) => {
                const Icon = ICONS[item] || FiCode
                return (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-text-faint/50 bg-bg-elevated px-3.5 py-2 text-xs text-text-primary transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
                  >
                    <Icon size={14} />
                    {item}
                  </span>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
