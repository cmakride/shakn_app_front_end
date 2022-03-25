import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const CocktailDetail = (cocktail) => {
    const location = useLocation()
    const cocktails = location.state.cocktail


    console.log(cocktails)
    return ( 
        <>
        <h1>Details:</h1>
        <h2>{cocktails.name}</h2>
        </>
     );
}
 
export default CocktailDetail;