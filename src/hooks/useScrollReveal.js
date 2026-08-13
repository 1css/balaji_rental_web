import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element has entered the viewport, for use with the
 * shared `.reveal` / `.is-visible` CSS classes defined in theme.css.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.18]
 * @param {string} [options.rootMargin='0px 0px -10% 0px']
 * @param {boolean} [options.once=true] - stop observing after first reveal
 */
export function useScrollReveal({ threshold = 0.18, rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}

export default useScrollReveal
