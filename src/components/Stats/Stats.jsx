import { stats } from '../../data/clients.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useCountUp } from '../../hooks/useCountUp.js'
import './Stats.css'

function StatItem({ stat, inView, delay }) {
  const value = useCountUp(stat.value, inView, 1200 + delay * 150)
  return (
    <div className={`stats-item reveal reveal-delay-${Math.min(delay + 1, 6)} ${inView ? 'is-visible' : ''}`}>
      <span className="stats-item-value">
        {value}
        <span className="stats-item-suffix">{stat.suffix}</span>
      </span>
      <span className="stats-item-label">{stat.label}</span>
    </div>
  )
}

function Stats() {
  const [ref, inView] = useScrollReveal({ threshold: 0.4 })

  return (
    <section className="stats blueprint-grid" ref={ref}>
      <div className="stats-inner wrap">
        <div className="stats-intro">
          <span className="stats-intro-sheet">A-03 · Track record</span>
          <h2 className="stats-intro-title">Numbers from a decade on the ground in Tumakuru</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} inView={inView} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
