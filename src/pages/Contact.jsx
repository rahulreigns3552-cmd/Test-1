import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className={styles.contentSection}>
        <div className={styles.formContainer}>
          <motion.form
            onSubmit={handleSubmit}
            className={styles.form}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Send Us a Message</h2>

            {submitted && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Thank you! We'll get back to you soon.
              </motion.div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="cta-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </motion.form>
        </div>

        <div className={styles.infoContainer}>
          <motion.div
            className={styles.infoBox}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Contact Information</h2>

            <motion.div
              className={styles.infoItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.icon}>📍</div>
              <div>
                <h4>Address</h4>
                <p>MistaEats Headquarters<br /> Mumbai, Maharashtra 400001<br /> India</p>
              </div>
            </motion.div>

            <motion.div
              className={styles.infoItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.icon}>📞</div>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+919876543210">+91 9876 543 210</a>
                  <br />
                  <a href="tel:+919876543211">+91 9876 543 211</a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.infoItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.icon}>✉️</div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:hello@mistaeats.com">hello@mistaeats.com</a>
                  <br />
                  <a href="mailto:support@mistaeats.com">support@mistaeats.com</a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.infoItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className={styles.icon}>⏰</div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br /> Saturday - Sunday: 10:00 AM - 4:00 PM<br /> Holidays: Closed</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" title="Facebook">📘</a>
                <a href="#" title="Twitter">🐦</a>
                <a href="#" title="Instagram">📷</a>
                <a href="#" title="LinkedIn">💼</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2>Visit Us</h2>
        <div className={styles.mapContainer}>
          <iframe
            title="MistaEats Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.82397652661!2d72.8479!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
