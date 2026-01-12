export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video bg-charcoal-200 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
          {project.category}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mb-2">{project.title}</h3>
        <p className="text-sm sm:text-base text-charcoal-600">{project.description}</p>
      </div>
    </div>
  )
}


