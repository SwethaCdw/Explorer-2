import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header/Header";
import PlaceDetail from "../components/PlaceDetail/PlaceDetail";
import Destinations from '../components/Destinations/Destinations';
import Contact from "../components/ContactForm/Contact";
import { placesData } from '../services/places-service';
import { SIMILAR_DESTINATIONS_QUOTE, SIMILAR_DESTINATIONS_TITLE } from '../constants/constants';


const Details = () => {
  console.log('details');
    const { placeName } = useParams();
    // Find the place object for the given placeName
    const placeObject = placesData.find(place => place.city === placeName);

    // Get related places for the current place
    const relatedPlacesObject = placeObject?.relatedPlaces
        ? placesData.filter(placeData => placeObject.relatedPlaces.includes(placeData.city))
        : [];


  return (
    <>
      <Header/>
      <PlaceDetail place={placeObject}/>
      <Destinations title={SIMILAR_DESTINATIONS_TITLE} quote={`${SIMILAR_DESTINATIONS_QUOTE}${placeName}`} places={relatedPlacesObject}/>
      <Contact/> 
    </>
  )
}

export default Details;