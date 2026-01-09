import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/DietPlans.module.css'

const dietCategories = [
  {
    title: 'High-Protein Meals',
    icon: '💪',
    description: 'Build muscle and increase strength',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=400&fit=crop',
    details: [
      'Rich in lean proteins',
      'Perfect for gym enthusiasts',
      '40g+ protein per meal',
      'Accelerates muscle recovery',
    ],
  },
  {
    title: 'Healthy Meals',
    icon: '🥗',
    description: 'Nutritionally balanced and delicious',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    details: [
      'Balanced macronutrients',
      'Rich in vegetables',
      'Promotes healthy lifestyle',
      'Suitable for all ages',
    ],
  },
  {
    title: 'Fitness Meal Plans',
    icon: '🏃',
    description: 'Designed for active individuals',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    details: [
      'Pre & post-workout meals',
      'Performance-optimized',
      'Energy-boosting recipes',
      'Trainer recommended',
    ],
  },
  {
    title: 'Diabetic-Friendly',
    icon: '❤️',
    description: 'Low glycemic index meals',
    image: 'https://images.unsplash.com/photo-1478195409734-269b3abf5248?w=600&h=400&fit=crop',
    details: [
      'Low sugar content',
      'Medically approved',
      'Blood sugar friendly',
      'Nutritionist designed',
    ],
  },
  {
    title: 'Weight Loss Plans',
    icon: '🎯',
    description: 'Portion-controlled & nutrient-dense',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    details: [
      'Calorie controlled',
      'High fiber content',
      'Sustainable weight loss',
      'No crash dieting',
    ],
  },
  {
    title: 'Vegetarian Cuisine',
    icon: '🌱',
    description: 'Plant-based nutrition at its best',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    details: [
      '100% vegetarian',
      'Complete protein sources',
      'Ethically sourced',
      'Delicious & satisfying',
    ],
  },
]

export default function DietPlans() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Diet Categories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover meal plans tailored to your specific health goals and lifestyle preferences
        </motion.p>
      </section>

      {/* Diet Categories Grid */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesGrid}>
          {dietCategories.map((category, idx) => (
            <motion.article
              key={idx}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.imageWrapper}>
                <img src={category.image} alt={category.title} />
                <div className={styles.overlay}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                </div>
              </div>

              <div className={styles.content}>
                <h3>{category.title}</h3>
                <p className={styles.description}>{category.description}</p>

                <ul className={styles.details}>
                  {category.details.map((detail, i) => (
                    <li key={i}>
                      <span className={styles.checkmark}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <button className="cta-secondary" style={{ width: '100%' }}>
                  View Meal Plans
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SEO Section */}
      <section className={styles.seoSection}>
        <h2>Why Our Diet Plans?</h2>

        <div className={styles.seoGrid}>
          <motion.div
            className={styles.seoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Scientifically Formulated</h3>
            <p>Every meal is created based on nutritional science to deliver maximum benefits to your body.</p>
          </motion.div>

          <motion.div
            className={styles.seoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Expert Nutritionists</h3>
            <p>Meal plans are designed and reviewed by certified nutritionists and dietary experts.</p>
          </motion.div>

          <motion.div
            className={styles.seoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Proven Results</h3>
            <p>Thousands of customers have achieved their health goals using our customized meal plans.</p>
          </motion.div>

          <motion.div
            className={styles.seoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>100% Fresh & Organic</h3>
            <p>All ingredients are sourced fresh and prepared daily in our certified kitchens.</p>
          </motion.div>

          <motion.div
            className={styles.seoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Personalized Service</h3>
            <p>Customize your meals based on allergies, preferences, and dietary restrictions.</p>
          </motion.div>

          <motion.div
            className={styles.seoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Free Consultations</h3>
            <p>Get personalized nutrition advice from our expert team at no extra cost.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Find Your Perfect Diet Plan Today</h2>
          <p>Start your transformation with science-backed nutrition</p>
          <button className="cta-accent">Get Started Now</button>
        </motion.div>
      </section>
    </div>
  )
}
