import { Link } from 'react-router-dom'
import { ChevronRight, Users, Brain, Briefcase, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import heroImage from '../assets/consulting-meeting.jpg'
import leadershipImage from '../assets/Sydney.png'
import aiImage from '../assets/ai-consulting.webp'
import projectImage from '../assets/Brisbane.png'

const Home = () => {
  const services = [
    {
      icon: Users,
      title: 'Executive Leadership',
      description: 'Interim CEO, CMO, and COO services to guide your organisation through critical transitions.',
      image: leadershipImage,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI implementation and consulting to transform your business operations.',
      image: aiImage,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Operational Excellence',
      description: 'Streamline processes and optimise performance across your entire organisation.',
      image: heroImage,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Briefcase,
      title: 'Project & Program Management',
      description: 'Expert project and program management to ensure successful delivery of complex initiatives.',
      image: projectImage,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center aevance-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            Professional Services
            <br />
            <span className="aevance-text-gradient">
              Reimagined
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert leadership, cutting-edge AI consulting, and world-class services 
            to accelerate your business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="aevance-button text-lg px-8 py-6">
              <Link to="/services">
                Explore Services
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/appointments">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our <span className="aevance-text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your business to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="aevance-card group relative overflow-hidden p-8 hover:aevance-glow"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <Link
                      to="/services"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
                    >
                      Learn more
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            360° <span className="aevance-text-gradient">VALUE</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every day, we deliver change and create value for all our 
            stakeholders.
          </p>
          <Button asChild className="aevance-button text-lg px-8 py-6">
            <Link to="/about">
              See our impact
              <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 aevance-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="aevance-text-gradient">Transform Your Business?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can drive your organisation forward. 
            Schedule a consultation today.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
            <Link to="/contact">
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

