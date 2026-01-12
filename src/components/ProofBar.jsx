export default function ProofBar({ items }) {
  return (
    <div className="bg-charcoal-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-primary-600 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">✓</div>
              <p className="text-charcoal-700 font-medium text-sm sm:text-base md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


