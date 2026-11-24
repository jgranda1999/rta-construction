import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'
import { getTelHref, getPhoneDisplay, getMailtoHref, isPhonePlaceholder, EMAIL } from '../config/whatsapp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/servicios', label: 'Servicios' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/sobre-nosotros', label: 'Sobre nosotros' },
    { path: '/contacto', label: 'Contacto' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="sticky top-0 z-50">
      <div className="border-b border-primary-800 bg-primary-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 text-xs sm:px-6 sm:text-sm lg:px-8">
          <p className="font-medium tracking-wide">
            Lun–Vie 8:00–18:00 · Sáb 9:00–14:00
          </p>
          <div className="flex items-center gap-3">
            {!isPhonePlaceholder && (
              <a
                href={getTelHref()}
                className="hidden items-center gap-1.5 hover:text-primary-100 sm:inline-flex"
              >
                <span>{getPhoneDisplay()}</span>
              </a>
            )}
            <a
              href={getMailtoHref()}
              className="hover:text-primary-100"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      <nav className="border-b border-charcoal-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4 sm:h-28">
            <Link to="/" className="flex min-w-0 flex-col justify-center py-1.5" onClick={() => setIsOpen(false)}>
              <Logo variant="full" theme="light" />
              <span className="mt-0.5 hidden text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-500 sm:block">
                Excavación · Obra · Transporte
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-600'
                      : 'text-charcoal-700 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="ml-3 inline-flex items-center bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Presupuesto
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal-700 hover:text-primary-600 lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-charcoal-100 py-3 lg:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-semibold ${
                    isActive(link.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-charcoal-700 hover:bg-charcoal-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 block bg-primary-600 px-3 py-3 text-center text-base font-semibold text-white"
              >
                Solicitar presupuesto
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
