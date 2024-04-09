import React from 'react'
import "./ConfirmationMessage.css"
import { CONTACT_CONFIRMATION_MESSAGE } from '../../constants/constants'

const ConfirmationMessage = (props) => {
        return (
            <div className='verify-message'> 
                {CONTACT_CONFIRMATION_MESSAGE.THANKYOU}, <span className='message-details'>{props.user}</span> 
                {CONTACT_CONFIRMATION_MESSAGE.MESSAGE} {CONTACT_CONFIRMATION_MESSAGE.FROM} <span className='message-details'>{props.start} </span> 
                {CONTACT_CONFIRMATION_MESSAGE.TO} <span className='message-details'>{props.end}</span>
            </div>
          )
}

export default ConfirmationMessage;