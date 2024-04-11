import React, { useState, useEffect } from 'react';
import DropdownComponent from '../../common/dropdown/dropdown';
import ConfirmationMessage from '../ConfirmationMessage/ConfirmationMessage';
import { CONTACT_FORM_CAPTION, CONTACT_FORM_TITLE, ERROR_MESSAGE, FORM_INPUTS } from '../../constants/constants';
import { scrollToBottom } from '../../utils/utils';
import './Contact.css';

const Contact = () => {
    // State variables
    const [name, setName] = useState(""); 
    const [contact, setContact] = useState(""); 
    const [boardingPoint, setBoardingPoint] = useState(""); 
    const [destination, setDestinationPoint] = useState(""); 
    const [displayMessage, setDisplayMessage]= useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);

    // Effect to scroll to bottom when displayMessage changes
    useEffect(() => {
        if (displayMessage) {
            scrollToBottom();
        }
    }, [displayMessage]);
    
    // Event handler for selecting boarding point
    const handleBoardingPointSelect = (boardingPoint) => { 
        setBoardingPoint(boardingPoint); 
        setDisplayMessage(false);
    }; 

    // Event handler for selecting destination
    const handleDestinationSelect = (destinationPoint) => { 
        setDestinationPoint(destinationPoint); 
        setDisplayMessage(false);
    }; 

    // Form submission handler
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        if (!name || !contact || !boardingPoint || !destination) {
            setErrorMessage(ERROR_MESSAGE);
            setShowError(true);
        } else {
            setDisplayMessage(true);
            setShowError(false);
        }
    }; 

    return ( 
        <section className='contact-section'>
            <div className='contact-wrapper'>
                <div className='contact-title'>
                    <h1>{CONTACT_FORM_TITLE}</h1>
                    <p className='contact-caption'>{CONTACT_FORM_CAPTION}</p>
                </div>
                <div className='contact-card'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>{FORM_INPUTS.NAME}</label> <br />
                            <input type="text" value={name} onChange={event => setName(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>{FORM_INPUTS.HOME_TOWN}</label>
                            <DropdownComponent className='contact-dropdown' dropDownData={handleBoardingPointSelect} />
                        </div>
                        <div className='form-group'>
                            <label>{FORM_INPUTS.DESTINATION}</label>
                            <DropdownComponent className='contact-dropdown' dropDownData={handleDestinationSelect} />
                        </div>
                        <div className='form-group'>
                            <label>{FORM_INPUTS.CONTACT}</label> <br />
                            <input type="number" onChange={event => setContact(event.target.value)} />
                        </div>
                        <div className={`error-message ${showError ? 'show' : ''}`}>
                            {errorMessage}
                        </div>
                        <button className='submit-button' type="submit">{FORM_INPUTS.SUBMIT_BUTTON}</button>
                    </form>
                </div>
                {displayMessage && <ConfirmationMessage user={name} start={boardingPoint} end={destination} />}
            </div>
        </section>
    );
};

export default Contact;
