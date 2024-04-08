import React from 'react'
import "./Destinations.css"
import Card from '../Card/Card';



const Destinations = ({ title, quote, places }) => {


  return (
    <div className='destinations'>
      <h1 className='content-title'>{title}</h1>
      <p className='content'>{quote}</p>
      <div className='container'>
        {places.map((item, index) => (
          <Card key={index} title={item.place} location={item.city} desc={item.shortDescription} imageSource={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default Destinations;
