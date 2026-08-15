import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import properties from "../../data/properties.js";
import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import "./FeaturedProperties.css";

function FeaturedProperties() {
  const [ref, inView] = useScrollReveal();
  const featured = properties.slice(0, 4);

  return (
    <section className="featured">
      <div className="featured-inner wrap">
        <div className="featured-head">
          <SectionHeading
            sheet="A-02 · Current Listings"
            title="A snapshot of what's available right now"
            description="From compact commercial cellars to multi-acre industrial plots on NH-4."
          />
          <Link className="featured-viewall" to="/services">
            View all properties
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div ref={ref} className="featured-row">
          <div className="featured-grid">
            {featured.map((property, i) => (
              <div
                key={property.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} ${inView ? "is-visible" : ""}`}
              >
                <PropertyCard property={property} index={i} />
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className={`more-tab reveal reveal-delay-5 ${inView ? "is-visible" : ""}`}
            aria-label="View more properties"
          >
            <span className="more-tab-chevron" aria-hidden="true">
              &rsaquo;
            </span>
            <span className="more-tab-text">More</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
