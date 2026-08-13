import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './SectionHeading.css'

/**
 * @param {{ sheet: string, title: string, description?: string, align?: 'left'|'center', tone?: 'ink'|'paper' }} props
 */
function SectionHeading({ sheet, title, description, align = 'left', tone = 'ink' }) {
  const [ref, inView] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`section-heading section-heading--${align} section-heading--${tone} reveal ${inView ? 'is-visible' : ''}`}
    >
      <span className="section-heading-sheet">{sheet}</span>
      <h2 className="section-heading-title">{title}</h2>
      {description ? <p className="section-heading-desc">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
