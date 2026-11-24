import { Link } from 'react-router-dom'
import Logo from './Logo'
import {
  getPhoneDisplay,
  getTelHref,
  getMailtoHref,
  isPhonePlaceholder,
  openWhatsApp,
  EMAIL,
} from '../config/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="mb-5">
              <Logo variant="full" theme="dark" />
            </div>
            <p className="max-w-md text-base leading-relaxed text-charcoal-300">
              Tierras y excavaciones, obra y transporte para proyectos pequeños y medianos en Madrid.
              Mismos estándares profesionales, trato directo y presupuesto claro.
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp('Hola, me gustaría solicitar un presupuesto.')}
              className="mt-6 inline-flex items-center text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Escribir por WhatsApp →
            </button>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-charcoal-400">
              Enlaces
            </h4>
            <ul className="space-y-2.5 text-base text-charcoal-300">
              <li><Link to="/servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-white">Proyectos</Link></li>
              <li><Link to="/sobre-nosotros" className="hover:text-white">Sobre nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-charcoal-400">
              Contacto
            </h4>
            <address className="space-y-2 text-base not-italic text-charcoal-300">
              <p>
                C/ Cerro del Carrasco nº 2, 3B<br />
                28031 Madrid, España
              </p>
              {isPhonePlaceholder ? (
                <p>WhatsApp disponible</p>
              ) : (
                <p>
                  <a href={getTelHref()} className="hover:text-white">{getPhoneDisplay()}</a>
                </p>
              )}
              <p>
                <a href={getMailtoHref()} className="hover:text-white">
                  {EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-800 pt-6 text-sm text-charcoal-500">
          <p>&copy; {new Date().getFullYear()} RICHE. T. A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
