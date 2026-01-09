import React from 'react'
import styles from '../styles/PlanCard.module.css'

export default function PlanCard({title, price, desc, features}){
  return (
    <article className={styles.card} tabIndex={0}>
      <h3>{title}</h3>
      <p className={styles.price}>{price}</p>
      <p className={styles.desc}>{desc}</p>
      <ul className={styles.features}>
        {features.map((f,i)=>(<li key={i}>{f}</li>))}
      </ul>
      <div className={styles.actions}>
        <button className="btn primary">Subscribe Now</button>
        <button className="btn outline">View Plans</button>
      </div>
    </article>
  )
}
