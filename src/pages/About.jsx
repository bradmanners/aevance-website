import { CheckCircle, Target, Lightbulb, Shield } from 'lucide-react'
import aboutImage from '../assets/modern-office.jpg'
import teamImage from '../assets/leadership-team.jpg'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Excellence',
      description: 'We deliver precise, results-driven solutions that align with your business objectives and drive measurable outcomes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Embracing cutting-edge technologies and methodologies to keep your organization ahead of the curve.'
    },
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'Building long-term relationships based on transparency, reliability, and unwavering commitment to your success.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Our track record speaks for itself - consistent delivery of exceptional outcomes across diverse industries.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Successful Projects' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
                About <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Aevance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a premier professional services firm dedicated to empowering organizations 
                through strategic leadership, innovative technology solutions, and operational excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded on the principles of integrity, innovation, and impact, Aevance bridges the gap 
                between vision and execution, helping businesses navigate complex challenges and achieve 
                sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <img
                src={aboutImage}
                alt="Modern office workspace"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="font-semibold">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl transform -rotate-3"></div>
              <img
                src={teamImage}
                alt="Leadership team collaboration"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our <span className="font-semibold">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To empower organizations with exceptional leadership, innovative technology solutions, 
                and strategic guidance that drives sustainable growth and competitive advantage.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that every organization has the potential to achieve extraordinary results. 
                Our role is to unlock that potential through expert guidance, proven methodologies, 
                and unwavering commitment to excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Strategic leadership and interim executive services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Cutting-edge AI and technology consulting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Comprehensive development and support services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

