import { useCallback, useEffect, useId, useRef, useState } from 'react'

const AUTO_MS = 5000

/**
 * Full-bleed background carousel for the home hero.
 * Content (children) stays fixed over a dark overlay; slides crossfade behind.
 */
export default function HeroCarousel({ slides, children, intervalMs = AUTO_MS }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const labelId = useId()
  const touchStartX = useRef(null)

  const count = slides.length
  const goTo = useCallback(
    (next) => {
      if (count === 0) return
      setIndex(((next % count) + count) % count)
    },
    [count]
  )
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion || count <= 1) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion, count, intervalMs])

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) < 48) return
    if (dx > 0) goPrev()
    else goNext()
  }

  if (count === 0) return null

  const active = slides[index]

  return (
    <section
      className="relative flex min-h-[88vh] items-end overflow-hidden sm:min-h-[90vh]"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p id={labelId} className="sr-only">
        Galería de líneas de negocio
      </p>

      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              i === index ? 'opacity-100 animate-hero-ken' : 'opacity-0'
            }`}
            style={{ transitionProperty: 'opacity' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/45 to-charcoal-900/25" />
      </div>

      <div className="relative z-10 w-full px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {children}

          {/* Controls sit left of the floating WhatsApp FAB */}
          <div className="mt-10 flex max-w-xl flex-col gap-3 pr-20 sm:pr-24">
            <p
              className="text-sm font-medium uppercase tracking-[0.16em] text-white/75"
              aria-live="polite"
            >
              {active.caption}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-9 w-9 items-center justify-center border border-white/40 text-lg leading-none text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Imagen anterior"
              >
                <span aria-hidden="true">‹</span>
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar imagen">
                {slides.map((slide, i) => {
                  const selected = i === index
                  return (
                    <button
                      key={slide.caption}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={`Ver: ${slide.caption}`}
                      onClick={() => goTo(i)}
                      className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        selected
                          ? 'w-7 bg-primary-400'
                          : 'w-2.5 bg-white/45 hover:bg-white/75'
                      }`}
                    />
                  )
                })}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-9 w-9 items-center justify-center border border-white/40 text-lg leading-none text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Imagen siguiente"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
