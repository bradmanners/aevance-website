import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Video, CheckCircle, Mail, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
}

const consultationTypes = [
  { id: 'discovery', title: 'Discovery Meeting', duration: '30 minutes', description: 'Initial consultation to understand your needs and challenges.', icon: Calendar },
  { id: 'strategy', title: 'Strategy Session', duration: '60 minutes', description: 'Deep-dive strategic planning session with actionable recommendations.', icon: Users },
  { id: 'workshop', title: 'Executive Workshop', duration: '2–4 hours', description: 'Comprehensive workshop with your leadership team.', icon: Video },
]

const benefits = [
  { icon: CheckCircle, title: 'Quick Response', description: "We'll contact you within 24 hours to schedule your consultation." },
  { icon: Video, title: 'Flexible Format', description: 'Choose between a video call or an in-person meeting.' },
  { icon: Clock, title: 'Actionable Insights', description: 'Walk away with clear next steps and recommendations.' },
]

const Appointments = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Schedule your <span className="gradient-text">consultation</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Let's discuss how Aevance can help. Choose the consultation format that works best for you.
          </motion.p>
        </div>
      </section>

      {/* Consultation types */}
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Choose your <span className="gradient-text">consultation type</span>
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {consultationTypes.map((type, i) => {
              const Icon = type.icon
              return (
                <motion.div key={type.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08 }}>
                  <div className="aevance-card card-glow h-full p-8 text-center">
                    <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold text-foreground">{type.title}</h3>
                    <p className="mb-4 text-sm font-medium uppercase tracking-wide text-primary">{type.duration}</p>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="aevance-card p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to <span className="gradient-text">get started</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Contact us directly to schedule your consultation — we'll find the perfect time and format.
            </p>
            <div className="mx-auto mb-8 flex max-w-md items-center gap-4 rounded-xl border border-border bg-card/50 p-6 text-left">
              <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">Email us</h4>
                <a href="mailto:hello@aevance.com?subject=Consultation Booking Request" className="font-medium text-primary transition-colors hover:text-primary/80">
                  hello@aevance.com
                </a>
                <p className="mt-1 text-sm text-muted-foreground">Include your preferred consultation type</p>
              </div>
            </div>
            <a href="mailto:hello@aevance.com?subject=Consultation Booking Request&body=Hi, I'd like to schedule a consultation. Please let me know your availability." className="aevance-button text-base">
              Email to book
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
            What to <span className="gradient-text">expect</span>
          </motion.h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div key={b.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08 }}>
                  <div className="aevance-card h-full p-6 text-center">
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">{b.title}</h4>
                    <p className="text-sm text-muted-foreground">{b.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to move <span className="gradient-text">forward</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Reach out today and let's start planning.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="aevance-button text-base">
              All contact options
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="rounded-full border border-border px-7 py-3 text-base font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground">
              Our services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointments
