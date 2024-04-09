import React from 'react'
import Card from '../Card/Card';
import "./Destinations.css"
import PropTypes from 'prop-types';

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

Destinations.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default Destinations;
