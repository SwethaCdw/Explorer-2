import React from 'react'
import "./ConfirmationMessage.css"
import { CONTACT_CONFIRMATION_MESSAGE } from '../../constants/constants'
import PropTypes from 'prop-types';

const ConfirmationMessage = ({user, start, end}) => {
        return (
            <div className='verify-message'> 
                {CONTACT_CONFIRMATION_MESSAGE.THANKYOU}, <span className='message-details'>{user}</span> 
                {CONTACT_CONFIRMATION_MESSAGE.MESSAGE} {CONTACT_CONFIRMATION_MESSAGE.FROM} <span className='message-details'>{start} </span> 
                {CONTACT_CONFIRMATION_MESSAGE.TO} <span className='message-details'>{end}</span>
            </div>
          )
}


ConfirmationMessage.propTypes = {
    user: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
};

  
export default ConfirmationMessage;