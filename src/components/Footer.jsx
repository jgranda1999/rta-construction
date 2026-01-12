import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="full" theme="dark" />
            </div>
            <p className="text-sm sm:text-base text-charcoal-300 mb-4">
              Obra, excavación y transporte en Madrid. Proyectos desde pequeños hasta medianos-grandes. Trato directo, personalizado y accesible para todos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-charcoal-300 hover:text-primary-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/servicios#proyectos" className="text-charcoal-300 hover:text-primary-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-charcoal-300 hover:text-primary-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-charcoal-300 hover:text-primary-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contacto</h4>
            <address className="text-sm sm:text-base text-charcoal-300 not-italic">
              Calle serro del carrasco número 2, 3B<br />
              28031 Madrid, España
            </address>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-charcoal-400">
          <p>&copy; {new Date().getFullYear()} R.T.A Construcción. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

