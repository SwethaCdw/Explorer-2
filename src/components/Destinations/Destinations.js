import React from 'react'
import "./Destinations.css"
import Card from '../Card/Card';

const Destinations = ({ title, quote, places }) => {
  return (
    <div className='destinations'>
      <div className='content-title'>{title}</div>
      <div className='content'>{quote}</div>
      <div className='container'>
        {places.map((item, index) => (
          <Card key={index} title={item.place} location={item.city} desc={item.shortDescription} />
        ))}
      </div>
    </div>
  )
}

export default Destinations;