import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Navbar.module.css'
import Logo from '../assets/logo.svg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/plans', label: 'Plans' },
    { path: '/dietplans', label: 'Diet Plans' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.9)'
          : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
      }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className={styles.brand}>
            <img src={Logo} alt="Mista Eats" className={styles.logo} />
            <span>MistaEats</span>
          </Link>
        </motion.div>

        {/* Nav Links - Desktop */}
        <ul className={styles.links}>
          {navLinks.map((link, idx) => (
            <motion.li
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                to={link.path}
                className={`${styles.navLink} ${isActive(link.path) ? styles.active : ''}`}
              >
                <span className={styles.linkText}>{link.label}</span>
                {isActive(link.path) && (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link to="/plans" className={styles.ctaButton}>
            <motion.span
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            Subscribe Now
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.mobileToggle} ${isMobileOpen ? styles.open : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isMobileOpen ? 45 : 0, y: isMobileOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={{ opacity: isMobileOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={{ rotate: isMobileOpen ? -45 : 0, y: isMobileOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0, x: -20 }}
            animate={{ opacity: 1, height: 'auto', x: 0 }}
            exit={{ opacity: 0, height: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={styles.mobileLink}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <Link
                to="/plans"
                className={styles.mobileCta}
                onClick={() => setIsMobileOpen(false)}
              >
                Subscribe Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
