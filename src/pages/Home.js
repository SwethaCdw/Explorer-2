import React from 'react'
import Header from "../components/Header/Header"
import Promo from "../components/Promo/Promo"
import Destinations from '../components/Destinations/Destinations';
import Contact from "../components/ContactForm/Contact";

export default function Home() {
  return (
    <>
    <Header/>
    <Promo/>
    <Destinations/>
    <Contact/> 
    {/* <Welcome/>
    <Descriptions/>  
    <Contact/> */}
    </>
  )
}
