export default function ProofBar({ items }) {
  return (
    <div className="border-y border-charcoal-200 bg-charcoal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 divide-charcoal-200 lg:grid-cols-4 lg:divide-x">
          {items.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-center px-4 py-6 text-center sm:py-8 ${
                index >= 2 ? 'border-t border-charcoal-200 lg:border-t-0' : ''
              } ${index % 2 === 1 ? 'border-l border-charcoal-200 lg:border-l-0' : ''}`}
            >
              <p className="font-display text-sm font-semibold tracking-wide text-charcoal-800 sm:text-base">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
