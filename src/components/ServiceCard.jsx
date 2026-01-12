import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, icon, link }) {

  // Check if icon is an image path (ends with image extension)
  const isImage = icon && /\.(jpeg|jpg|png|gif|webp|svg)$/i.test(icon)

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow border border-charcoal-100">
      {icon && (
        <div className="mb-3 sm:mb-4">
          {isImage ? (
            <img 
              src={icon} 
              alt={title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
            />
          ) : (
            <div className="text-primary-600 text-3xl sm:text-4xl">
              {icon}
            </div>
          )}
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-charcoal-600 mb-3 sm:mb-4">{description}</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Link
          to={link || '/servicios'}
          className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          Ver más →
        </Link>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 px-6 py-3 rounded-lg text-sm"
        >
          CONSULTAR
        </Link>
      </div>
    </div>
  )
}


