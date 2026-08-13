import { useState } from 'react'
import './ContactForm.css'

const initialForm = { name: '', email: '', phone: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!/^[0-9+\s-]{7,15}$/.test(form.phone)) next.phone = 'Enter a valid phone number.'
    if (!form.message.trim()) next.message = 'Tell us a little about what you need.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('sent')
      setForm(initialForm)
    }, 900)
  }

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--sent">
        <span className="contact-form-sent-mark" aria-hidden="true">✓</span>
        <h3 className="contact-form-sent-title">Message sent</h3>
        <p className="contact-form-sent-desc">
          Thanks for reaching out — our team will get back to you within one business day.
        </p>
        <button type="button" className="contact-form-sent-reset" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <label className="contact-form-field">
          <span className="contact-form-label">Full name *</span>
          <input
            className={`contact-form-input ${errors.name ? 'contact-form-input--error' : ''}`}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ramesh Kumar"
          />
          {errors.name ? <span className="contact-form-error">{errors.name}</span> : null}
        </label>

        <label className="contact-form-field">
          <span className="contact-form-label">Phone number *</span>
          <input
            className={`contact-form-input ${errors.phone ? 'contact-form-input--error' : ''}`}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 90000 00000"
          />
          {errors.phone ? <span className="contact-form-error">{errors.phone}</span> : null}
        </label>
      </div>

      <label className="contact-form-field">
        <span className="contact-form-label">Email address *</span>
        <input
          className={`contact-form-input ${errors.email ? 'contact-form-input--error' : ''}`}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
        />
        {errors.email ? <span className="contact-form-error">{errors.email}</span> : null}
      </label>

      <label className="contact-form-field">
        <span className="contact-form-label">Message *</span>
        <textarea
          className={`contact-form-input contact-form-input--textarea ${errors.message ? 'contact-form-input--error' : ''}`}
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us the type of space, size and location you're looking for."
        />
        {errors.message ? <span className="contact-form-error">{errors.message}</span> : null}
      </label>

      <button className="contact-form-submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

export default ContactForm
