import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock, Calendar, ChevronRight, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@aevance.com',
      description: 'Send us an email anytime',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'mailto:hello@aevance.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Brisbane, QLD',
      description: 'Available for in-person meetings',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'We respond to all inquiries quickly',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 aevance-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="aevance-text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your business? We'd love to hear from you. 
            Reach out to discuss your challenges and explore how we can help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              const CardContent = (
                <div className="aevance-card text-center p-8 hover:aevance-glow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-2">
                    {info.details}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {info.description}
                  </p>
                </div>
              )

              return info.href ? (
                <a key={index} href={info.href} className="block transition-transform hover:scale-105">
                  {CardContent}
                </a>
              ) : (
                <div key={index}>
                  {CardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to <span className="aevance-text-gradient">Connect</span>?
              </h2>
              <p className="text-muted-foreground">
                Contact us directly using the information below or schedule a consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground">Email Us</h4>
                  <a 
                    href="mailto:hello@aevance.com" 
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                  >
                    hello@aevance.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground">Book a Consultation</h4>
                  <p className="text-muted-foreground mb-3">
                    Schedule a free discovery call to discuss your needs
                  </p>
                  <Button asChild className="aevance-button">
                    <Link to="/appointments">
                      Schedule Now
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Other Ways to Connect
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="aevance-card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Schedule a Meeting</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Book a consultation to discuss your specific needs
              </p>
              <Button asChild className="aevance-button">
                <Link to="/appointments">
                  Book Consultation
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="aevance-card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Follow Us</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Stay updated with our latest insights and news
              </p>
              <div className="flex justify-center space-x-3">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="aevance-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-white/90 mb-6">
              Join hundreds of organizations that have already transformed their operations with Aevance.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/services">
                Explore Our Services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

