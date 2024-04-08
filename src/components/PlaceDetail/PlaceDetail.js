import promoImage from '../../assets/Chidambaram.png';
import './PlaceDetail.css';
export default function PlaceDetail(props) {
    const {place }= props;
    return (
        <>
        <div className="place-promo">
            <div className="place-highlight">
                <p className="title"> {place.city}</p>
                <div className="quote">
                    <p>{place.place}</p>
                </div>
                <p>32C</p>

            </div>
            <div className="logo">
                <img src={promoImage} alt=""/>

            </div>
        </div>
        <div className='place-description'>
            <p>{place.fullDescription}</p>
        </div>
        </>
    )
}
