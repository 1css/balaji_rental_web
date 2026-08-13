import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './WhyChooseUs.css'

const features = [
  {
    icon: '📍',
    title: 'Prime locations',
    desc: 'Positioned inside Tumakuru\u2019s established commercial and industrial hubs.',
  },
  {
    icon: '🏢',
    title: 'Modern buildings',
    desc: 'Spacious floor plates with dependable power, water and road infrastructure.',
  },
  {
    icon: '🤝',
    title: 'Trusted by leaders',
    desc: 'Leased and occupied by names like DBS Bank, TATA AIG and Reliance.',
  },
  {
    icon: '✅',
    title: 'Flexible terms',
    desc: 'Lease structures shaped around how your business actually grows.',
  },
]

function WhyChooseUs() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="why" id="why-choose-us">
      <div className="why-inner wrap">
        <SectionHeading
          sheet="A-01 · Why Balaji Rentals"
          title="Four reasons operators pick us over a listings portal"
          description="We manage relationships, not just square footage — from first walkthrough to renewal."
        />

        <div ref={ref} className="why-grid">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`why-card reveal reveal-delay-${Math.min(i + 1, 6)} ${inView ? 'is-visible' : ''}`}
            >
              <span className="why-card-icon" aria-hidden="true">{feature.icon}</span>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.desc}</p>
              <span className="why-card-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
