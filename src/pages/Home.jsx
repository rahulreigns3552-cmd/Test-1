import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlanCard from '../components/PlanCard'
import FeatureCard from '../components/FeatureCard'
import styles from '../styles/Home.module.css'

const plans = [
  {
    title: 'High Protein Diet',
    price: '₹1999',
    desc: 'Muscle building & fitness focused meals',
    features: [
      'High protein daily',
      'Lunch & Dinner',
      '5 days a week',
      'Pause/resume anytime',
      'Free delivery',
    ],
  },
  {
    title: 'Diabetic Friendly Diet',
    price: '₹1999',
    desc: 'Low sugar, balanced nutrition for health',
    features: [
      'Low glycemic index',
      'Chef curated meals',
      'Fresh vegetables',
      'RO water',
      'Nutritionist approved',
    ],
  },
  {
    title: 'Home Cooked Diet',
    price: '₹999',
    desc: 'Comfort food with authentic homely taste',
    features: [
      'Veg & Non-Veg options',
      'Daily home delivery',
      'FSSAI certified kitchens',
      'Fresh ingredients',
      'Most affordable',
    ],
  },
]

const features = [
  {
    title: 'Homely Meals',
    text: 'Cooked with love and care, tastes like home comfort',
    icon: '🏠',
  },
  {
    title: 'Healthy & Balanced',
    text: 'Nutritionist-designed plans for your fitness goals',
    icon: '💪',
  },
  {
    title: 'Hygienic & Safe',
    text: 'FSSAI certified kitchens with strict food standards',
    icon: '✓',
  },
  {
    title: 'Convenient',
    text: 'Easy subscriptions with pause/resume anytime',
    icon: '📦',
  },
  {
    title: 'Affordable',
    text: 'Premium quality meals at unbeatable prices',
    icon: '💰',
  },
  {
    title: 'Fresh Daily',
    text: 'Daily delivery of freshly prepared meals',
    icon: '🚚',
  },
]

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Homely. Healthy. Delivered.
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium meal plans crafted with love, nutrition-focused and designed for your goals. Fresh, hygienic, and convenient.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/plans" className="cta-primary">
              View Plans
            </Link>
            <Link to="/contact" className="cta-secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
            alt="Fresh healthy meal"
            className={styles.mealImage}
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose MistaEats?</h2>
          <p>Premium meal plans that prioritize your health and happiness</p>
        </div>

        <motion.div
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              delay={idx * 0.1}
            />
          ))}
        </motion.div>
      </section>

      {/* Plans Preview Section */}
      <section className={styles.plansSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Meal Plans</h2>
          <p>Choose the plan that fits your lifestyle and goals</p>
        </div>

        <motion.div
          className={styles.plansGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {plans.map((plan, idx) => (
            <PlanCard
              key={idx}
              {...plan}
              features={plan.features}
              delay={idx * 0.15}
            />
          ))}
        </motion.div>

        <motion.div
          className={styles.plansFooter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/plans" className="cta-primary" style={{ fontSize: '1.1rem' }}>
            Explore All Plans
          </Link>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <h2>Trusted by Thousands</h2>
        <div className={styles.trustGrid}>
          <motion.div
            className={styles.trustCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>5000+</h3>
            <p>Happy Customers</p>
          </motion.div>
          <motion.div
            className={styles.trustCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>100+</h3>
            <p>Menu Variations</p>
          </motion.div>
          <motion.div
            className={styles.trustCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>100%</h3>
            <p>FSSAI Certified</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaFinal}>
        <h2>Ready to Start Your Health Journey?</h2>
        <p>Join thousands who've already transformed their eating habits</p>
        <Link to="/plans" className="cta-accent">
          Subscribe Today
        </Link>
      </section>
    </div>
  )
}
