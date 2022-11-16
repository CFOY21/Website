import axios from "axios";
import React, { useState, useEffect } from "react";

  
export default function About() {
    // usestate for setting a javascript
    // object for storing and using data
    const  url  = "http://localhost:5000/data"
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setProduct(response.data)
        })
        }, [url])

        if(product){

            return (

                <div>

                    <h1>
                        {product.lyrics}
                    </h1>
                </div>
            )
        }

        return (

            <div>

            <h1>
                        gd
                    </h1>
            </div>
        )
    }
  
    