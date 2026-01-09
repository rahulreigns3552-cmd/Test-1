import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import PlanCard from '../components/PlanCard'
import styles from '../styles/Plans.module.css'

const allPlans = [
  {
    title: 'High Protein Diet',
    price: '₹1999',
    desc: 'Perfect for muscle building and fitness goals',
    badge: 'POPULAR',
    features: [
      '40g+ protein per meal',
      'Lunch & Dinner (5 days)',
      'No meal prep required',
      'Pause/resume anytime',
      'Free delivery',
      'Nutritionist approved',
    ],
  },
  {
    title: 'Low Carb Diet',
    price: '₹1999',
    desc: 'For weight management and energy balance',
    features: [
      'Low glycemic meals',
      'Lunch & Dinner (5 days)',
      'Fresh vegetables',
      'Portion controlled',
      'Free delivery',
      'Weekly menu variety',
    ],
  },
  {
    title: 'Diabetic Friendly Diet',
    price: '₹1999',
    desc: 'Specially designed for diabetic management',
    badge: 'CERTIFIED',
    features: [
      'Low sugar content',
      'Lunch & Dinner (5 days)',
      'RO filtered water',
      'Chef curated meals',
      'Free delivery',
      'Medically approved',
    ],
  },
  {
    title: 'Home Cooked Diet',
    price: '₹999',
    desc: 'Traditional comfort food with authentic taste',
    features: [
      'Veg & Non-Veg options',
      'Lunch & Dinner (5 days)',
      'Home-style cooking',
      'FSSAI certified',
      'Free delivery',
      'Most affordable plan',
    ],
  },
  {
    title: 'Fitness Meal Plan',
    price: '₹2199',
    desc: 'Advanced nutrition for serious athletes',
    features: [
      'Custom macros',
      'Lunch & Dinner (5 days)',
      'Pre/post workout meals',
      'Performance nutrition',
      'Free delivery',
      'Trainer support',
    ],
  },
  {
    title: 'Vegetarian Plan',
    price: '₹1799',
    desc: 'Plant-based nutrition at its finest',
    features: [
      '100% vegetarian',
      'Lunch & Dinner (5 days)',
      'High protein veggies',
      'Balanced nutrition',
      'Free delivery',
      'Ethical sourcing',
    ],
  },
]

export default function Plans() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
          Choose Your Perfect Plan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          All plans include free delivery and flexible pause/resume options. Find the meal plan that matches your lifestyle and goals.
        </motion.p>
      </section>

      {/* Plans Grid */}
      <section className={styles.plansSection}>
        <motion.div
          className={styles.plansGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allPlans.map((plan, idx) => (
            <PlanCard
              key={idx}
              {...plan}
              features={plan.features}
              delay={idx * 0.08}
            />
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2>Why Our Plans Stand Out</h2>

        <div className={styles.benefitsGrid}>
          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.benefitIcon}>🛡️</div>
            <h3>100% Fresh Daily</h3>
            <p>No preservatives or additives. Cooked fresh every morning and delivered to your door.</p>
          </motion.div>

          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.benefitIcon}>✓</div>
            <h3>FSSAI Certified</h3>
            <p>All our kitchens are certified and maintain world-class hygiene standards.</p>
          </motion.div>

          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.benefitIcon}>👨‍⚕️</div>
            <h3>Nutritionist Designed</h3>
            <p>Every meal is designed by expert nutritionists to meet your health goals.</p>
          </motion.div>

          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles.benefitIcon}>🎯</div>
            <h3>Customizable Plans</h3>
            <p>Pause, skip, or modify your delivery anytime without any hidden charges.</p>
          </motion.div>

          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.benefitIcon}>🚚</div>
            <h3>Free Delivery</h3>
            <p>All plans include free daily delivery. No extra charges, no hidden fees.</p>
          </motion.div>

          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.benefitIcon}>💬</div>
            <h3>24/7 Support</h3>
            <p>Our customer support team is always ready to help with any questions or changes.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqGrid}>
          <motion.div
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Can I pause my subscription?</h4>
            <p>Yes! You can pause, skip, or resume your subscription anytime without any penalty or extra charges.</p>
          </motion.div>

          <motion.div
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Is delivery free?</h4>
            <p>Yes, all plans include free daily delivery across the city. No additional delivery charges whatsoever.</p>
          </motion.div>

          <motion.div
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>How fresh are the meals?</h4>
            <p>Meals are cooked fresh every morning and delivered by 8 AM, ensuring maximum freshness and nutrition.</p>
          </motion.div>

          <motion.div
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Can I change my plan?</h4>
            <p>Absolutely! You can upgrade, downgrade, or switch to a different plan anytime from your account.</p>
          </motion.div>

          <motion.div
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Do you have vegan options?</h4>
            <p>Yes, we offer 100% vegetarian and vegan options across all our plans. Just specify your preference.</p>
          </motion.div>

          <motion.div
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4>What about allergies?</h4>
            <p>We take allergies seriously. Please mention all allergies during signup and we'll customize your meals accordingly.</p>
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
          <h2>Ready to Transform Your Nutrition?</h2>
          <p>Start your journey to better health today</p>
          <button className="cta-accent" style={{ fontSize: '1.05rem', padding: '1.2rem 3rem' }}>
            Subscribe Now
          </button>
        </motion.div>
      </section>
    </div>
  )
}
