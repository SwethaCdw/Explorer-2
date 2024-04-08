import React, {useEffect} from 'react' 
import DropdownComponent from '../../common/dropdown/dropdown'; 
import { useState } from "react"; 
import "./Contact.css" 
import ConfirmationMessage from '../ConfirmationMessage/ConfirmationMessage'; 
import { CONTACT_FORM_TITLE } from '../../constants/constants';
export default function Contact() { 
    const [name, setName] = useState(""); 
    const [boardingPoint, setBoardingPoint] = useState(""); 
    const [destination, setDestinationPoint] = useState(""); 
    const [display, setDisplay]= useState(false);

    useEffect(() => {
        if (display) {
            scrollToBottom();
        }
    }, [display]);
    
    const getBoardingPoint = (boardingPoint) => { 
        setBoardingPoint(boardingPoint); 
        setDisplay(false);
    } 
    const getDestinationPoint = (destinationPoint) => { 
        setDestinationPoint(destinationPoint); 
        setDisplay(false);
    } 

    const handleSubmit = event => { 
        setDisplay(true);
        event.preventDefault(); 
    }; 

    function scrollToBottom() {
        console.log('scroll to bottom');
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }

    return ( 
    <section className='bottom-section'> 
        <div className='bottom-wrapper'> 
            <div className='bottom-section-title'>
                <span className='contact'>{CONTACT_FORM_TITLE}</span><br/>
                <span className='contact-sub'>Our Sales Team will reach out to you ASAP!</span>
            </div> 
            <div className='card'> 
                <form onSubmit={handleSubmit}> 
                    <div className='container-bottom'>
                        <label>Name</label><br/>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> 
                    </div> 
                    <div className='container-bottom'>
                        <label>Your Home Town</label> 
                        <DropdownComponent className='txt-box' dropDown={'home'} dropDownData={getBoardingPoint}/> 
                    </div>
                    <div className='container-bottom'> 
                        <label>Where would you like to go?</label>
                        <DropdownComponent className='txt-box' dropDown={'destinations'} dropDownData={getDestinationPoint}/>
                    </div> 
                    <div className='container-bottom' style={{margin: "0"}}>
                        <label>Contact Number</label><br/>
                        <input type="number" /> 
                    </div> 
                    <button>SUBMIT INTEREST</button>
                </form> 
            </div> 
        {display && <ConfirmationMessage user={name} start={boardingPoint} end={destination} /> }
        </div> 
    </section> 
    ) }