import React, { useState, useEffect } from 'react'
import Dropdown from '../../common/dropdown/dropdown';
import {Link}from 'react-router-dom'
import './Promos.css';
import { placesData } from '../../services/places-service';
const Promo =() => {
  const [ cityNames, setCityNames ] = useState([]);

  useEffect(() => {
    const names = placesData.map(place => place.city);
    setCityNames(names);
  }, []);

  return (
    <div className='wrapper-class'>
      <div className='welcome-page'>
          <section className='caption-section'>
            <div className='caption-wrapper'>
              <div className='topic'>WELCOME TO EXPLORER</div>
              <div className='description'>Your Adventure Travel Expert in the <span>SOUTH</span></div>
            </div>
            <div>
              <Dropdown className={'explore-place'} dropDown={'place'} dropDownData={cityNames}/>
              <Link><button>EXPLORE</button></Link>
            </div>  
          </section>
          <section className='image-section'>
              <img src="assets/bike.png" alt='bike'/>
          </section>
      </div>
    </div>
  );
};
export default Promo;