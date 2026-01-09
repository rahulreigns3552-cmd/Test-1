import React from 'react'
import PlanCard from '../components/PlanCard'
import styles from '../styles/Plans.module.css'

const plans = [
  {title:'High Protein / Low Carb', price:'₹1999 / week', desc:'Protein rich menu focused on muscle growth', features:['Lunch & Dinner','5 days a week','Macro-balanced']},
  {title:'MealBox', price:'₹1499 / week', desc:'Balanced meals in compact boxes', features:['Mixed menu','Daily delivery','Pause anytime']},
  {title:'Low Sugar Diet', price:'₹1999 / week', desc:'For diabetic-friendly nutrition', features:['Low sugar','Nutritionist approved','Fresh ingredients']}
]

export default function Plans(){
  return (
    <div className={styles.container}>
      <header className={`${styles.header} reveal`}><h1>Our Plans</h1><p>Choose a plan that fits your lifestyle.</p></header>
      <div className={`${styles.grid} reveal`}>
        {plans.map((p,i)=>(<PlanCard key={i} {...p} features={p.features}/>))}
      </div>
    </div>
  )
}
