import { Link } from 'react-router-dom'
import { ArrowRight, Users, Brain, Briefcase, Settings, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import leadershipImage from '../assets/leadership-team.jpg'
import aiImage from '../assets/ai-technology.jpg'
import projectImage from '../assets/modern-office.jpg'
import consultingImage from '../assets/business-presentation.jpeg'

const Services = () => {
  const services = [
    {
      id: 'executive-leadership',
      icon: Users,
      title: 'Executive Leadership Services',
      subtitle: 'Interim CEO • CMO • COO',
      description: 'Strategic leadership during critical transitions, transformations, and growth phases.',
      image: leadershipImage,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Interim C-Suite executives with proven track records',
        'Strategic planning and execution leadership',
        'Organizational transformation and change management',
        'Crisis management and turnaround expertise',
        'Board-level reporting and stakeholder management',
        'Succession planning and leadership development'
      ],
      benefits: [
        'Immediate access to senior-level expertise',
        'Objective, external perspective on challenges',
        'Accelerated decision-making and implementation',
        'Cost-effective alternative to permanent hires'
      ]
    },
    {
      id: 'ai-consulting',
      icon: Brain,
      title: 'AI Consulting & Strategy',
      subtitle: 'Artificial Intelligence • Machine Learning • Automation',
      description: 'Transform your business with strategic AI implementation and intelligent automation.',
      image: aiImage,
      color: 'from-purple-500 to-purple-600',
      features: [
        'AI strategy development and roadmap planning',
        'Machine learning model development and deployment',
        'Process automation and intelligent workflows',
        'Data analytics and predictive modeling',
        'AI ethics and governance frameworks',
        'Training and change management for AI adoption'
      ],
      benefits: [
        'Increased operational efficiency and productivity',
        'Data-driven decision making capabilities',
        'Competitive advantage through innovation',
        'Scalable solutions that grow with your business'
      ]
    },
    {
      id: 'project-management',
      icon: Briefcase,
      title: 'Project & Program Management',
      subtitle: 'Planning • Execution • Delivery',
      description: 'Expert project and program management to ensure successful delivery of complex initiatives.',
      image: projectImage,
      color: 'from-green-500 to-green-600',
      features: [
        'End-to-end project lifecycle management',
        'Agile and traditional methodology expertise',
        'Portfolio management and prioritization',
        'Risk assessment and mitigation strategies',
        'Stakeholder communication and reporting',
        'Resource planning and optimization'
      ],
      benefits: [
        'On-time and on-budget project delivery',
        'Reduced project risks and improved outcomes',
        'Enhanced team productivity and collaboration',
        'Clear visibility and transparent reporting'
      ]
    },
    {
      id: 'operational-excellence',
      icon: Settings,
      title: 'Operational Excellence',
      subtitle: 'Process Optimization • Performance Management',
      description: 'Streamline operations and optimize performance across your entire organization.',
      image: consultingImage,
      color: 'from-orange-500 to-orange-600',
      features: [
        'Business process analysis and optimization',
        'Performance management systems',
        'Quality assurance and compliance frameworks',
        'Supply chain and operations consulting',
        'Digital transformation initiatives',
        'Continuous improvement programs'
      ],
      benefits: [
        'Reduced operational costs and waste',
        'Improved quality and customer satisfaction',
        'Enhanced agility and responsiveness',
        'Sustainable competitive advantages'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Our <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive professional services designed to accelerate your business transformation 
            and drive sustainable growth across all areas of your organization.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/appointments">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-light text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-blue-600 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits:</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className={`bg-gradient-to-r ${service.color} hover:opacity-90`}>
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl transform ${isEven ? 'rotate-3' : '-rotate-3'} opacity-20`}></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Get <span className="font-semibold">Started</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can address your specific challenges and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/appointments">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

