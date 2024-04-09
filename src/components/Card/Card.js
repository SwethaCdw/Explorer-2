import { READ_MORE_BUTTON } from "../../constants/constants";
import { handleImageError, scrollToTop } from "../../utils/utils";
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = ({ title, location, desc, imageSource}) => {

  return (
    <div className='card-container'>
      <img src={imageSource} onError={handleImageError} alt="Location"/>
      <p className='title'>{title}</p>
      <p className='city-names'>{location}</p>
      <p className="description"> {desc}</p>
      <Link to={`/place/${location}`} ><button className="read-more-button" onClick={scrollToTop}>{READ_MORE_BUTTON}</button></Link>
    </div>
  )
}

export default Card;