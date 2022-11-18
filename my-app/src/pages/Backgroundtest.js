import React from "react";
//import backgr from "/Images/murph.gif"
import {useNavigate} from 'react-router-dom';
import { Link} from 'react-router-dom'

const handleClick = () => {

    console.log('hello')}




export default function Backgroundtest() {


   
        const navigate = useNavigate();
//const navigate = useNavigate();

//const navigateToHome = () => {

    //navigate('/about');
//}


//const navigatePricing = () => {

    //navigate('/pricing')
//}
 return  (


  
//const navigate = useNavigate();


    <section className="ba"
    
    
    >

    <button onClick={handleClick} className="text">
    I jump from thought to thought like a flea jumps to a light
You could give an aspirin the headache of its life
    </button>

    



    <button onClick={() => navigate(-1)} >
    I 
    </button>

    </section>

    
 )
}