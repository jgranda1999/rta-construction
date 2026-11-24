import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, icon, link }) {
  const isImage = icon && /\.(jpeg|jpg|png|gif|webp|svg)$/i.test(icon)

  return (
    <Link
      to={link || '/servicios'}
      className="group flex h-full flex-col overflow-hidden bg-white transition-colors"
    >
      {icon && (
        <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
          {isImage ? (
            <img
              src={icon}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-4xl text-primary-600">
              {icon}
            </div>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col border border-t-0 border-charcoal-200 px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="mb-2 font-display text-xl font-semibold text-charcoal-900 group-hover:text-primary-600">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-base leading-relaxed text-charcoal-600">{description}</p>
        <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
          Ver servicio →
        </span>
      </div>
    </Link>
  )
}
