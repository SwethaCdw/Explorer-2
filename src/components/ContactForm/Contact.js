import React, {useEffect} from 'react' 
import Dropdown from '../../common/dropdown/dropdown'; 
import { useState } from "react"; 
import "./Contact.css" 
import { placesData } from '../../services/places-service';
// import VerifyMessage from '../verifyMessage/VerifyMessage'; 
export default function Contact() { 
    const [name, setName] = useState(""); 
    // const [boardingPoint, setBoarding] = useState(""); 
    // const [destination, setDestination] = useState(""); 
    // const[display,setDisplay]=useState("");
    
    // const fetchDropDownData=(boardingPoints)=>{ 
    //     setBoarding(boardingPoints); 
    // } 
    // const fetchDropDownDataone =(destinations)=>{ 
    //     setDestination(destinations); 
    // } 
    const handleSubmit= event =>{ 
        // setDisplay(true);
        event.preventDefault(); 
    }; 

    const [cityNames, setCityNames ] = useState([]);


    useEffect(() => {
        const names = placesData.map(place => place.city);
        setCityNames(names);
      }, []);

    return ( 
    <section className='bottom-section'> 
    <div className='bottom-wrapper'> 
        <div className='bottom-section-title'>
            <span className='contact'>Contact Us</span><br/>
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
                    <Dropdown className='txt-box' dropDown={'home'} dropDownData={cityNames}/> 
                </div>
                <div className='container-bottom'> 
                    <label>Where would you like to go?</label>
                    <Dropdown className='txt-box' dropDown={'destinations'} dropDownData={cityNames}/>
                </div> 
                <div className='container-bottom' style={{margin: "0"}}>
                    <label>Contact Number</label><br/>
                    <input type="number" /> 
                </div> 
                <button>SUBMIT INTEREST</button>
            </form> 
        </div> 
        {/* {display && <VerifyMessage user={name} start={boardingPoint} end={destination} /> } */}
        </div> 
    </section> 
    ) }