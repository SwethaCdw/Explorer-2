import React from 'react';
import './dropdown.css';
import { placesData } from '../../services/places-service';
import { DROPDOWN_PLACEHOLDER } from '../../constants/constants';

export default function Dropdown(props) {
    /**
     * On dropdown select set the value to the dropdown data
     * @param {*} event 
     */
    const handleDropdownSelect = (event) => {
        props.dropDownData(event.target.value)
    }
    
    return (
    <div className='dropdown'>
        <select className={props.className} onChange={handleDropdownSelect}>
            <option value="" disabled selected>{DROPDOWN_PLACEHOLDER}</option>
            {placesData.map((item) => {
            return <option key={item.city} value={item.city}>{item.city}</option>  
                })}
        </select>
    </div>     
    )
}