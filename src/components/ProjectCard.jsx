export default function ProjectCard({ project }) {
  return (
    <article className="group">
      <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="pt-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
          {project.category}
        </p>
        <h3 className="mb-1 font-display text-lg font-semibold text-charcoal-900 sm:text-xl">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal-600 sm:text-base">
          {project.description}
        </p>
      </div>
    </article>
  )
}
