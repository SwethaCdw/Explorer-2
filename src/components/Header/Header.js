import React from 'react'
import "./Header.css"
import Logo from '../Logo/Logo';
import { MENU_ITEMS } from '../../constants/constants';

const Header = () => {
  return (
    <section className='header'>  
    <Logo />          
    <nav className='nav-bar'>
      <ul className='menu-items'>
          {MENU_ITEMS.map((item) => (
            <li className='menu-item' key={item}>{item}</li>
          ))}
      </ul>
    </nav>
    </section>
  )
}

export default Header;