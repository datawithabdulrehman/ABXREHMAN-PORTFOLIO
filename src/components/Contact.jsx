import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { profile } from '../data/profile'

// Fill these in with your own EmailJS credentials (emailjs.com → Email Services / Templates).
const SERVICE_ID = 'service_pxyxzvi'
const TEMPLATE_ID = 'template_5ay1d1q'
const PUBLIC_KEY = 'c4tZ-LHuh7Q4IL6Ho'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: FiMail, label: 'Email', href: `mailto:${profile.email}` },
]

export default function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    if (SERVICE_ID.startsWith('YOUR_')) {
      toast.error('Connect EmailJS credentials in Contact.jsx to enable this form.')
      return
    }

    setSending(true)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      toast.success("Message sent — I'll get back to you soon!")
      formRef.current.reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section">
      <p className="cell-label text-accent-cyan">
        In [05]: <span className="text-text-muted">contact.send()</span>
      </p>

      <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Let's build something with data.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
            Open to internships, collaborations, and interesting ML
            problems. Drop a message and I'll reply as soon as I can.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                className="glass flex w-fit items-center gap-3 rounded-full border border-text-faint/40 px-5 py-2.5 text-sm text-text-primary transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass flex flex-col gap-4 rounded-2xl border border-text-faint/40 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="user_name" className="cell-label text-text-muted">name</label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-text-faint/50 bg-bg-card px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-faint focus:border-accent-cyan"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="cell-label text-text-muted">email</label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-text-faint/50 bg-bg-card px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-faint focus:border-accent-cyan"
            />
          </div>
          <div>
            <label htmlFor="message" className="cell-label text-text-muted">message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell me about your project or idea..."
              className="mt-2 w-full resize-none rounded-lg border border-text-faint/50 bg-bg-card px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-faint focus:border-accent-cyan"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent-cyan px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg-primary transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <FiSend size={14} />
            {sending ? 'sending…' : 'send message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
