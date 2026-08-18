import { contactDetails } from '../../data/clients.js'
import './ContactInfo.css'

const items = [
  {
    icon: "☎",
    label: "Phone",
    value: contactDetails.phone,
    href: contactDetails.phoneHref,
    note: "Call for immediate assistance",
  },
  {
    icon: "☎",
    label: "Phone",
    value: contactDetails.phone2,
    href: contactDetails.phone2,
    note: "Call for immediate assistance",
  },
  {
    icon: "✉",
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    note: "Send your queries anytime",
  },
  {
    icon: "📍",
    label: "Address",
    value: contactDetails.address,
    note: "Visit our office for a detailed discussion",
  },
  {
    icon: "⏰",
    label: "Business hours",
    value: contactDetails.hours,
    note: "We're here to help during working hours",
  },
];

function ContactInfo() {
  return (
    <div className="contact-info">
      {items.map((item) => {
        const content = (
          <>
            <span className="contact-info-item-icon" aria-hidden="true">{item.icon}</span>
            <span className="contact-info-item-text">
              <span className="contact-info-item-label">{item.label}</span>
              <span className="contact-info-item-value">{item.value}</span>
              <span className="contact-info-item-note">{item.note}</span>
            </span>
          </>
        )

        return item.href ? (
          <a className="contact-info-item contact-info-item--link" href={item.href} key={item.label}>
            {content}
          </a>
        ) : (
          <div className="contact-info-item" key={item.label}>
            {content}
          </div>
        )
      })}

      <div className="contact-info-actions">
        <a className="contact-info-action" href={contactDetails.phoneHref}>
          Request a callback
        </a>
        <a className="contact-info-action contact-info-action--ghost" href={contactDetails.whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
