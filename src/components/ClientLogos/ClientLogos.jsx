import { clients } from '../../data/clients.js'
import './ClientLogos.css'

function ClientLogos() {
  const track = [...clients, ...clients]

  return (
    <section className="clients">
      {/* <div className="clients-inner wrap">
        <span className="clients-label">Trusted by industry leaders</span>
      </div>

      <div className="clients-marquee" role="list" aria-label="Client logos">
        <div className="clients-marquee-track">
          {track.map((client, i) => (
            <span className="clients-logo" role="listitem" key={`${client.name}-${i}`}>
              <img src={client.logo} alt={client.name} loading="lazy" />
            </span>
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default ClientLogos
