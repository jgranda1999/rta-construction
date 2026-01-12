export default function ProcessSteps({ steps }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="bg-primary-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
              {index + 1}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mb-2">{step.title}</h3>
            <p className="text-sm sm:text-base text-charcoal-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


