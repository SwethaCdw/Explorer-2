import "./Card.css"
import {Link}from 'react-router-dom'

export default function Card(props) {
  return (
    <div className='img-container'>
          <img src={`/assets/${props.location}.png`}  width="100%" alt="bike"/>
          <p className='title'>
            {props.title}
          </p>
          <span className='city-names'>
            {props.location}
          </span>
            <p><br/>
              {props.desc}
          </p>
          <Link to={`/place/${props.location}`} ><button>READ MORE</button></Link>
    </div>
  )
}
