export default function Logo({ className = '', variant = 'full', theme = 'light' }) {
  // Variants: 'full' (with text), 'icon' (just the symbol)
  // Theme: 'light' (for light backgrounds), 'dark' (for dark backgrounds)
  
  const textColorPrimary = theme === 'dark' ? 'text-white' : 'text-primary-600'
  const textColorSecondary = theme === 'dark' ? 'text-gray-300' : 'text-charcoal-700'
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Symbol */}
      <svg
        width={variant === 'icon' ? '48' : '56'}
        height={variant === 'icon' ? '48' : '56'}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background square with rounded corners */}
        <rect x="4" y="4" width="48" height="48" rx="6" fill="url(#logoGradient)" />
        
        {/* Construction elements - Modern design */}
        {/* Hammer head (top) */}
        <rect x="18" y="16" width="12" height="8" rx="1.5" fill="white" />
        {/* Hammer handle */}
        <rect x="28" y="24" width="4" height="16" rx="2" fill="white" />
        {/* Gear/cog icon (bottom left) */}
        <circle cx="16" cy="40" r="5" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="16" cy="40" r="2.5" fill="white" />
        {/* Gear teeth */}
        <rect x="15" y="35" width="2" height="3" rx="1" fill="white" />
        <rect x="15" y="42" width="2" height="3" rx="1" fill="white" />
        <rect x="11" y="39" width="3" height="2" rx="1" fill="white" />
        <rect x="20" y="39" width="3" height="2" rx="1" fill="white" />
        
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Company Name */}
      {variant === 'full' && (
        <div className="ml-3 flex flex-col">
          <span className={`text-xl font-bold ${textColorPrimary} leading-tight`}>
            R.T.A
          </span>
          <span className={`text-sm font-semibold ${textColorSecondary} leading-tight`}>
            Construcción
          </span>
        </div>
      )}
    </div>
  )
}

