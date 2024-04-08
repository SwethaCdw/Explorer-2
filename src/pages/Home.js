import React from 'react'
import Header from "../components/Header/Header"
import Promo from "../components/Promo/Promo"
import Destinations from '../components/Destinations/Destinations';
import Contact from "../components/ContactForm/Contact";
import { placesData } from '../services/places-service';
import { DESTINATIONS_QUOTE, DESTINATIONS_TITLE } from '../constants/constants';

const Home = () => {
  return (
    <>
    <Header/>
    <Promo/>
    <Destinations title={DESTINATIONS_TITLE} quote={DESTINATIONS_QUOTE} places={placesData}/>
    <Contact/> 
    </>
  )
}
export default Home;
