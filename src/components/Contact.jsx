import { useState } from 'react'
import { PERSONAL } from '../data'
import Animate from './Animate'
import SectionHeader from './SectionHeader'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  if (sent) {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-icon">✉️</div>
        <h3 className="contact-form-success-title">Message Sent!</h3>
        <p className="contact-form-success-text">
          Thanks for reaching out — I'll get back to you soon.
        </p>
        <button
          className="btn-outline"
          style={{ marginTop: 20, fontSize: 13 }}
          onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <div className="contact-form">
      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="name">Name</label>
        <input
          id="name" name="name" type="text"
          placeholder="Your name"
          value={form.name} onChange={handleChange}
        />
      </div>
      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="email">Email</label>
        <input
          id="email" name="email" type="email"
          placeholder="your@email.com"
          value={form.email} onChange={handleChange}
        />
      </div>
      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="message">Message</label>
        <textarea
          id="message" name="message"
          placeholder="What's on your mind?"
          rows={4}
          value={form.message} onChange={handleChange}
        />
      </div>
      <button
        className="btn-primary"
        style={{ alignSelf: 'flex-start' }}
        onClick={handleSubmit}
      >
        Send Message →
      </button>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: 120 }}>
      <SectionHeader overline="Let's Connect" title="Get in Touch" />

      <div className="contact-grid">

        <Animate delay={0.1}>
          <p className="contact-intro">
            I'm actively looking for opportunities as a .NET web developer. All roles such as
            internships, junior roles, or collaborative projects. Feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href={`mailto:${PERSONAL.email}`} className="contact-link">
                {PERSONAL.email}
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <a href={`tel:${PERSONAL.phone}`} className="contact-link">
                {PERSONAL.phone}
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value">{PERSONAL.location}</span>
            </div>
          </div>
        </Animate>

        <Animate delay={0.2}>
          <ContactForm />
        </Animate>

      </div>
    </section>
  )
}

export default Contact