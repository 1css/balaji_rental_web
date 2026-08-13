import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Stats from '../../components/Stats/Stats.jsx'
import ClientLogos from '../../components/ClientLogos/ClientLogos.jsx'
import CoreValues from '../../components/CoreValues/CoreValues.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './About.css'

function About() {
  const [ref, inView] = useScrollReveal()

  return (
    <>
      <section className="about-hero">
        <div className="about-hero-inner wrap">
          <span className="about-hero-eyebrow">About Balaji Rentals</span>
          <h1 className="about-hero-title">For all your commercial &amp; industrial rental needs</h1>
          <p className="about-hero-desc">
            A decade of leasing real estate across Karnataka, with our deepest roots right here in Tumkur.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div ref={ref} className={`about-story-inner wrap reveal ${inView ? 'is-visible' : ''}`}>
          <div className="about-story-media">
            <img
              src="https://images.unsplash.com/photo-1602734846663-6051664e8f14?auto=format&fit=crop&w=900&q=80"
              alt="Office building corridor"
              loading="lazy"
            />
          </div>
          <div className="about-story-copy">
            <SectionHeading
              sheet="A-01 · Our Story"
              title="Reliable, transparent leasing built for how businesses actually grow"
            />
            <p className="about-story-text">
              Balaji Rentals provides real estate rental services across Karnataka, with a strong
              focus on Tumkur. We&rsquo;re known for a transparent approach and practical rental
              solutions for businesses of every size — from a single retail counter to a
              multi-acre industrial plot.
            </p>
            <p className="about-story-text">
              Our commitment is simple: offer transparent, reliable, and growth-oriented rental
              solutions that help the businesses we work with actually thrive.
            </p>
            <div className="about-story-tags">
              <span className="about-story-tag">Premium properties</span>
              <span className="about-story-tag">Trusted service</span>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <ClientLogos />
      <CoreValues />

      <CTA
        sheet="A-05 · Work with us"
        title="Let's find the right space for your next chapter"
        description="Reach out and we'll walk you through the properties that match your timeline and budget."
        primary={{ label: 'Contact our team', to: '/contact' }}
        secondary={{ label: 'See our properties', to: '/services' }}
      />
    </>
  )
}

export default About
