import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Properties' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${open ? "navbar--open" : ""}`}
    >
      <div className="navbar-inner wrap">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="navbar-brand-mark">BR</span>
          <span className="navbar-brand-text">
            <span className="navbar-brand-title">Balaji Rentals</span>
            <span className="navbar-brand-sub">
              Commercial &amp; Industrial
            </span>
          </span>
        </NavLink>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* <div className="navbar-actions">
          <a className="navbar-cta" href="tel:+919448275233">
            <span className="navbar-cta-label">Call</span>
            <span className="navbar-cta-value">+91 94482 75233</span>
          </a>
        </div> */}
        <a
          className="navbar-mobile-cta navbar-wave-btn"
          href="tel:+919448275233"
        >
          <span className="navbar-wave-fill">
            <span className="navbar-wave-fill-inner" />
          </span>
          <span className="navbar-wave-btn-text">
            <span>Call</span>
            <span className="navbar-wave-btn-number">+91 94482 75233</span>
          </span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
      </div>

      <nav className="navbar-mobile" aria-label="Mobile">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `navbar-mobile-link ${isActive ? "navbar-mobile-link--active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a className="navbar-mobile-cta" href="tel:+919448275233">
          Call +91 94482 75233
        </a>
      </nav>
    </header>
  );
}

export default Navbar
