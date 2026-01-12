import SectionTitle from '../components/SectionTitle'
import ContactWhatsAppForm from '../components/ContactWhatsAppForm'

export default function Contact() {
  // Google Maps embed URL for the address (no API key needed for basic embed)
  const mapAddress = encodeURIComponent('Calle serro del carrasco número 2, 3B, 28031 Madrid, España')

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Estamos aquí para ayudarte con tu proyecto">
          Contacto
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Side: Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-4 sm:mb-6">
                Solicita tu Presupuesto
              </h2>
              <ContactWhatsAppForm />
            </div>
          </div>

          {/* Right Side: Address, Map & Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Address Block */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-4 sm:mb-6">
                Nuestra Oficina
              </h2>
              <address className="text-charcoal-600 not-italic mb-6">
                <p className="mb-2">
                  <strong className="text-charcoal-900">Dirección:</strong>
                </p>
                <p className="mb-4">
                  Calle serro del carrasco número 2, 3B<br />
                  28031 Madrid, España
                </p>
              </address>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden h-48 sm:h-64 shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
                  title="Ubicación de R.T.A Construcción"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-4 sm:mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-charcoal-600">
                <div>
                  <strong className="text-charcoal-900">Teléfono:</strong>
                  <p className="mt-1">+34 XXX XXX XXX</p>
                </div>
                <div>
                  <strong className="text-charcoal-900">Email:</strong>
                  <p className="mt-1">info@rtaconstruccion.com</p>
                </div>
                <div>
                  <strong className="text-charcoal-900">Horario:</strong>
                  <p className="mt-1">
                    Lunes a Viernes: 8:00 - 18:00<br />
                    Sábados: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

