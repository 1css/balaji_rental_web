import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Sheet A&#8209;01 &middot; Tumakuru Business Zones
          </span>

          <h1 className="hero-title">
            Commercial &amp; industrial space,
            <span className="hero-title-accent">
              {" "}
              built for what you&rsquo;re running.
            </span>
          </h1>

          <p className="hero-desc">
            Balaji Rentals leases premium retail, office and industrial-shed
            space across Tumakuru&rsquo;s fastest-growing corridors — with the
            infrastructure, parking and connectivity your business plan already
            assumes.
          </p>

          <div className="hero-actions">
            <Link className="hero-btn hero-btn--primary" to="/services">
              Explore properties
              <span className="hero-btn-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
            <Link className="hero-btn hero-btn--ghost" to="/contact">
              Get in touch
            </Link>
          </div>

          {/* <div className="hero-trust">
            <span className="hero-trust-label">Trusted by</span>
            <span className="hero-trust-names">DBS Bank &middot; TATA AIG &middot; Reliance &middot; Dalmia</span>
          </div> */}
        </div>

        <div className="hero-panel">
          <div className="hero-panel-card blueprint-grid">
            <div className="hero-panel-photo">
              <img
                // src="https://images.unsplash.com/photo-1653333155842-10f622386780?auto=format&fit=crop&w=900&q=80"
                src="/heroimage.PNG"
                alt="Modern commercial building exterior"
                loading="eager"
              />
              <span className="hero-panel-corner hero-panel-corner--tl" />
              <span className="hero-panel-corner hero-panel-corner--tr" />
              <span className="hero-panel-corner hero-panel-corner--bl" />
              <span className="hero-panel-corner hero-panel-corner--br" />
            </div>

            <div className="hero-panel-specs">
              <div className="hero-panel-spec">
                <span className="hero-panel-spec-value">6</span>
                <span className="hero-panel-spec-label">Active listings</span>
              </div>
              <div className="hero-panel-spec">
                <span className="hero-panel-spec-value">75K+</span>
                <span className="hero-panel-spec-label">Sqft under lease</span>
              </div>
              <div className="hero-panel-spec">
                <span className="hero-panel-spec-value">5</span>
                <span className="hero-panel-spec-label">Prime locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
