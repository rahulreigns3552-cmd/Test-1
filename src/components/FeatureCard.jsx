import React from 'react'
import styles from '../styles/FeatureCard.module.css'

export default function FeatureCard({icon, title, text}){
  return (
    <div className={styles.feature}>
      <div className={styles.icon}>{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}
