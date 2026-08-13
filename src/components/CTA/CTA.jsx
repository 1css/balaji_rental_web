import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './CTA.css'

/**
 * @param {{ sheet: string, title: string, description?: string, primary: {label: string, to: string}, secondary?: {label: string, to: string} }} props
 */
function CTA({ sheet, title, description, primary, secondary }) {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="cta blueprint-grid">
      <div ref={ref} className={`cta-inner wrap reveal ${inView ? 'is-visible' : ''}`}>
        <span className="cta-sheet">{sheet}</span>
        <h2 className="cta-title">{title}</h2>
        {description ? <p className="cta-desc">{description}</p> : null}

        <div className="cta-actions">
          <Link className="cta-btn cta-btn--primary" to={primary.to}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="cta-btn cta-btn--ghost" to={secondary.to}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default CTA
