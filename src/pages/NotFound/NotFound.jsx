import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found blueprint-grid">
      <div className="not-found-inner wrap">
        <span className="not-found-sheet">Sheet 404 · Not on file</span>
        <h1 className="not-found-title">This lot isn&rsquo;t on the plan</h1>
        <p className="not-found-desc">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get
          you back to solid ground.
        </p>
        <Link className="not-found-btn" to="/">
          Back to home
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default NotFound
