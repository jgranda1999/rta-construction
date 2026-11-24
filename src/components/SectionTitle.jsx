export default function SectionTitle({ children, subtitle, align = 'center', eyebrow }) {
  const alignment =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto'

  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{children}</h1>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-charcoal-600">{subtitle}</p>
      )}
    </div>
  )
}
