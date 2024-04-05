import React from 'react'
import "./Destinations.css"
import Card from '../Card/Card';
import {placesData} from '../../services/places-service';

export default function Descriptions() {
  return (
    <>
    <div className='cards'>
        <div className='content-title'>Destinations</div>
        <div className='content'>Just for you.Because you and your bike are special to us!</div>
        <div className='container'>
        {placesData.map((item) => {
            return  <>
            <Card title={item.place} location={item.city} desc={item.shortDescription}/>
            </>
            })}
    </div>
   </div>
   </>
  )
}

