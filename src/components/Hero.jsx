import { useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile, stats } from '../data/profile'

export default function Hero() {
  const headingRef = useRef(null)
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.4 })

  useGSAP(
    () => {
      if (!headingRef.current) return
      const letters = headingRef.current.querySelectorAll('.letter')
      gsap.from(letters, {
        y: 40,
        opacity: 0,
        rotateX: -60,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      })
    },
    { scope: headingRef },
  )

  const name = profile.name

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 animate-blob rounded-full bg-accent-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 animate-blob rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="section grid gap-14 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="cell-label mb-4 text-accent-cyan">
            In [01]: <span className="text-text-muted">whoami()</span>
          </p>

          <h1
            ref={headingRef}
            className="font-display text-4xl font-extrabold leading-[1.05] text-text-primary sm:text-5xl md:text-6xl"
            style={{ perspective: 600 }}
          >
            {name.split('').map((ch, i) => (
              <span className="letter inline-block" key={i}>
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-accent-cyan sm:text-xl">
            <span className="text-text-muted">$ </span>
            <TypeAnimation
              sequence={profile.roles.flatMap((r) => [r, 1800])}
              wrapper="span"
              speed={45}
              deletionSpeed={60}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted">
            {profile.education}, based in {profile.location}. I turn messy
            datasets into models, dashboards, and decisions — one notebook
            cell at a time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent-cyan px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg-primary transition-transform hover:scale-105 hover:animate-glow-pulse"
            >
              view projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-text-faint px-6 py-3 font-mono text-xs uppercase tracking-widest text-text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            >
              get in touch
            </a>
            <div className="ml-1 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-text-muted transition-colors hover:text-accent-cyan"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted transition-colors hover:text-accent-cyan"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* notebook "Out[]" cell — signature element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass rounded-2xl border border-text-faint/50 p-6 shadow-2xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-pink/70" />
            <span className="h-3 w-3 rounded-full bg-accent-orange/70" />
            <span className="h-3 w-3 rounded-full bg-accent-cyan/70" />
            <span className="ml-2 font-mono text-xs text-text-muted">portfolio.ipynb</span>
          </div>

          <p className="cell-label text-accent-purple">Out [01]:</p>
          <div ref={statsRef} className="mt-4 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-text-faint/40 bg-bg-card px-3 py-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-accent-cyan sm:text-3xl">
                  {statsInView ? (
                    <CountUp end={s.value} duration={1.6} suffix={s.suffix} />
                  ) : (
                    `0${s.suffix}`
                  )}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-text-faint/40 bg-bg-card p-4 font-mono text-xs leading-relaxed text-text-muted">
            <p><span className="text-accent-pink">status</span> = <span className="text-accent-cyan">"open to opportunities"</span></p>
            <p><span className="text-accent-pink">stack</span> = [<span className="text-accent-cyan">"python"</span>, <span className="text-accent-cyan">"ml"</span>, <span className="text-accent-cyan">"data"</span>]</p>
            <p><span className="text-accent-pink">learning</span> = <span className="text-accent-cyan">True</span></p>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float text-text-muted sm:block"
      >
        <FiArrowDown size={20} />
      </a>
    </section>
  )
}
