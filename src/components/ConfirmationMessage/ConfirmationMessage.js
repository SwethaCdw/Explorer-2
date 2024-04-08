import React from 'react'
import "./ConfirmationMessage.css"
export default function ConfirmationMessage(props) {
  
        return (
            <div className='verify-message'> 
                Thank You <span className='message-details'>{props.user}</span> for expressing your interest in travelling with us. 
                Our Sales team will get back with the best packages from <span className='message-details'>{props.start} </span> 
                to <span className='message-details'>{props.end}</span> .
            </div>
          )
    
  
}
