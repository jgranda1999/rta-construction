import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import WhatsAppButton from '../components/WhatsAppButton'
import { projects, categories } from '../data/projects'
import { openWhatsApp } from '../config/whatsapp'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <div>
      <section className="border-b border-charcoal-200 bg-charcoal-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Proyectos
            </p>
            <h1 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
              Trabajos de excavación, reforma y obra en Madrid
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-charcoal-600">
              Una selección representativa. Cada encargo se documenta con fotos reales a medida
              que avancemos en nuevos proyectos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-2 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-charcoal-900 text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.id} delay={Math.min((index % 3) + 1, 3)}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-lg text-charcoal-600">
              No hay proyectos en esta categoría.
            </p>
          )}
        </div>
      </section>

      <section className="bg-charcoal-900 py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white">¿Tu proyecto será el siguiente?</h2>
            <p className="mt-2 text-charcoal-300">
              Solicita presupuesto o consulta nuestros servicios.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton
              variant="primary"
              onClick={() =>
                openWhatsApp('Hola, me gustaría solicitar un presupuesto para mi proyecto.')
              }
              className="rounded-none shadow-none"
            >
              Presupuesto
            </WhatsAppButton>
            <Link
              to="/servicios"
              className="inline-flex items-center border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-charcoal-900"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
