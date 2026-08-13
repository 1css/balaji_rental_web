import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * @param {number} target
 * @param {boolean} start
 * @param {number} [duration=1400] milliseconds
 */
export function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0)
  const frame = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!start || hasRun.current) return undefined
    hasRun.current = true

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return undefined
    }

    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => frame.current && cancelAnimationFrame(frame.current)
  }, [start, target, duration])

  return value
}

export default useCountUp
