import React from 'react'
import styles from '../styles/DietPlans.module.css'

const diets = [
  {title:'High-Protein Meals', text:'Meals designed to boost protein intake — ideal for fitness enthusiasts.'},
  {title:'Healthy Meals', text:'Balanced nutrition for everyday wellness and weight management.'},
  {title:'Low Sugar & Diabetic Friendly', text:'Low sugar menus curated by nutritionists.'},
  {title:'MealBox (Compact)', text:'Convenient boxed meals for busy professionals.'}
]

export default function DietPlans(){
  return (
    <div className={styles.container}>
      <h1 className="reveal">Diet Categories</h1>
      <p className="reveal">Explore diet options tailored to your health goals.</p>
      <div className={`${styles.list} reveal`}>
        {diets.map((d,i)=> (
          <article key={i} className={styles.item}>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
