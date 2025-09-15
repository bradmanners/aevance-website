import { CheckCircle, Target, Lightbulb, Shield, Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
import aboutImage from '../assets/Brisbane-1360154521.jpg'
import teamImage from '../assets/Sydney-1074255534.jpg'
import simonImage from '../assets/Simon_wtbg.png'
import bradImage from '../assets/Brad_wtbg.png'

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
      description: 'Embracing cutting-edge technologies and methodologies to keep your organisation ahead of the curve.'
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
    { number: '40+', label: 'Years Experience' }
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
                We are a premier professional services firm dedicated to empowering organisations 
                through strategic leadership, innovative technology solutions, and operational excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded on the principles of integrity, innovation, and impact, Aevance bridges the gap 
                between vision and execution, helping businesses navigate complex challenges and achieve 
                sustainable growth.
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Modern office workspace"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
              <img
                src={teamImage}
                alt="Leadership team collaboration"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our <span className="font-semibold">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To empower organisations with exceptional leadership, innovative technology solutions, 
                and strategic guidance that drives sustainable growth and competitive advantage.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that every organisation has the potential to achieve extraordinary results. 
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

      {/* Our People Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="font-semibold">People</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the leadership team driving innovation and excellence at Aevance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Simon Fennessy Profile */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={simonImage}
                  alt="Simon Fennessy"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Simon Fennessy
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-600 font-medium">Managing Director</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Simon has more than 20 years of experience in strategy, executive leadership, change management, operations, and business improvement. He holds an MBA from IMD in Switzerland, a Bachelor of Economics and Finance from Curtin University, and is a graduate of the Australian Institute of Company Directors.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  His career spans telecommunications, technology-enabled customer process improvements, and infrastructure optimisation. He has held senior roles at Orange, ninemsn, Telstra, InfraCo, Telstra Purple, and Waveconn, delivering operational improvements and customer-focused business solutions.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Simon has expertise in governance, risk management, and government relations, with a focus on using technology to improve customer outcomes and business performance.
                </p>

                <a
                  href="https://www.linkedin.com/in/simon-fennessy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Brad Mancini Profile */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={bradImage}
                  alt="Brad Mancini"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Brad Mancini
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-600 font-medium">CTO</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Brad has 25 years of international experience across IT, telecommunications, public health, mining, construction, and government.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  He has led transformation programs valued at more than $1.5 billion, delivering improved services for millions of customers.
Brad has worked with CEOs, enterprise clients, unions, government regulators, and suppliers to manage stakeholders and achieve outcomes.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  He holds tertiary qualifications in Engineering, Finance, Business Administration, Strategic Procurement, Leadership, and Program Management.
Brad has received CEO and COO awards for excellence and contribution.
                </p>

                <a
                  href="https://www.linkedin.com/in/bradmancini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

