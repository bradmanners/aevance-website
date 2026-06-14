import { Link } from 'react-router-dom'
import { Mail, MapPin, Linkedin } from 'lucide-react'
import logo from '../assets/Aevance_Logo_Colour_515x512.png'

const Footer = () => {
  return (
    <footer className="border-t border-border text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center space-x-3">
              <img src={logo} alt="Aevance" className="h-8 w-8" />
              <span className="text-xl font-semibold">Aevance</span>
            </div>
            <p className="mb-6 max-w-md text-muted-foreground">
              Professional services and consulting excellence. Interim executive leadership, AI consulting,
              and comprehensive delivery to drive your business forward.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/aevance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Aevance on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Appointments', '/appointments'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-muted-foreground transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@aevance.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Brisbane, QLD</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Aevance Pty Ltd (Est. 2019). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
