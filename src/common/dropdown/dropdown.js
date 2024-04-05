import React from 'react';
import './dropdown.css';

export default function Dropdown(props) {
    
    console.log(props);
    return (
    <div className='dropdown'>
        <select className={props.className}>
            {props.dropDownData.map((item) => {
            return <option value={item}>{item}</option>  
                })}
        </select>
    </div>     
    )
}