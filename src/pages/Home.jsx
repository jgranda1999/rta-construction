import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WhatsAppButton from '../components/WhatsAppButton'
import ServiceCard from '../components/ServiceCard'
import ProcessSteps from '../components/ProcessSteps'
import { openWhatsApp, PHONE_NUMBER } from '../config/whatsapp'
import excavatorImage from '../images/etapas-movimiento-tierras-1.png'
import trabajosGeneralesImage from '../images/trabajo.jpg'
import excavatorDumpTruckImage from '../images/excavator-heavy-dump-truck-14328842.jpeg'
import transporteImage from '../images/transporte.jpeg'
import obraImage from '../images/obra.jpg'
import reformaImage from '../images/reformas.jpg'
import desescombrosImage from '../images/desescombros.jpg'
import suministrosImage from '../images/suministro.jpg'

export default function Home() {
  // Slideshow with images and titles - using Unsplash images
  const slides = [
    {
      // Residential construction site background
      image: obraImage,
      title: 'Obra Domiciliaria y Empresarial'
    },
    {
      // Excavator and dump truck at digging site
      image: excavatorDumpTruckImage,
      title: 'Excavación y Movimiento de Tierras'
    },
    {
      // Truck transporting materials on highway
      image: transporteImage,
      title: 'Transporte de Materiales y Suministros'
    },
    {
      // General construction work - construction planning
      image: trabajosGeneralesImage,
      title: 'Trabajos Generales'
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])
  const proofItems = [
    'Proyectos de todos los tamaños',
    'Visita sin compromiso',
    'Trato directo y personalizado',
    'Presupuestos claros'
  ]

  const services = [ 
    {
      title: 'Excavación y movimiento de tierras',
      description: 'Movimiento de tierras, zanjas, cimentaciones y preparación de terrenos.',
      icon: excavatorImage,
      link: '/servicios#excavacion'
    },
    {
      title: 'Construcción y reformas',
      description: 'Construcción y reformas para viviendas e instalaciones industriales.',
      icon: reformaImage,
      link: '/servicios#construccion'
    },
    {
      title: 'Transporte de materiales',
      description: 'Suministro y transporte de materiales para obra.',
      icon: suministrosImage,
      link: '/servicios#transporte'
    },
    {
      title: 'Trabajos generales de obra',
      description: 'Demoliciones, desescombros y preparación de obra.',
      icon: desescombrosImage,
      link: '/servicios#trabajos-generales'
    }
  ]

  const processSteps = [
    {
      title: 'Cuéntanos tu idea',
      description: 'Contacta con nosotros por WhatsApp y explícanos tu proyecto.'
    },
    {
      title: 'Visita y valoración',
      description: 'Realizamos una visita sin compromiso para evaluar el trabajo.'
    },
    {
      title: 'Presupuesto claro',
      description: 'Recibe un presupuesto detallado y transparente.'
    },
    {
      title: 'Ejecución y entrega',
      description: 'Ejecutamos el trabajo con plazos claros y entrega a tiempo.'
    }
  ]

  const handlePrimaryCTA = () => {
    openWhatsApp('Hola, me gustaría solicitar un presupuesto para mi proyecto.')
  }

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Slideshow Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/75 via-charcoal-800/70 to-charcoal-900/75"></div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg transition-opacity duration-1000 ease-in-out px-2">
              {slides[currentSlide].title} en Madrid
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 drop-shadow-md px-2">
              Trato directo y personalizado. Cada proyecto importa, sin importar su tamaño. Visita sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-xl text-base sm:text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 011.553.894l1.903 3.857a1 1 0 01-.502 1.393l-1.257.5a11.5 11.5 0 005.5 5.5l.5-1.257a1 1 0 011.393-.502l3.857 1.903a1 1 0 01.894 1.553H19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                LLAMAMOS
              </a>
              <WhatsAppButton
                variant="primary"
                onClick={handlePrimaryCTA}
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl"
              >
                Solicitar presupuesto por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Slideshow Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 sm:mb-6">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal-600 max-w-3xl mx-auto mb-8 sm:mb-12">
              En R.T.A Construcción nos comprometemos a ofrecer un servicio de calidad, 
              trato directo y profesionalidad en cada proyecto, sin importar su tamaño.
            </p>
          </div>
          {/* Proof Points */}
          <div className="bg-charcoal-50 rounded-lg py-8 sm:py-10 px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {proofItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary-600 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">✓</div>
                  <p className="text-charcoal-700 font-medium text-sm sm:text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 text-center mb-8 sm:mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Approachability Section */}
      <section className="pt-12 sm:pt-16 pb-6 sm:pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 sm:mb-6">
            Cada proyecto importa, sin importar su tamaño
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Trabajamos con proyectos desde pequeños hasta medianos-grandes. Ya sea una pequeña reforma en casa, 
            una excavación para una piscina, o una obra más grande, te ofrecemos el mismo trato directo, 
            atención personalizada y profesionalidad. No hay proyecto demasiado pequeño para nosotros.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-charcoal-50 rounded-lg p-6">
              <div className="text-4xl md:text-5xl mb-4">🏠</div>
              <h3 className="font-bold text-charcoal-900 mb-3 text-lg md:text-xl">Proyectos Residenciales</h3>
              <p className="text-charcoal-600 text-base md:text-lg">Reformas, ampliaciones y mejoras en viviendas</p>
            </div>
            <div className="bg-charcoal-50 rounded-lg p-6">
              <div className="text-4xl md:text-5xl mb-4">🏭</div>
              <h3 className="font-bold text-charcoal-900 mb-3 text-lg md:text-xl">Proyectos Industriales</h3>
              <p className="text-charcoal-600 text-base md:text-lg">Naves, instalaciones y obras comerciales</p>
            </div>
            <div className="bg-charcoal-50 rounded-lg p-6">
              <div className="text-4xl md:text-5xl mb-4">🔧</div>
              <h3 className="font-bold text-charcoal-900 mb-3 text-lg md:text-xl">Trabajos Específicos</h3>
              <p className="text-charcoal-600 text-base md:text-lg">Excavaciones, transporte y trabajos puntuales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-charcoal-50">
        <ProcessSteps steps={processSteps} />
      </section>

      {/* Final CTA Band */}
      <section className="py-12 sm:py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8">
            Contacta con nosotros y recibe un presupuesto sin compromiso queremos ayudarte a hacer realidad tu proyecto.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-primary-600 border-2 border-white hover:bg-primary-50 focus:ring-primary-500 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </section>
    </div>
  )
}

