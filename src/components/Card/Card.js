import { READ_MORE_BUTTON } from "../../constants/constants";
import { handleImageError, scrollToTop } from "../../utils/utils";
import { Link } from 'react-router-dom';
import "./Card.css";
import PropTypes from 'prop-types'; 

const Card = ({ title, location, desc, imageSource}) => {

  return (
    <div className='card-container'>
      <img src={imageSource} onError={handleImageError} alt="Location"/>
      <p className='title'>{title}</p>
      <p className='city-names'>{location}</p>
      <p className="description"> {desc}</p>
      <Link to={`/place/${location.toLowerCase()}`} ><button className="read-more-button" onClick={scrollToTop}>{READ_MORE_BUTTON}</button></Link>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired
};

export default Card;