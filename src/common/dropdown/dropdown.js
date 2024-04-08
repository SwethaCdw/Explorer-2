import React from 'react';
import './dropdown.css';
import { placesData } from '../../services/places-service';

export default function Dropdown(props) {
    const handleChange=(e)=>{
        props.dropDownData(e.target.value)
    }
    return (
    <div className='dropdown'>
        <select className={props.className} onChange={handleChange}>
            <option value="" disabled selected>Choose</option>
            {placesData.map((item) => {
            return <option value={item.city}>{item.city}</option>  
                })}
        </select>
    </div>     
    )
}