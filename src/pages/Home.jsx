import React from 'react'
import PlanCard from '../components/PlanCard'
import FeatureCard from '../components/FeatureCard'
import styles from '../styles/Home.module.css'

const plans = [
  {title:'High Protein Diet', price:'₹1999 / week', desc:'High protein meals for fitness', features:['Lunch & Dinner','5 days a week','Pause anytime']},
  {title:'Diabetic Friendly Diet', price:'₹1999 / week', desc:'Low sugar, balanced nutrition', features:['Chef curated','Fresh veggies','RO water']},
  {title:'Home Cooked Diet', price:'₹999 / week', desc:'Comfort food, homely taste', features:['Veg & Non-Veg','Daily delivery','Hygienic kitchens']}
]

const features = [
  {title:'Homely Meals', text:'Cooked with love, tasted like home'},
  {title:'Healthy', text:'Nutrition focused plans for goals'},
  {title:'Hygienic', text:'FSSAI certified kitchens and strict standards'},
  {title:'Convenient', text:'Easy subscriptions, pause anytime'}
]

export default function Home(){
  return (
    <div className={styles.container}>
      <section className={`${styles.hero} reveal`}>
        <div>
          <h1>Homely. Healthy. Delivered.</h1>
          <p>Subscribe to convenient, nutritious meal plans crafted for your goals.</p>
          <div className={styles.ctaRow}>
            <a className="btn primary" href="/plans">View Plans</a>
            <a className="btn outline" href="/contact">Subscribe Now</a>
          </div>
        </div>
        <div className={styles.heroImg} aria-hidden>
          <div className={styles.placeholder}>Meal image</div>
        </div>
      </section>

      <section className={`${styles.features} reveal`}>
        {features.map((f,i)=> (
          <FeatureCard key={i} title={f.title} text={f.text} icon={<span>🍲</span>} />
        ))}
      </section>

      <section className={`${styles.plans} reveal`}>
        <h2>Meal Plans — Preview</h2>
        <div className={styles.planGrid}>
          {plans.map((p,i)=> <PlanCard key={i} {...p} features={p.features} />)}
        </div>
      </section>
    </div>
  )
}
