import "./Card.css"
import {Link}from 'react-router-dom'

export default function Card({ title, location, desc }) {
  const imageSource = `../assets/Pollachi.png`;

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='img-container'>
      <img src={imageSource} width="100%" alt="Location"/>
      <p className='title'>
        {title}
      </p>
      <span className='city-names'>
        {location}
      </span>
        <p><br/>
          {desc}
      </p>
      <Link to={`/place/${location}`} ><button onClick={scrollToTop}>READ MORE</button></Link>
    </div>
  )
}
