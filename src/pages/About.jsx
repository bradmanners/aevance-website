import { motion } from 'framer-motion'
import { CheckCircle, Target, Lightbulb, Shield, Briefcase, ExternalLink } from 'lucide-react'

const responsiveImages = {
  hero: {
    src: '/images/about-hero-1600.webp',
    srcSet: '/images/about-hero-960.webp 960w, /images/about-hero-1600.webp 1600w, /images/about-hero-2000.webp 2000w',
  },
  mission: {
    src: '/images/about-mission-1600.webp',
    srcSet: '/images/about-mission-960.webp 960w, /images/about-mission-1600.webp 1600w, /images/about-mission-2000.webp 2000w',
  },
  simon: {
    src: '/images/team-simon-960.webp',
    srcSet: '/images/team-simon-480.webp 480w, /images/team-simon-960.webp 960w',
  },
  brad: {
    src: '/images/team-brad-960.webp',
    srcSet: '/images/team-brad-480.webp 480w, /images/team-brad-960.webp 960w',
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
}

const values = [
  { icon: Target, title: 'Strategic Excellence', description: 'Precise, results-driven solutions that align with your objectives and drive measurable outcomes.' },
  { icon: Lightbulb, title: 'Innovation First', description: 'Embracing modern technologies and methodologies to keep your organisation ahead of the curve.' },
  { icon: Shield, title: 'Trusted Partnership', description: 'Long-term relationships built on transparency, reliability, and commitment to your success.' },
  { icon: CheckCircle, title: 'Proven Results', description: 'A track record of consistent, exceptional outcomes across diverse industries.' },
]

const stats = [
  { number: '50+', label: 'Successful Projects' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '40+', label: 'Years Combined Experience' },
]

const people = [
  {
    name: 'Simon Fennessy',
    role: 'Managing Director',
    image: responsiveImages.simon,
    href: 'https://www.linkedin.com/in/simon-fennessy/',
    bio: [
      'Simon has more than 20 years of experience in strategy, executive leadership, change management, operations, and business improvement. He holds an MBA from IMD in Switzerland, a Bachelor of Economics and Finance from Curtin University, and is a graduate of the Australian Institute of Company Directors.',
      'His career spans telecommunications, technology-enabled customer process improvements, and infrastructure optimisation. He has held senior roles at Orange, ninemsn, Telstra, InfraCo, Telstra Purple, and Waveconn, delivering operational improvements and customer-focused business solutions.',
      'Simon has expertise in governance, risk management, and government relations, with a focus on using technology to improve customer outcomes and business performance.',
    ],
  },
  {
    name: 'Brad Mancini',
    role: 'Director and CTO',
    image: responsiveImages.brad,
    href: 'https://www.linkedin.com/in/bradmancini/',
    bio: [
      'Brad has 25 years of international experience across IT, telecommunications, public health, mining, construction, and government.',
      'He has led transformation programs valued at more than $1.5 billion, delivering improved services for millions of customers, working with CEOs, enterprise clients, unions, government regulators, and suppliers to manage stakeholders and achieve outcomes.',
      'He holds tertiary qualifications in Engineering, Finance, Business Administration, Strategic Procurement, Leadership, and Program Management, and has received CEO and COO awards for excellence and contribution.',
    ],
  },
]

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              About <span className="gradient-text">Aevance</span>
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
              A professional services firm providing strategic leadership, AI and technology solutions, and
              operational excellence.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded on integrity, innovation, and impact, Aevance bridges the gap between vision and
              execution — helping businesses navigate complex challenges and achieve sustainable growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={responsiveImages.hero.src}
              srcSet={responsiveImages.hero.srcSet}
              sizes="(min-width: 1024px) 45vw, 90vw"
              alt="Aevance workspace"
              className="h-96 w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold gradient-text">{stat.number}</div>
              <div className="font-medium text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our <span className="gradient-text">values</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">The principles that guide every decision we make.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div key={value.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08 }}>
                  <div className="aevance-card card-glow flex h-full items-start gap-4 p-8">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="order-2 overflow-hidden rounded-2xl border border-border lg:order-1">
            <img
              src={responsiveImages.mission.src}
              srcSet={responsiveImages.mission.srcSet}
              sizes="(min-width: 1024px) 45vw, 90vw"
              alt="Leadership collaboration"
              className="h-96 w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="order-1 lg:order-2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Our <span className="gradient-text">mission</span>
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
              To empower organisations with exceptional leadership, AI and technology solutions, and strategic
              guidance that drives sustainable growth and competitive advantage.
            </p>
            <div className="space-y-4">
              {[
                'Strategic leadership and interim executive services',
                'AI and technology consulting',
                'Comprehensive delivery and program management',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* People */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our <span className="gradient-text">people</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">The leadership team driving excellence at Aevance.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {people.map((p, i) => (
              <motion.div key={p.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.1 }}>
                <div className="aevance-card h-full overflow-hidden">
                  <div className="aspect-[16/9] border-b border-border bg-card">
                    <img
                      src={p.image.src}
                      srcSet={p.image.srcSet}
                      sizes="(min-width: 1024px) 560px, 90vw"
                      alt={p.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="mb-2 text-2xl font-semibold text-foreground">{p.name}</h3>
                    <div className="mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className="font-medium text-primary">{p.role}</span>
                    </div>
                    {p.bio.map((para, idx) => (
                      <p key={idx} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
                    ))}
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
