import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Policy.module.css'

export default function ShippingPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shipping & Delivery Policy
        </motion.h1>
      </section>

      <section className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Delivery Areas</h2>
          <p>
            MistaEats delivers across major metros and surrounding areas. We currently service Mumbai, Bangalore, Delhi, Hyderabad, Pune, and Ahmedabad. To check if your area is covered, enter your address on our subscription page or contact our support team.
          </p>

          <h2>Delivery Schedule</h2>
          <p>
            Meals are prepared fresh every morning and delivered by 8:00 AM, before you start your day. We ensure hot and fresh meals arrive at your doorstep within 30 minutes of the scheduled delivery time. Deliveries are made 5 days a week as per your subscription plan.
          </p>

          <h2>How It Works</h2>
          <ul>
            <li>Place your subscription order online</li>
            <li>Confirm delivery address and meal preferences</li>
            <li>Receive SMS with delivery time the previous evening</li>
            <li>Fresh meals delivered by 8:00 AM daily</li>
            <li>No contact delivery available upon request</li>
          </ul>

          <h2>Delivery Charges</h2>
          <p>
            All MistaEats plans include FREE delivery. There are no hidden charges or delivery fees regardless of location or order frequency. This applies to all our meal plans across all service areas.
          </p>

          <h2>Pause, Skip & Resume</h2>
          <p>
            You can pause your subscription anytime without penalty. Want to skip a day? No problem! Resume whenever you're ready. All changes can be made through your dashboard or by contacting our support team. There are no cancellation charges.
          </p>

          <h2>Damaged or Missing Items</h2>
          <p>
            If you receive damaged or incomplete meals, contact us immediately via phone or email. We will either replace the meal or provide a full refund for that day. Your satisfaction is our priority.
          </p>

          <h2>Weather & Force Majeure</h2>
          <p>
            During extreme weather, natural disasters, or unforeseen circumstances, we may delay deliveries or provide advance notice. We will keep you informed and offer makeup days or refunds based on the situation.
          </p>

          <h2>Contact Support</h2>
          <p>
            For delivery-related queries, contact us at:<br />
            📞 Phone: +91 9876 543 210<br />
            ✉️ Email: support@mistaeats.com<br />
            Hours: Monday-Friday 9 AM - 6 PM, Saturday-Sunday 10 AM - 4 PM
          </p>
        </motion.div>
      </section>
    </div>
  )
}
