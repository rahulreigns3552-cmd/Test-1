import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'

const values = [
  {
    title: 'Homely Cooking',
    description: 'Meals prepared with love using traditional recipes and fresh ingredients',
    icon: '🏠',
  },
  {
    title: 'Hygienic Standards',
    description: 'FSSAI certified kitchens with world-class cleanliness and food safety protocols',
    icon: '✓',
  },
  {
    title: 'Fresh Ingredients',
    description: 'Daily sourced fresh vegetables, fruits, and RO filtered water',
    icon: '🌱',
  },
  {
    title: 'Nutritionist Approved',
    description: 'Every meal is designed by certified nutritionists for balanced health',
    icon: '❤️',
  },
  {
    title: 'Veg & Non-Veg',
    description: 'Diverse menu options catering to all dietary preferences and restrictions',
    icon: '🍽️',
  },
  {
    title: 'Quality Management',
    description: 'Strict quality control and premium sourcing from trusted suppliers',
    icon: '⭐',
  },
]

const timeline = [
  { year: '2018', event: 'MistaEats founded with a vision for healthy, convenient meals' },
  { year: '2019', event: 'Expanded to 3 cities, served 10,000+ customers' },
  { year: '2020', event: 'Achieved FSSAI certification, pioneered contactless delivery' },
  { year: '2021', event: 'Grew to 15+ cities, 50,000+ active customers' },
  { year: '2022', event: 'Launched specialized diet plans with nutritionist partnerships' },
  { year: '2023', event: 'Reached 100,000+ happy customers across major metros' },
]

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About MistaEats
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bringing homely, healthy, and hygienic meals to your doorstep since 2018
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              At MistaEats, we believe that healthy eating shouldn't be complicated or expensive. Our mission is to provide
              fresh, nutritious, and delicious meals prepared with care in FSSAI-certified kitchens.
            </p>
            <p>
              We serve both vegetarian and non-vegetarian options, use fresh vegetables sourced daily, and employ RO-filtered
              water for all preparations. Every meal is crafted to balance taste with nutrition, ensuring your family gets the
              best of both worlds.
            </p>
          </motion.div>

          <motion.div
            className={styles.missionImage}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="About MistaEats"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, idx) => (
            <motion.article
              key={idx}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <h2>Our Journey</h2>
        <div className={styles.timeline}>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.timelineYear}>{item.year}</div>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineEvent}>{item.event}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <h2>Why Trust MistaEats?</h2>
        <div className={styles.trustGrid}>
          <motion.div
            className={styles.trustCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>100,000+</h3>
            <p>Happy Customers</p>
          </motion.div>
          <motion.div
            className={styles.trustCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>5+ Years</h3>
            <p>Industry Experience</p>
          </motion.div>
          <motion.div
            className={styles.trustCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>20 Cities</h3>
            <p>Nationwide Presence</p>
          </motion.div>
          <motion.div
            className={styles.trustCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>100%</h3>
            <p>FSSAI Certified</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Join Our Community</h2>
          <p>Experience the difference of fresh, homely meals delivered to your door</p>
          <button className="cta-accent">Subscribe Now</button>
        </motion.div>
      </section>
    </div>
  )
}
