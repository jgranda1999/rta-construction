import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import WhatsAppButton from '../components/WhatsAppButton'
import ProjectCard from '../components/ProjectCard'
import { openWhatsApp } from '../config/whatsapp'
import { projects, categories } from '../data/projects'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleServiceWhatsApp = (serviceName) => {
    openWhatsApp(`Hola, me interesa el servicio de ${serviceName}. Me gustaría solicitar más información y un presupuesto.`)
  }

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Servicios para proyectos de todos los tamaños en Madrid — desde pequeños hasta medianos-grandes">
          Nuestros Servicios
        </SectionTitle>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">

        {/* Excavación */}
        <section id="excavacion" className="mb-12 sm:mb-16 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Excavación y Movimiento de Tierras
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mb-4 sm:mb-6">
              Servicios completos de excavación y movimiento de tierras para preparar terrenos y ejecutar cimentaciones.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Qué incluye:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Movimiento de tierras</li>
                  <li>• Excavación de zanjas</li>
                  <li>• Preparación de terrenos</li>
                  <li>• Nivelación y compactación</li>
                  <li>• Retirada de escombros</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Cuándo es ideal:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Preparación para construcción</li>
                  <li>• Reformas que requieren excavación</li>
                  <li>• Instalación de servicios</li>
                  <li>• Acondicionamiento de terrenos</li>
                </ul>
              </div>
            </div>
            
            <WhatsAppButton
              variant="primary"
              onClick={() => handleServiceWhatsApp('Excavación y Movimiento de Tierras')}
            >
              Solicitar presupuesto
            </WhatsAppButton>
          </div>
        </section>

        {/* Construcción */}
        <section id="construccion" className="mb-12 sm:mb-16 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Construcción y Reformas
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mb-4 sm:mb-6">
              Construcción y reformas para viviendas e instalaciones industriales. Trabajos desde cero o mejoras de espacios existentes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Qué incluye:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Construcción de viviendas</li>
                  <li>• Reformas integrales</li>
                  <li>• Construcción industrial</li>
                  <li>• Acondicionamiento de espacios</li>
                  <li>• Obra nueva y rehabilitación</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Cuándo es ideal:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Proyectos residenciales</li>
                  <li>• Reformas de viviendas</li>
                  <li>• Construcción de naves industriales</li>
                  <li>• Mejoras y ampliaciones</li>
                </ul>
              </div>
            </div>
            
            <WhatsAppButton
              variant="primary"
              onClick={() => handleServiceWhatsApp('Construcción y Reformas')}
            >
              Solicitar presupuesto
            </WhatsAppButton>
          </div>
        </section>

        {/* Transporte */}
        <section id="transporte" className="mb-12 sm:mb-16 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Transporte de Materiales
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mb-4 sm:mb-6">
              Suministro y transporte de materiales para obra. Garantizamos la entrega en tiempo y forma.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Qué incluye:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Transporte de materiales</li>
                  <li>• Suministro de áridos</li>
                  <li>• Entrega en obra</li>
                  <li>• Coordinación logística</li>
                  <li>• Materiales de construcción</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Cuándo es ideal:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Obras en curso</li>
                  <li>• Necesidad de suministro rápido</li>
                  <li>• Proyectos que requieren materiales</li>
                  <li>• Coordinación de entregas</li>
                </ul>
              </div>
            </div>
            
            <WhatsAppButton
              variant="primary"
              onClick={() => handleServiceWhatsApp('Transporte de Materiales')}
            >
              Solicitar presupuesto
            </WhatsAppButton>
          </div>
        </section>

        {/* Trabajos Generales */}
        <section id="trabajos-generales" className="mb-12 sm:mb-16 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Trabajos Generales de Obra
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mb-4 sm:mb-6">
              Servicios complementarios para obras: demoliciones, desescombros y preparación de espacios.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Qué incluye:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Demoliciones controladas</li>
                  <li>• Desescombros y retirada</li>
                  <li>• Preparación de obra</li>
                  <li>• Limpieza de terrenos</li>
                  <li>• Trabajos auxiliares</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Cuándo es ideal:</h3>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Antes de iniciar construcción</li>
                  <li>• Reformas que requieren demolición</li>
                  <li>• Limpieza de espacios</li>
                  <li>• Preparación de terrenos</li>
                </ul>
              </div>
            </div>
            
            <WhatsAppButton
              variant="primary"
              onClick={() => handleServiceWhatsApp('Trabajos Generales de Obra')}
            >
              Solicitar presupuesto
            </WhatsAppButton>
          </div>
        </section>
        </div>

        {/* Projects Section */}
        <section id="proyectos" className="scroll-mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto px-4">
              Algunos de nuestros proyectos recientes en Madrid
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-charcoal-600 text-lg">
                No hay proyectos en esta categoría.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

