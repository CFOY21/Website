import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom'
 
 export default function Home() {

    const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('../pricing', {replace: true}), [navigate]);


    return (
        <button type="button" onClick={handleOnClick}>
        Go home
      </button>)
}