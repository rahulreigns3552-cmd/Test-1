import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Policy.module.css'

export default function Terms() {
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
          Terms & Conditions
        </motion.h1>
      </section>

      <section className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using MistaEats services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time.
          </p>

          <h2>2. Services Description</h2>
          <p>
            MistaEats provides subscription-based meal delivery services. We offer various meal plans including High Protein, Low Carb, Diabetic-Friendly, and Vegetarian options. All meals are prepared in FSSAI-certified kitchens and delivered fresh to your doorstep.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            Users are responsible for:
          </p>
          <ul>
            <li>Providing accurate delivery address and contact information</li>
            <li>Informing us of any dietary restrictions or allergies</li>
            <li>Being available for delivery within the scheduled time window</li>
            <li>Reporting any damaged or missing items immediately</li>
            <li>Maintaining confidentiality of account credentials</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payment for subscriptions must be completed before meal delivery begins. We accept credit cards, debit cards, UPI, and digital wallets. Payments are processed securely and in accordance with PCI-DSS standards. Refunds for cancelled subscriptions will be processed within 5-7 business days.
          </p>

          <h2>5. Subscription & Cancellation</h2>
          <p>
            Subscriptions are on a recurring basis as per the chosen plan. You can pause, skip, or cancel anytime without penalties or additional charges. Changes to your subscription take effect from the next delivery date. For cancellation requests, contact our support team.
          </p>

          <h2>6. Meal Quality & Safety</h2>
          <p>
            MistaEats commits to:
          </p>
          <ul>
            <li>Using fresh, high-quality ingredients</li>
            <li>Maintaining FSSAI certification and food safety standards</li>
            <li>Preparing meals in hygienic certified kitchens</li>
            <li>Delivering meals within 30 minutes of scheduled time</li>
            <li>Providing nutritionist-approved meal plans</li>
          </ul>

          <h2>7. Allergies & Medical Conditions</h2>
          <p>
            While we maintain strict hygiene and preparation standards, we cannot guarantee zero cross-contamination. If you have severe allergies, please inform us in detail. We are not responsible for allergic reactions due to undisclosed allergies or external medical conditions.
          </p>

          <h2>8. Liability Limitation</h2>
          <p>
            MistaEats shall not be liable for:
          </p>
          <ul>
            <li>Delivery delays due to weather, traffic, or force majeure</li>
            <li>Medical conditions or allergic reactions</li>
            <li>Loss of appetite or taste preferences</li>
            <li>Damages from mishandling of meals after delivery</li>
          </ul>

          <h2>9. Intellectual Property</h2>
          <p>
            All content on our website, including recipes, images, and text, is owned by MistaEats and protected by intellectual property laws. Unauthorized reproduction or distribution is prohibited.
          </p>

          <h2>10. Privacy Policy</h2>
          <p>
            Your personal information is protected according to our Privacy Policy. We collect data necessary for meal delivery and customer service. Your data will not be shared with third parties without consent, except as required by law.
          </p>

          <h2>11. Dispute Resolution</h2>
          <p>
            Any disputes shall be governed by Indian law and subject to exclusive jurisdiction of courts in Mumbai. We encourage customers to contact our support team first to resolve issues amicably.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            For questions about these terms or to report violations, contact us at:<br />
            📞 Phone: +91 9876 543 210<br />
            ✉️ Email: legal@mistaeats.com<br />
            📍 Address: Mumbai, Maharashtra, India
          </p>

          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            <strong>Last Updated:</strong> January 2024
          </p>
        </motion.div>
      </section>
    </div>
  )
}
