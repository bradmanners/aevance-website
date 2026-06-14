import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Brain, Briefcase, Settings, CheckCircle, Star } from 'lucide-react'
import aiImage from '../assets/ai-technology.jpg'

const responsiveImages = {
  leadership: {
    src: '/images/services-leadership-1600.webp',
    srcSet: '/images/services-leadership-960.webp 960w, /images/services-leadership-1600.webp 1600w, /images/services-leadership-2000.webp 2000w',
  },
  program: {
    src: '/images/services-program-1600.webp',
    srcSet: '/images/services-program-960.webp 960w, /images/services-program-1600.webp 1600w, /images/services-program-2000.webp 2000w',
  },
  operations: {
    src: '/images/services-operations-1600.webp',
    srcSet: '/images/services-operations-960.webp 960w, /images/services-operations-1600.webp 1600w, /images/services-operations-2000.webp 2000w',
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
}

const services = [
  {
    id: 'executive-leadership',
    icon: Users,
    title: 'Executive Leadership Services',
    subtitle: 'Interim Executive Services',
    description: 'Strategic leadership during critical transitions, transformations, and growth phases.',
    image: responsiveImages.leadership,
    features: [
      'Interim C-Suite executives with proven track records',
      'Strategic planning and execution leadership',
      'Organisational transformation and change management',
      'Crisis management and turnaround expertise',
      'Board-level reporting and stakeholder management',
      'Succession planning and leadership development',
    ],
    benefits: [
      'Immediate access to senior-level expertise',
      'Objective, external perspective on challenges',
      'Accelerated decision-making and implementation',
      'Cost-effective alternative to permanent hires',
    ],
  },
  {
    id: 'ai-consulting',
    icon: Brain,
    title: 'AI Consulting & Strategy',
    subtitle: 'Artificial Intelligence • Machine Learning • Automation',
    description: 'Transform your business with strategic AI implementation and intelligent automation.',
    image: { src: aiImage },
    features: [
      'AI strategy development and roadmap planning',
      'Machine learning model development and deployment',
      'Process re-engineering, automation and intelligent workflows',
      'Data analytics and predictive modelling',
      'AI ethics and governance frameworks',
      'Training and change management for AI adoption',
    ],
    benefits: [
      'Increased operational efficiency and productivity',
      'Data-driven decision making capabilities',
      'Competitive advantage through innovation',
      'Scalable solutions that grow with your business',
    ],
  },
  {
    id: 'project-management',
    icon: Briefcase,
    title: 'Project & Program Management',
    subtitle: 'Planning • Execution • Delivery',
    description: 'Expert project and program management to ensure successful delivery of complex initiatives.',
    image: responsiveImages.program,
    features: [
      'End-to-end project lifecycle management',
      'Agile and traditional methodology expertise',
      'Portfolio management and prioritisation',
      'Risk assessment and mitigation strategies',
      'Stakeholder communication and reporting',
      'Resource planning and optimisation',
    ],
    benefits: [
      'On-time and on-budget project delivery',
      'Reduced project risks and improved outcomes',
      'Enhanced team productivity and collaboration',
      'Clear visibility and transparent reporting',
    ],
  },
  {
    id: 'operational-excellence',
    icon: Settings,
    title: 'Operational Excellence',
    subtitle: 'Process Optimisation • Performance Management',
    description: 'Streamline operations and optimise performance across your entire organisation.',
    image: responsiveImages.operations,
    features: [
      'Business process analysis and optimisation',
      'Performance management systems',
      'Quality assurance and compliance frameworks',
      'Supply chain and operations consulting',
      'Digital transformation initiatives',
      'Continuous improvement programs',
    ],
    benefits: [
      'Reduced operational costs and waste',
      'Improved quality and customer satisfaction',
      'Enhanced agility and responsiveness',
      'Sustainable competitive advantages',
    ],
  },
]

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Our <span className="gradient-text">services</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Senior, outcome-focused services that accelerate transformation and drive sustainable growth
            across your organisation.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <Link to="/appointments" className="aevance-button text-base">
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl space-y-24 px-6 md:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
              >
                {/* content */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">{service.title}</h2>
                  <p className="mb-4 font-medium text-primary">{service.subtitle}</p>
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key features</h3>
                  <div className="mb-8 grid grid-cols-1 gap-2.5">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Benefits</h3>
                  <div className="mb-8 grid grid-cols-1 gap-2.5">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-violet" />
                        <span className="text-foreground">{b}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="aevance-button text-base">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* image */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={service.image?.src}
                      srcSet={service.image?.srcSet}
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      alt={service.title}
                      className="h-[420px] w-full object-cover lg:h-[520px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to get <span className="gradient-text">started</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Let's discuss how our services can address your specific challenges and drive your business forward.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/appointments" className="aevance-button text-base">
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="rounded-full border border-border px-7 py-3 text-base font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
