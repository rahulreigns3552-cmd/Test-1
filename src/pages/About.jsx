import React from 'react'
import styles from '../styles/About.module.css'

export default function About(){
  return (
    <div className={styles.container}>
      <h1 className="reveal">About Mista Eats</h1>
      <p className="reveal">We provide homely, healthy meals prepared in FSSAI certified kitchens. Our mission is to make nutritious food convenient without compromising taste or hygiene.</p>
      <ul className="reveal">
        <li>Veg & Non-Veg options</li>
        <li>Fresh vegetables & RO water</li>
        <li>High-quality ingredients and strict quality management</li>
      </ul>
    </div>
  )
}
