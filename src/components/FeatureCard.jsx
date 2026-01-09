import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/FeatureCard.module.css'

export default function FeatureCard({ icon, title, text, delay = 0 }) {
  return (
    <motion.div
      className={styles.feature}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
    >
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </motion.div>
  )
}
