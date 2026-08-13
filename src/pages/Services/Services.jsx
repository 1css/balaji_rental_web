import { useMemo, useState } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import PropertyCard from '../../components/PropertyCard/PropertyCard.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import properties from '../../data/properties.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './Services.css'

const filters = ['All', 'Commercial', 'Industrial']

function Services() {
  const [active, setActive] = useState('All')
  const [ref, inView] = useScrollReveal()

  const visible = useMemo(
    () => (active === 'All' ? properties : properties.filter((p) => p.type === active)),
    [active],
  )

  return (
    <>
      <section className="services-hero">
        <div className="services-hero-inner wrap">
          <span className="services-hero-eyebrow">Our Rental Properties</span>
          <h1 className="services-hero-title">A portfolio built for retail, offices and industry</h1>
          <p className="services-hero-desc">
            From high-traffic commercial streets to well-connected industrial zones — browse
            what&rsquo;s currently available and inquire directly on any listing.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-list-inner wrap">
          <div className="services-list-head">
            <SectionHeading sheet="A-02 · Our Buildings" title="Find your perfect business space" />
            <div className="services-filters" role="tablist" aria-label="Filter properties by type">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active === filter}
                  className={`services-filter ${active === filter ? 'services-filter--active' : ''}`}
                  onClick={() => setActive(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div ref={ref} className="services-grid">
            {visible.map((property, i) => (
              <div key={property.id} className={`reveal reveal-delay-${Math.min((i % 6) + 1, 6)} ${inView ? 'is-visible' : ''}`}>
                <PropertyCard property={property} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        sheet="A-06 · Site visits"
        title="Ready to visit one of our properties?"
        description="Schedule a walkthrough and see the space, the neighbourhood and the connectivity for yourself."
        primary={{ label: 'Schedule a visit', to: '/contact' }}
      />
    </>
  )
}

export default Services
