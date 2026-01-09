import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  useEffect(()=>{
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('visible')
      })
    },{threshold:0.08})
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))
    return ()=>obs.disconnect()
  },[])

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
