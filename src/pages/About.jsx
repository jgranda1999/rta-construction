import Reveal from '../components/Reveal'
import { openWhatsApp } from '../config/whatsapp'
import aboutImage from '../images/escavator_1.jpeg'
import storyImage from '../images/obra.jpg'

const timeline = [
  {
    year: 'Orígenes',
    text: 'Nacimos en tierras y excavaciones, al servicio de particulares y negocios locales en Madrid.',
  },
  {
    year: '30+ años',
    text: 'Tres décadas ejecutando excavaciones, reformas, transporte y preparación de obra con trato directo.',
  },
  {
    year: 'Hoy',
    text: 'Seguimos centrados en proyectos pequeños y medianos: mismos estándares, comunicación clara y respuesta ágil.',
  },
]

const values = [
  {
    title: 'Seguridad',
    description: 'Cumplimos normativas y trabajamos con equipos adecuados en cada intervención.',
  },
  {
    title: 'Limpieza',
    description: 'Mantenemos el entorno ordenado durante la obra y dejamos el espacio presentable al entregar.',
  },
  {
    title: 'Plazos',
    description: 'Acordamos fechas realistas y comunicamos cualquier cambio con antelación.',
  },
  {
    title: 'Comunicación',
    description: 'Hablarás con nosotros de forma directa, sin rodeos ni intermediarios innecesarios.',
  },
]

export default function About() {
  const handleWhatsAppClick = () => {
    openWhatsApp('Hola, me gustaría conocer más sobre su empresa y servicios.')
  }

  return (
    <div>
      <section className="relative min-h-[52vh] overflow-hidden sm:min-h-[58vh]">
        <img src={aboutImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/55 to-charcoal-900/30" />
        <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl items-end px-4 pb-14 pt-24 sm:min-h-[58vh] sm:px-6 sm:pb-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              Sobre nosotros
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Empresa local de obra en Madrid, con más de 30 años de oficio
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Atendemos viviendas, pequeños negocios y trabajos puntuales con la misma seriedad
              que una obra mayor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Nuestra historia
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              De trabajos de barrio a un servicio estructurado y accesible
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal-600">
              <p>
                Con más de 30 años en el sector, RICHE. T. A. se ha consolidado como una
                empresa de tierras, excavación, obra y transporte enfocada en proyectos pequeños y
                medianos en Madrid.
              </p>
              <p className="font-medium text-charcoal-800">
                Nacimos en tierras y excavaciones; hoy cubrimos la obra de principio a fin.
              </p>
              <p>
                Entendemos que una reforma en casa, una excavación para una piscina o el suministro
                a un local comercial merecen la misma atención que una obra de mayor tamaño.
                Por eso trabajamos con plazos claros, transparencia y comunicación constante.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={storyImage}
                alt="Trabajos de construcción de RICHE. T. A."
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-charcoal-200 bg-charcoal-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Trayectoria
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Una línea continua de trabajo en Madrid</h2>
          </Reveal>
          <ol className="grid gap-8 md:grid-cols-3">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={Math.min(index + 1, 3)}>
                <li className="border-t border-charcoal-300 pt-6">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">
                    {item.year}
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-charcoal-700">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Valores
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Cómo nos comprometemos en cada obra</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={Math.min((index % 2) + 1, 2)}>
                <div className="border-l-2 border-primary-600 pl-5">
                  <h3 className="text-xl font-semibold text-charcoal-900">{value.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-charcoal-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              ¿Quieres conocernos mejor?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Cuéntanos tu proyecto. Estamos para ayudarte, sea del tamaño que sea.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-base font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                Contactar por WhatsApp
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
