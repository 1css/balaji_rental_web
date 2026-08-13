import { Link } from 'react-router-dom'
import { contactDetails } from '../../data/clients.js'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-grid wrap">
        <div className="footer-col footer-col--brand">
          <div className="footer-brand">
            <span className="footer-brand-mark">BR</span>
            <span className="footer-brand-title">Balaji Rentals</span>
          </div>
          <p className="footer-tagline">
            Commercial and industrial spaces across Tumakuru&rsquo;s growing business zones —
            leased on transparent, flexible terms.
          </p>
          <div className="footer-group">
            <a className="footer-group-link" href="https://www.balajitransports.in" target="_blank" rel="noreferrer">
              Balaji Transports
            </a>
            <a className="footer-group-link" href="https://www.bms-pl.in" target="_blank" rel="noreferrer">
              Balaji Movers &amp; Siding Pvt. Ltd.
            </a>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col-heading">Sitemap</span>
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/about">About</Link>
          <Link className="footer-link" to="/services">Properties</Link>
          <Link className="footer-link" to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <span className="footer-col-heading">Get in touch</span>
          <a className="footer-link footer-link--mono" href={contactDetails.phoneHref}>
            {contactDetails.phone}
          </a>
          <a className="footer-link footer-link--mono" href={`mailto:${contactDetails.email}`}>
            {contactDetails.email}
          </a>
          <span className="footer-link footer-link--static">{contactDetails.address}</span>
          <span className="footer-link footer-link--static">{contactDetails.hours}</span>
        </div>
{/* 
        <div className="footer-col">
          <span className="footer-col-heading">Logins</span>
          <a className="footer-link" href="https://rentals.balajitransports.in/agent" target="_blank" rel="noreferrer">
            Agent login
          </a>
          <a className="footer-link" href="https://rentals.balajitransports.in/admin" target="_blank" rel="noreferrer">
            Admin login
          </a>
        </div> */}
      </div>

      <div className="footer-bottom wrap">
        <span className="footer-copyright">&copy; Balaji Rentals {year}. All rights reserved.</span>
        <a className="footer-dev-credit" href="https://technonova.in" target="_blank" rel="noreferrer">
          Developed by Technonova
        </a>
      </div>
    </footer>
  )
}

export default Footer
