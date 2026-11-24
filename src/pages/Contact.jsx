import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import {
  getPhoneDisplay,
  getTelHref,
  getMailtoHref,
  isPhonePlaceholder,
  openWhatsApp,
  EMAIL,
} from '../config/whatsapp'

export default function Contact() {
  const mapAddress = encodeURIComponent(
    'C/ Cerro del Carrasco 2, 3B, 28031 Madrid, España'
  )

  return (
    <div>
      <section className="border-b border-charcoal-200 bg-charcoal-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            align="left"
            eyebrow="Contacto"
            subtitle="Presupuesto sin compromiso. Te respondemos con rapidez — normalmente en menos de 24 horas laborables."
          >
            Hablemos de tu proyecto
          </SectionTitle>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold uppercase tracking-wide text-charcoal-600">
            <span>Respuesta en 24h</span>
            <span>Visita sin compromiso</span>
            <span>Presupuesto claro</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-6">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">Solicita tu presupuesto</h2>
            <p className="mb-8 text-charcoal-600">
              Completa el formulario y te responderemos por email lo antes posible.
            </p>
            <ContactForm />
          </Reveal>

          <div className="space-y-10 lg:col-span-6">
            <Reveal delay={1}>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Oficina</h2>
                <address className="text-lg not-italic leading-relaxed text-charcoal-600">
                  C/ Cerro del Carrasco nº 2, 3B<br />
                  28031 Madrid, España
                </address>
                <div className="mt-6 overflow-hidden border border-charcoal-200">
                  <iframe
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
                    title="Ubicación de RICHE. T. A."
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="border-t border-charcoal-200 pt-8">
                <h2 className="mb-4 text-2xl font-bold">Datos de contacto</h2>
                <dl className="space-y-5 text-charcoal-600">
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-charcoal-900">
                      Teléfono
                    </dt>
                    <dd className="mt-1 text-lg">
                      {isPhonePlaceholder ? (
                        <button
                          type="button"
                          onClick={() =>
                            openWhatsApp('Hola, me gustaría solicitar información.')
                          }
                          className="font-medium text-primary-600 hover:text-primary-700"
                        >
                          Contactar por teléfono / WhatsApp
                        </button>
                      ) : (
                        <a href={getTelHref()} className="hover:text-primary-600">
                          {getPhoneDisplay()}
                        </a>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-charcoal-900">
                      Email
                    </dt>
                    <dd className="mt-1 text-lg">
                      <a
                        href={getMailtoHref()}
                        className="hover:text-primary-600"
                      >
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-charcoal-900">
                      Horario
                    </dt>
                    <dd className="mt-1 text-lg">
                      Lunes a viernes: 8:00 – 18:00<br />
                      Sábados: 9:00 – 14:00
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
