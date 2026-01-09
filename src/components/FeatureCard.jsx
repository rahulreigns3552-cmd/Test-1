import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/FeatureCard.module.css'

export default function FeatureCard({ icon, title, text, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={styles.feature}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -12, scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={styles.iconWrapper}
        animate={{
          backgroundColor: isHovered ? 'rgba(245, 191, 31, 0.15)' : 'rgba(33, 90, 65, 0.08)',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.icon}
          animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      </motion.div>
      <motion.h4
        animate={{ color: isHovered ? 'var(--primary)' : 'var(--text-dark)' }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h4>
      <p>{text}</p>
    </motion.div>
  )
}
