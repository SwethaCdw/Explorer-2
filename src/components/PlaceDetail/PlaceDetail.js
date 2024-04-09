import React from 'react';
import { TEMPERATURE, TEMPERATURE_UNIT } from '../../constants/constants';
import './PlaceDetail.css';
import PropTypes from 'prop-types';

const PlaceDetail = ({ place }) => {
    return (
        <div className="place-detail-container">
            <div className="place-promo">
                <div className="place-highlight">
                    <p className="title"> {place.city}</p>
                    <div className="quote">
                        <p>{place.place}</p>
                    </div>
                    <p className='temperature'>{TEMPERATURE}{TEMPERATURE_UNIT}</p>
                </div>
                <div className="logo">
                    <img src={place.image} alt={place.city} />
                </div>
            </div>
            <div className='place-description'>
                <p>{place.fullDescription}</p>
            </div>
        </div>
    )
}

PlaceDetail.propTypes = {
    place: PropTypes.shape({
        city: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        fullDescription: PropTypes.string.isRequired,
    }).isRequired,
};

export default PlaceDetail;