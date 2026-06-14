import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Calendar, ArrowRight, Linkedin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
}

const contactInfo = [
  { icon: Mail, title: 'Email', details: 'hello@aevance.com', description: 'Send us an email anytime', href: 'mailto:hello@aevance.com' },
  { icon: MapPin, title: 'Location', details: 'Brisbane, QLD', description: 'Available for in-person meetings' },
  { icon: Clock, title: 'Response Time', details: '< 24 hours', description: 'We respond to all enquiries quickly' },
]

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Get in <span className="gradient-text">touch</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We'd love to hear from you. Reach out to discuss your challenges and explore how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const inner = (
                <div className="aevance-card card-glow h-full p-8 text-center">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{info.title}</h3>
                  <p className="mb-2 text-lg font-medium text-primary">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              )
              return (
                <motion.div key={info.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08 }}>
                  {info.href ? <a href={info.href} className="block">{inner}</a> : inner}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="aevance-card p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight">
                Ready to <span className="gradient-text">connect</span>?
              </h2>
              <p className="text-muted-foreground">Contact us directly, or schedule a consultation.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Email us</h4>
                  <a href="mailto:hello@aevance.com" className="text-lg font-medium text-primary transition-colors hover:text-primary/80">hello@aevance.com</a>
                  <p className="mt-1 text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50 sm:flex-row sm:items-center">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground">Book a consultation</h4>
                  <p className="text-muted-foreground">Schedule a free discovery call to discuss your needs.</p>
                </div>
                <Link to="/appointments" className="aevance-button text-base">
                  Schedule
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other ways + CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-12">
            <h3 className="mb-6 text-2xl font-bold tracking-tight">Follow us</h3>
            <a
              href="https://www.linkedin.com/company/aevance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="font-medium">Aevance on LinkedIn</span>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="aevance-card p-10">
            <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Ready to move your <span className="gradient-text">mission</span> forward?
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Explore where senior expertise can have the most impact for your organisation.
            </p>
            <Link to="/services" className="aevance-button text-base">
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
