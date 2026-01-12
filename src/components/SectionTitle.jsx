export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-3 sm:mb-4 px-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </div>
  )
}


