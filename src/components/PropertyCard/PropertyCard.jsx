import { Link } from 'react-router-dom'
import './PropertyCard.css'

/**
 * @param {{ property: import('../../data/properties.js').default[number], index?: number }} props
 */
function PropertyCard({ property, index = 0 }) {
  return (
    <article className="property-card">
      <div className="property-card-media">
        <img src={property.image} alt={property.name} loading="lazy" />
        <span className="property-card-type">{property.type}</span>
        <span className="property-card-id">LOT&nbsp;{String(property.id).padStart(2, '0')}</span>
      </div>

      <div className="property-card-body">
        <h3 className="property-card-title">{property.name}</h3>
        <p className="property-card-location">
          <span className="property-card-location-icon" aria-hidden="true">📍</span>
          {property.location}
        </p>
        <p className="property-card-size">{property.size}</p>

        <ul className="property-card-features">
          {property.features.map((feature) => (
            <li className="property-card-feature" key={feature}>{feature}</li>
          ))}
        </ul>

        <Link className="property-card-link" to="/contact">
          Inquire now
          <span className="property-card-link-arrow" aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  )
}

export default PropertyCard
