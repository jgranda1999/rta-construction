import Reveal from './Reveal'

export default function ProcessSteps({ steps, title = 'Cómo trabajamos', subtitle }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-10 max-w-2xl sm:mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
          Proceso
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        {subtitle && (
          <p className="mt-4 text-lg text-charcoal-600">{subtitle}</p>
        )}
      </Reveal>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => (
          <Reveal key={index} delay={Math.min(index + 1, 4)}>
            <div className="relative">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-primary-600/90">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < steps.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-charcoal-200 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal-900">{step.title}</h3>
              <p className="text-base leading-relaxed text-charcoal-600">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
