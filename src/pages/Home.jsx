import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Brain, Settings, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Executive Leadership',
    description: 'Interim CEO, COO and CMO services to steer your organisation through critical transitions.',
  },
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Strategic AI implementation and advisory to transform how your business operates.',
  },
  {
    icon: Settings,
    title: 'Operational Excellence',
    description: 'Streamline processes and optimise performance across your entire organisation.',
  },
  {
    icon: Briefcase,
    title: 'Project & Program Management',
    description: 'Expert delivery of complex initiatives — on scope, on time, with full accountability.',
  },
]

const principles = [
  ['Senior people', 'You work directly with operators who have run the function — not a junior bench.'],
  ['Real outcomes', 'Engagements are measured against the result they were meant to deliver.'],
  ['Full ownership', 'We plug in, take responsibility, and keep the mission on course.'],
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
}

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden aevance-hero">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Professional Services & Consulting
            </span>
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="inline-block"
            >
              Senior expertise,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.96, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="gradient-text-shimmer inline-block"
            >
              on demand.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-6 text-lg font-medium tracking-wide text-primary text-shadow-glow-teal sm:text-xl md:text-2xl"
          >
            Leadership. AI. Delivery.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Interim executive leadership, AI consulting, and hands-on delivery — senior operators who
            plug into your business and move the mission forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/services" className="aevance-button text-base">
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/appointments"
              className="rounded-full border border-border px-7 py-3 text-base font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground"
            >
              Schedule a consultation
            </Link>
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="opacity-60">
              <rect x="3" y="1" width="10" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our <span className="gradient-text">expertise</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Senior, outcome-focused services across leadership, AI, and delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="aevance-card card-glow group h-full p-8">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 font-medium text-primary transition-all hover:gap-2.5"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Value / what makes Aevance different ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            A team's output, <span className="gradient-text">without the team.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-14 max-w-2xl text-lg text-muted-foreground"
          >
            Aevance pairs senior operators with AI leverage — so a small, accountable team delivers the
            scope of a much larger one. No bench, no bloat, no drift.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-3">
            {principles.map(([title, body], i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="aevance-card p-6 text-left"
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Ready to move your <span className="gradient-text">mission</span> forward?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground"
          >
            Let's discuss where senior expertise can have the most impact. Schedule a consultation today.
          </motion.p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/appointments" className="aevance-button text-base">
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-7 py-3 text-base font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
