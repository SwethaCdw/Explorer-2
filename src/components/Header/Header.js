import React from 'react'
import "./Header.css"
import Logo from '../Logo/Logo';
import { MENU_ITEMS } from '../../constants/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='header'>  
    <Logo />          
    <nav className='nav-bar'>
      <ul className='menu-items'>
          {MENU_ITEMS.map((item) => (
            <Link to={item.PATH} ><li className='menu-item' key={item.MENU_ITEM}>{item.MENU_ITEM}</li></Link> 
          ))}
      </ul>
    </nav>
    </section>
  )
}

export default Header;