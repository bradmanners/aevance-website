import { Link } from 'react-router-dom'
import { Calendar, Clock, Users, Video, Phone, MapPin, CheckCircle, Mail, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Appointments = () => {
  const consultationTypes = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your needs and challenges',
      icon: Phone,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'strategy',
      title: 'Strategy Session',
      duration: '60 minutes',
      price: '$299',
      description: 'Deep-dive strategic planning session with actionable recommendations',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'workshop',
      title: 'Executive Workshop',
      duration: '2-4 hours',
      price: '$999',
      description: 'Comprehensive workshop with your leadership team',
      icon: Video,
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Quick Response',
      description: 'We\'ll contact you within 24 hours to schedule your consultation'
    },
    {
      icon: Video,
      title: 'Flexible Format',
      description: 'Choose between video call, phone, or in-person meetings'
    },
    {
      icon: Clock,
      title: 'Actionable Insights',
      description: 'Walk away with clear next steps and recommendations'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 aevance-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Schedule Your <span className="aevance-text-gradient">Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Aevance can help transform your business. 
            Choose the consultation format that works best for you.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your <span className="aevance-text-gradient">Consultation Type</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((type) => {
              const IconComponent = type.icon
              return (
                <div
                  key={type.id}
                  className="aevance-card p-8 text-center hover:aevance-glow"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {type.title}
                  </h3>
                  
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <span className="text-muted-foreground">{type.duration}</span>
                    <span className="text-2xl font-bold text-primary">{type.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact to Book */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-8 md:p-12 border border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to <span className="aevance-text-gradient">Get Started</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us directly to schedule your consultation. We'll work with you to find the perfect time and format.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-4 p-6 bg-card rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-foreground">Email Us</h4>
                  <a 
                    href="mailto:hello@aevance.com?subject=Consultation Booking Request" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    hello@aevance.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Include your preferred consultation type
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-card rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-foreground">Call Us</h4>
                  <a 
                    href="tel:+15551234567" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mon-Fri, 9am-6pm EST
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="aevance-button">
                <a href="mailto:hello@aevance.com?subject=Consultation Booking Request&body=Hi, I'd like to schedule a consultation. Please let me know your availability.">
                  Email to Book
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="tel:+15551234567">
                  Call to Book
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-12">
            What to <span className="aevance-text-gradient">Expect</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="aevance-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 aevance-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait - reach out today and let's start planning your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                View All Contact Options
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">
                Learn About Our Services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointments

