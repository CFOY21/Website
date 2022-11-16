import React from "react";
import Axios from "axios";
import {useState, useEffect} from "react";


const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";
export default function Test() {

    // <h1> Test</h1>

    const [catFact, setCatFact] = useState("");
    const [img, setImg] = useState();

    useEffect(() => {
  
      Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
  
    });
  
    //https://catfact.ninja/fact
    }, []);


    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      };

      useEffect(() => {
        fetchImage();
      }, []);
    
    return (
    <>
        <p className="api"> {catFact}</p>

        
      <img src={img} alt="icons" />
    </>

    )
   
        // Constructor 
}
       
   
