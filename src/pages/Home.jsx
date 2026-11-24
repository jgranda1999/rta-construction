import { Link } from 'react-router-dom'
import WhatsAppButton from '../components/WhatsAppButton'
import ServiceCard from '../components/ServiceCard'
import ProcessSteps from '../components/ProcessSteps'
import ProjectCard from '../components/ProjectCard'
import ProofBar from '../components/ProofBar'
import Reveal from '../components/Reveal'
import HeroCarousel from '../components/HeroCarousel'
import { openWhatsApp, getTelHref, isPhonePlaceholder } from '../config/whatsapp'
import { projects } from '../data/projects'
import excavatorImage from '../images/etapas-movimiento-tierras-1.png'
import reformaImage from '../images/reformas.jpg'
import suministrosImage from '../images/suministro.jpg'
import desescombrosImage from '../images/desescombros.jpg'
import aboutBandImage from '../images/escavator_2.jpeg'
import carouselExcavacion from '../images/carousel-excavacion.jpg'
import carouselObra from '../images/carousel-obra.jpg'
import carouselTransporte from '../images/carousel-transporte.jpg'
import carouselTrabajos from '../images/carousel-trabajos-generales.jpg'

export default function Home() {
  const proofItems = [
    '30+ años de experiencia',
    'Visita sin compromiso',
    'Presupuesto claro',
    'Madrid y alrededores',
  ]

  const services = [
    {
      title: 'Excavación y movimiento de tierras',
      description: 'Zanjas, cimentaciones, nivelación y preparación de terrenos para obra nueva o reforma.',
      icon: excavatorImage,
      link: '/servicios#excavacion',
    },
    {
      title: 'Construcción y reformas',
      description: 'Reformas de vivienda, locales y obras de pequeña y mediana escala con plazos definidos.',
      icon: reformaImage,
      link: '/servicios#construccion',
    },
    {
      title: 'Transporte de materiales',
      description: 'Suministro y transporte de áridos y materiales coordinado con el ritmo de tu obra.',
      icon: suministrosImage,
      link: '/servicios#transporte',
    },
    {
      title: 'Trabajos generales de obra',
      description: 'Demolición, desescombro, limpieza y preparación para que el proyecto arranque bien.',
      icon: desescombrosImage,
      link: '/servicios#trabajos-generales',
    },
  ]

  const processSteps = [
    {
      title: 'Cuéntanos tu idea',
      description: 'Escríbenos por WhatsApp o llámanos y explícanos qué necesitas.',
    },
    {
      title: 'Visita y valoración',
      description: 'Acudimos sin compromiso para ver el terreno y entender el alcance.',
    },
    {
      title: 'Presupuesto claro',
      description: 'Recibes un presupuesto transparente, con plazos y alcance definidos.',
    },
    {
      title: 'Ejecución y entrega',
      description: 'Trabajamos con orden, comunicación directa y entrega limpia.',
    },
  ]

  const trustPoints = [
    {
      title: 'Trato directo',
      description: 'Hablas con quien ejecuta el trabajo. Sin intermediarios innecesarios.',
    },
    {
      title: 'Plazos realistas',
      description: 'Acordamos fechas claras y te avisamos si algo cambia.',
    },
    {
      title: 'Obra ordenada',
      description: 'Cuidamos el entorno, la limpieza y el respeto al vecindario.',
    },
    {
      title: 'Sin obra demasiado pequeña',
      description: 'Atendemos trabajos puntuales con el mismo rigor que proyectos mayores.',
    },
  ]

  const coverageAreas = [
    'Madrid capital',
    'Alcorcón',
    'Móstoles',
    'Leganés',
    'Getafe',
    'Fuenlabrada',
    'Pozuelo',
    'Majadahonda',
    'Las Rozas',
    'Arganda',
    'Rivas',
    'Alcalá de Henares',
  ]

  const featuredProjects = projects.slice(0, 6)

  // Hero carousel follows H1 order: Excavación, obra y transporte (+ trabajos generales)
  // Dedicated assets — not reused by pillars, about band, or project cards on this page
  const heroSlides = [
    {
      src: carouselExcavacion,
      caption: 'Excavación y movimiento de tierras',
    },
    {
      src: carouselObra,
      caption: 'Obra y construcción',
    },
    {
      src: carouselTransporte,
      caption: 'Transporte y suministros',
    },
    {
      src: carouselTrabajos,
      caption: 'Trabajos generales de obra',
    },
  ]

  const handleQuote = () => {
    openWhatsApp('Hola, me gustaría solicitar un presupuesto para mi proyecto.')
  }

  return (
    <div>
      {/* Hero — full-bleed carousel, title order */}
      <HeroCarousel slides={heroSlides}>
        <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
          RICHE. T. A. · Tierras y Excavaciones
        </p>
        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Excavación, obra y transporte para proyectos pequeños y medianos en Madrid
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Empresa local para viviendas, pequeños negocios y trabajos puntuales.
          Mismos estándares profesionales, presupuesto claro y respuesta rápida por WhatsApp.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton
            variant="primary"
            onClick={handleQuote}
            className="rounded-none px-7 py-3.5 text-base shadow-none"
          >
            Solicitar presupuesto
          </WhatsAppButton>
          {!isPhonePlaceholder ? (
            <a
              href={getTelHref()}
              className="inline-flex items-center justify-center border border-white/70 bg-transparent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Llamar
            </a>
          ) : (
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center border border-white/70 bg-transparent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Llamar / Contactar
            </Link>
          )}
        </div>
      </HeroCarousel>

      <ProofBar items={proofItems} />

      {/* Líneas de negocio */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Líneas de negocio
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Cuatro servicios para llevar tu obra adelante
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Desde la preparación del terreno hasta el suministro de materiales.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={Math.min(index + 1, 4)}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-charcoal-50 py-16 sm:py-20 lg:py-24">
        <ProcessSteps
          steps={processSteps}
          subtitle="Un proceso sencillo, pensado para particulares y pequeños negocios."
        />
      </section>

      {/* Proyectos destacados */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                Proyectos
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">Trabajos recientes</h2>
              <p className="mt-4 text-lg text-charcoal-600">
                Una muestra de excavaciones, reformas, transporte y preparación de obra en Madrid.
              </p>
            </div>
            <Link
              to="/proyectos"
              className="text-sm font-semibold uppercase tracking-wide text-primary-600 hover:text-primary-700"
            >
              Ver todos →
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={Math.min((index % 3) + 1, 3)}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué RTA */}
      <section className="overflow-hidden bg-charcoal-900 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={aboutBandImage}
                alt="Maquinaria de RICHE. T. A. en obra"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">
              Por qué RICHE. T. A.
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Confianza de contratista local, con disciplina de obra profesional
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-300">
              No hacemos megaproyectos. Nos centramos en trabajos que puedes encargar con tranquilidad:
              excavaciones, reformas, transporte y preparación de obra en Madrid.
            </p>
            <ul className="mt-10 space-y-6">
              {trustPoints.map((point) => (
                <li key={point.title} className="border-t border-charcoal-700 pt-6">
                  <h3 className="font-display text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-1 text-charcoal-300">{point.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Cobertura */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl sm:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Cobertura
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Madrid y municipios cercanos</h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Desplazamientos ágiles en la capital y alrededores. Si tu zona no aparece, consúltanos:
              valoramos cada trabajo.
            </p>
          </Reveal>
          <Reveal>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-charcoal-200 pt-8 sm:grid-cols-3 md:grid-cols-4">
              {coverageAreas.map((area) => (
                <li key={area} className="text-base font-medium text-charcoal-700">
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Presupuesto sin compromiso. Cuéntanos qué necesitas y te respondemos con rapidez por WhatsApp.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleQuote}
                className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-base font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                WhatsApp
              </button>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center border border-white px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ir a contacto
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
