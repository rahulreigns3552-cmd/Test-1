import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <strong>Mista Eats</strong>
          <p>Homely meals • Healthy • Hygienic</p>
        </div>
        <div className={styles.links}>
          <Link to="/shipping-policy">Shipping & Delivery</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
      <div className={styles.copy}>© {new Date().getFullYear()} Mista Eats. All rights reserved.</div>
    </footer>
  )
}
