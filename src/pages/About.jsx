import SectionTitle from '../components/SectionTitle'
import WhatsAppButton from '../components/WhatsAppButton'
import { openWhatsApp } from '../config/whatsapp'

export default function About() {
  const values = [
    {
      title: 'Seguridad',
      description: 'Cumplimos con todas las normativas de seguridad y trabajamos con equipos de protección adecuados.'
    },
    {
      title: 'Limpieza',
      description: 'Mantenemos el lugar de trabajo limpio y ordenado durante y después de la ejecución.'
    },
    {
      title: 'Plazos',
      description: 'Respetamos los plazos acordados y comunicamos cualquier cambio con antelación.'
    },
    {
      title: 'Comunicación',
      description: 'Mantenemos una comunicación clara y directa durante todo el proyecto.'
    }
  ]

  const handleWhatsAppClick = () => {
    openWhatsApp('Hola, me gustaría conocer más sobre su empresa y servicios.')
  }

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Una empresa accesible que trabaja con proyectos desde pequeños hasta medianos-grandes en Madrid">
          Sobre Nosotros
        </SectionTitle>

        {/* Experience Highlight */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-primary-600 rounded-lg shadow-lg p-6 sm:p-8 md:p-12 text-white text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">30+</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Años de Experiencia
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-2xl mx-auto px-4">
              Más de tres décadas sirviendo a Madrid con profesionalidad, calidad y compromiso en cada proyecto.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Nuestra Historia
            </h2>
            <div className="prose prose-sm sm:prose-base md:prose-lg text-charcoal-600 space-y-3 sm:space-y-4">
              <p>
                Con más de <strong className="text-primary-600">30 años de experiencia</strong> en el sector, 
                somos una empresa estructurada y accesible, especializada en obra, excavación y transporte en Madrid. 
                Trabajamos con proyectos desde pequeños hasta medianos-grandes, ofreciendo un trato directo y 
                personalizado a cada cliente. No importa el tamaño de tu proyecto, todos merecen la misma atención y dedicación.
              </p>
              <p>
                Nuestra trayectoria de más de tres décadas nos ha permitido entender que cada proyecto tiene sus propias necesidades, 
                ya sea una pequeña reforma en casa o una obra más grande. Trabajamos con plazos claros, transparencia 
                y comunicación constante. Nuestro compromiso es ofrecer soluciones completas desde la excavación 
                hasta la entrega final, sin importar la escala del trabajo.
              </p>
              <p>
                Trabajamos principalmente en Madrid y alrededores, ofreciendo servicios de excavación y 
                movimiento de tierras, construcción y reformas, transporte de materiales y trabajos 
                generales de obra. Cada proyecto es único y lo tratamos con el cuidado y profesionalidad que merece, 
                respaldados por nuestra amplia experiencia de más de 30 años en el sector.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 text-center mb-8 sm:mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary-600 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-primary-600 rounded-lg shadow-lg p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-base sm:text-lg text-primary-100 mb-5 sm:mb-6 px-4">
              Ya sea pequeño o grande, estamos aquí para ayudarte. Contacta con nosotros y descubre cómo podemos hacer realidad tu proyecto
            </p>
            <WhatsAppButton
              variant="outline"
              onClick={handleWhatsAppClick}
              className="bg-white text-whatsapp-600 border-white hover:bg-whatsapp-50"
            >
              Contactar por WhatsApp
            </WhatsAppButton>
          </div>
        </section>
      </div>
    </div>
  )
}

