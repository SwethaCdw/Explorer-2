import React from 'react'
import Card from '../Card/Card';
import "./Destinations.css"

const Destinations = ({ title, quote, places }) => {
  return (
    <div className='destinations'>
      <h1 className='content-title'>{title}</h1>
      <p className='content-caption'>{quote}</p>
      <div className='card-container-wrapper'>
        {places.map((item) => (
          <Card key={item.city} title={item.place} location={item.city} desc={item.shortDescription} imageSource={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default Destinations;
