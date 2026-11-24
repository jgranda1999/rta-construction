import logoLight from '../images/logo.png'
import logoDark from '../images/logo-dark.png'

/**
 * Letterhead mark from the original RICHE. T. A. artwork
 * (excavator + RICHE. T. A. + underline bar + stripes).
 * theme: 'light' = black mark on light headers; 'dark' = white mark for charcoal bars.
 */
export default function Logo({ className = '', variant = 'full', theme = 'light' }) {
  const isIcon = variant === 'icon'
  const src = theme === 'dark' ? logoDark : logoLight

  if (isIcon) {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src={src}
          alt="RICHE. T. A."
          className="h-14 w-auto max-w-[4.5rem] object-contain object-left sm:h-16"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={src}
        alt="RICHE. T. A."
        className="h-16 w-auto max-w-[300px] object-contain object-left sm:h-20 sm:max-w-[360px]"
        decoding="async"
      />
    </div>
  )
}
