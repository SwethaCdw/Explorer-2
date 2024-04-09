import React, { useState } from 'react'
import DropdownComponent from '../../common/dropdown/dropdown';
import { Link } from 'react-router-dom';
import promoImage from '../../assets/bike.png';
import { EXPLORE_BUTTON, MAIN_CAPTION, MAIN_CAPTION_SOUTH, MAIN_TITLE } from '../../constants/constants';
import { handleImageError } from '../../utils/utils';
import './Promos.css';


const Promo = () => {
  const [ explorePlace, setExplorePlace ] = useState('');

  const handlePlaceSelection = (placeToBeExplored) => {
    setExplorePlace(placeToBeExplored);
  }
  
  return (
    <>
      <div className='welcome-page'>
        <section className='caption-section'>
          <div className='caption-wrapper'>
            <div className='topic'>{MAIN_TITLE}</div>
            <div className='description'>{MAIN_CAPTION} <span>{MAIN_CAPTION_SOUTH}</span></div>
          </div>
          <div>
            <DropdownComponent className={'explore-place'} dropDown={'place'} dropDownData={handlePlaceSelection}/>
            <Link to={`/place/${explorePlace}`}>
              <button>{EXPLORE_BUTTON}</button>
            </Link>
          </div>  
        </section>
        <section className='image-section'>
            <img src={promoImage} alt='bike' onError={handleImageError}/>
        </section>
      </div>
    </>
  );
};
export default Promo;