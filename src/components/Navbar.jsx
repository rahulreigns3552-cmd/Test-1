import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import Logo from '../assets/logo.svg'

export default function Navbar(){
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <img src={Logo} alt="Mista Eats" />
        <span>Mista Eats</span>
      </div>
      <ul className={styles.links}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/plans">Plans</NavLink></li>
        <li><NavLink to="/dietplans">Diet Plans</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
