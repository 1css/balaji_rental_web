import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './CoreValues.css'

const values = [
  {
    icon: '🏗️',
    title: 'Quality',
    desc: 'Top-grade infrastructure and consistent upkeep across every property we manage.',
  },
  {
    icon: '🤝',
    title: 'Trust',
    desc: 'Transparent terms and a straight answer, even before you sign anything.',
  },
  {
    icon: '📍',
    title: 'Location',
    desc: 'Space inside the commercial and industrial corridors your business actually needs.',
  },
]

function CoreValues() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="core-values">
      <div className="core-values-inner wrap">
        <SectionHeading
          sheet="A-04 · Core Values"
          title="The principles behind every lease we write"
          align="center"
        />

        <div ref={ref} className="core-values-grid">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`core-values-card reveal reveal-delay-${Math.min(i + 1, 6)} ${inView ? 'is-visible' : ''}`}
            >
              <span className="core-values-card-icon" aria-hidden="true">{value.icon}</span>
              <h3 className="core-values-card-title">{value.title}</h3>
              <p className="core-values-card-desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
