import React from 'react'
import "./Header.css"
export default function Header() {
  var header_items=['Restaurants','Bike Rentals','Hotels']
  return (
    <section className='header'>
            <img className='logo' src="assets/logo.png" alt='logo'/>
            <nav className='nav-bar'>
            <ul className='menu-items'>
                {header_items.map((item, index) => (
                <li className='menu-item' key={index}><a href="#">{item}</a></li>
                ))}
            </ul>
            </nav>
    </section>
  )
}
