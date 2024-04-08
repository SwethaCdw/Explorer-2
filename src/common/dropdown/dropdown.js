import React from 'react';
import './dropdown.css';
import { placesData } from '../../services/places-service';
import { DROPDOWN_PLACEHOLDER } from '../../constants/constants';

export default function Dropdown(props) {
    const handleChange=(e)=>{
        props.dropDownData(e.target.value)
    }
    return (
    <div className='dropdown'>
        <select className={props.className} onChange={handleChange}>
            <option value="" disabled selected>{DROPDOWN_PLACEHOLDER}</option>
            {placesData.map((item) => {
            return <option value={item.city}>{item.city}</option>  
                })}
        </select>
    </div>     
    )
}