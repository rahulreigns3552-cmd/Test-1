import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../styles/PlanCard.module.css'

export default function PlanCard({
  title,
  price,
  desc,
  features,
  badge,
  delay = 0,
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -16, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glass backdrop effect */}
      <motion.div
        className={styles.glassBackground}
        animate={{ opacity: isHovered ? 0.1 : 0.05 }}
        transition={{ duration: 0.3 }}
      />

      {badge && (
        <motion.div
          className={styles.badge}
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: delay + 0.2, type: 'spring' }}
        >
          {badge}
        </motion.div>
      )}

      <motion.h3
        animate={{ color: isHovered ? 'var(--primary)' : 'var(--text-dark)' }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <div className={styles.priceWrapper}>
        <motion.span
          className={styles.price}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {price}
        </motion.span>
        <span className={styles.period}>/week</span>
      </div>

      <p className={styles.desc}>{desc}</p>

      <ul className={styles.features}>
        {features.map((f, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
          >
            <motion.span className={styles.checkmark} whileHover={{ scale: 1.3, rotate: 10 }}>
              ✓
            </motion.span>
            {f}
          </motion.li>
        ))}
      </ul>

      <motion.div
        className={styles.actions}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="cta-primary"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          Subscribe Now
        </motion.button>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/plans" className="cta-secondary">
            View All Plans
          </Link>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}
