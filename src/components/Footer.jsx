import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { to: '/', label: 'Home' },
        { to: '/plans', label: 'Plans' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { to: '/shipping-policy', label: 'Shipping & Delivery' },
        { to: '/terms', label: 'Terms & Conditions' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Email: hello@mistaeats.com', href: 'mailto:hello@mistaeats.com' },
        { label: 'Phone: +91 9876543210', href: 'tel:+919876543210' },
        { label: 'Address: Mumbai, India', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '📘', label: 'Facebook', url: '#' },
    { icon: '📷', label: 'Instagram', url: '#' },
    { icon: '💼', label: 'LinkedIn', url: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Section */}
        <motion.div
          className={styles.brandSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>MistaEats</h3>
          <p className={styles.tagline}>Homely. Healthy. Delivered.</p>
          <p className={styles.description}>
            Premium meal plans crafted with care. Fresh, hygienic, and nutritionally balanced meals delivered to your doorstep.
          </p>
          {/* Social Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Sections */}
        <motion.div
          className={styles.sectionsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              className={styles.section}
              variants={itemVariants}
            >
              <h4>{section.title}</h4>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.to ? (
                      <Link to={link.to}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} MistaEats. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/terms">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
