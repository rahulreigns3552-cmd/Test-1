import React, { Suspense, lazy } from 'react'
import { Routes as RRRoutes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Plans = lazy(() => import('./pages/Plans'))
const DietPlans = lazy(() => import('./pages/DietPlans'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Shipping = lazy(() => import('./pages/ShippingPolicy'))
const Terms = lazy(() => import('./pages/Terms'))

export default function Routes() {
  return (
    <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
      <RRRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plans" element={<Plans />} />
          <Route path="dietplans" element={<DietPlans />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shipping-policy" element={<Shipping />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </RRRoutes>
    </Suspense>
  )
}
