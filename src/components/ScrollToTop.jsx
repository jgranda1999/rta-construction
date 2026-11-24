import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Wait a tick so the target section exists after route change
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo(0, 0)
        }
      }, 50)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
