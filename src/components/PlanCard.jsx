import React from 'react'
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
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -12, boxShadow: 'var(--shadow-lg)' }}
    >
      {badge && <div className={styles.badge}>{badge}</div>}

      <h3>{title}</h3>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>/week</span>
      </div>
      <p className={styles.desc}>{desc}</p>

      <ul className={styles.features}>
        {features.map((f, i) => (
          <li key={i}>
            <span className={styles.checkmark}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button className="cta-primary">Subscribe Now</button>
        <Link to="/plans" className="cta-secondary">
          View All Plans
        </Link>
      </div>
    </motion.article>
  )
}
