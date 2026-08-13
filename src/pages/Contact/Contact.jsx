import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import ContactInfo from '../../components/ContactInfo/ContactInfo.jsx'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import './Contact.css'

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-inner wrap">
          <span className="contact-hero-eyebrow">Get in touch</span>
          <h1 className="contact-hero-title">Let&rsquo;s talk about your rental needs</h1>
          <p className="contact-hero-desc">
            We&rsquo;d love to show you around our properties or help you choose the right one
            for your business.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main-inner wrap">
          <div className="contact-main-form">
            <SectionHeading sheet="A-01 · Send a message" title="Fill out the form and we'll get back to you" />
            <ContactForm />
          </div>

          <div className="contact-main-info">
            <SectionHeading sheet="A-02 · Reach us directly" title="Other ways to connect" />
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map-inner wrap">
          <SectionHeading sheet="A-03 · Our office" title="Visit us in Tumkur" description="We're located in the heart of Tumkur — come by during business hours." />
          <div className="contact-map-frame">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Tumkur,Karnataka,India&zoom=14&size=1200x420&markers=color:red%7Clabel:B%7CTumkur,Karnataka&key=AIzaSyDKYnVImZN7e4DADTcfLl35_uw6V60NArM"
              alt="Map showing Tumkur office location"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
