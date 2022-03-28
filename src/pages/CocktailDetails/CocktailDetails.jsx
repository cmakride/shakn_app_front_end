import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const CocktailDetail = (cocktail) => {
    const location = useLocation()
    const cocktails = location.state.cocktail


    console.log(cocktails)
    return ( 
        <>
        <img src={cocktails.image} alt="Cocktail" />
        <h1>{cocktails.name}</h1>
        <h2>Method: {cocktails.method}</h2>
        <h2>Garnish: {cocktails.garnish}</h2>
        <h2>Served in: {cocktails.served_in}</h2>
        <h2>Ingredients: {cocktails.ingredients}</h2>
        </>
     );
}
 
export default CocktailDetail;