import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import excavatorImage from '../images/service-excavacion.jpg'
import reformaImage from '../images/service-construccion.jpg'
import transporteImage from '../images/transporte.jpeg'
import desescombrosImage from '../images/service-trabajos-generales.jpg'

const services = [
  {
    id: 'excavacion',
    title: 'Excavación y movimiento de tierras',
    lead: 'Preparación de terrenos, zanjas y cimentaciones para que la obra arranque con base sólida.',
    image: excavatorImage,
    includes: [
      'Movimiento de tierras',
      'Excavación de zanjas',
      'Nivelación y compactación',
      'Preparación de cimentaciones',
      'Retirada de escombros',
    ],
    ideal: [
      'Obra nueva residencial o local',
      'Reformas que requieren excavación',
      'Instalación de servicios',
      'Acondicionamiento de solares',
    ],
  },
  {
    id: 'construccion',
    title: 'Construcción y reformas',
    lead: 'Reformas de vivienda, locales y obras de pequeña–mediana escala con plazos y alcance claros.',
    image: reformaImage,
    includes: [
      'Reformas integrales y parciales',
      'Ampliaciones y acondicionamiento',
      'Obra nueva de escala media',
      'Acabados y entrega limpia',
      'Coordinación de oficios básicos',
    ],
    ideal: [
      'Viviendas y comunidades',
      'Locales comerciales',
      'Pequeñas naves e instalaciones',
      'Mejoras y rehabilitaciones',
    ],
  },
  {
    id: 'transporte',
    title: 'Transporte de materiales y suministros',
    lead: 'Suministro y transporte de áridos y materiales alineado con el ritmo de tu obra.',
    image: transporteImage,
    includes: [
      'Transporte de materiales',
      'Suministro de áridos',
      'Entrega en obra',
      'Coordinación logística',
      'Apoyo a obras en curso',
    ],
    ideal: [
      'Obras con necesidad de suministro frecuente',
      'Entregas urgentes o programadas',
      'Proyectos que requieren coordinación de cargas',
    ],
  },
  {
    id: 'trabajos-generales',
    title: 'Trabajos generales de obra',
    lead: 'Demolición, desescombro y preparación para dejar el espacio listo antes de construir.',
    image: desescombrosImage,
    includes: [
      'Demoliciones controladas',
      'Desescombro y retirada',
      'Preparación de obra',
      'Limpieza de terrenos',
      'Trabajos auxiliares',
    ],
    ideal: [
      'Antes de iniciar una reforma',
      'Vaciado de espacios',
      'Limpieza y puesta a punto del solar',
    ],
  },
]

export default function Services() {
  return (
    <div>
      <section className="border-b border-charcoal-200 bg-charcoal-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            align="left"
            eyebrow="Servicios"
            subtitle="Excavación y movimiento de tierras primero; también construcción, transporte y trabajos generales para proyectos pequeños y medianos en Madrid."
          >
            Qué hacemos
          </SectionTitle>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 border-t border-charcoal-200 pt-6 text-sm font-semibold uppercase tracking-wide text-charcoal-600">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="hover:text-primary-600"
              >
                {service.title.split(' ')[0]}
              </a>
            ))}
            <a href="#presupuesto" className="text-primary-600 hover:text-primary-700">
              Presupuesto
            </a>
          </nav>
        </div>
      </section>

      {services.map((service, index) => {
        const imageLeft = index % 2 === 0
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 border-b border-charcoal-200 ${
              index % 2 === 0 ? 'bg-white' : 'bg-charcoal-50'
            }`}
          >
            <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
              <Reveal
                className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="aspect-[16/11] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal
                delay={1}
                className={`flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-12 ${
                  imageLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="text-2xl font-bold sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-charcoal-600">{service.lead}</p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal-900">
                      Qué incluye
                    </h3>
                    <ul className="space-y-2 text-charcoal-600">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal-900">
                      Cuándo encaja
                    </h3>
                    <ul className="space-y-2 text-charcoal-600">
                      {service.ideal.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#presupuesto"
                    className="inline-flex border border-primary-600 bg-primary-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-700 hover:border-primary-700"
                  >
                    Solicitar presupuesto
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      <section
        id="presupuesto"
        className="scroll-mt-28 border-b border-charcoal-200 bg-white py-14 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Presupuesto
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">Solicitar presupuesto</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-600">
              Indica el tipo de servicio que te interesa y te preparamos un presupuesto sin
              compromiso. Un solo formulario para excavación, construcción, transporte o
              trabajos generales.
            </p>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <div className="border border-charcoal-200 bg-charcoal-50 p-6 sm:p-8">
              <ContactForm
                submitLabel="Solicitar presupuesto"
                buttonClassName="w-full bg-primary-600 px-6 py-3.5 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-900 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ver trabajos realizados</h2>
            <p className="mt-2 max-w-xl text-charcoal-300">
              Explora una selección de excavaciones, reformas y obras en Madrid.
            </p>
          </div>
          <Link
            to="/proyectos"
            className="inline-flex border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-charcoal-900"
          >
            Ir a proyectos
          </Link>
        </div>
      </section>
    </div>
  )
}
