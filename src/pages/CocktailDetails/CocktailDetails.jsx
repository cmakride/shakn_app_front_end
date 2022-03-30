import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


const CocktailDetail = ({cocktail,handleAddCocktailFav,handleAddComment, profile}) => {
    const location = useLocation()
    const currentCocktail = location.state.cocktail
    const [formData, setFormData] = useState({
        comment: '',
        profile: ''
    })

    const handleChange = evt => {
        setFormData({...formData, [evt.target.name]: evt.target.value })
    }
    
    function handleCommentSubmit(evt){
        evt.preventDefault()
        handleAddComment(formData, currentCocktail._id, profile._id)
    }

    return ( 
        <>
        <img src={currentCocktail.image} alt="Cocktail" />
        <h1>{currentCocktail.name}</h1>
        <h2>Method: {currentCocktail.method}</h2>
        <h2>Garnish: {currentCocktail.garnish}</h2>
        <h2>Served in: {currentCocktail.served_in}</h2>
        <h2>Ingredients: {currentCocktail.ingredients}</h2>
        <br />
        <h2>Comments:</h2>
        <form onSubmit={handleCommentSubmit} >
        <textarea name="comment" cols="40" rows="5" className="shadow-md border-2 border-black" onChange={handleChange}></textarea><br />
        <button type="submit" className="w-30 p-1 rounded-xl border-2 border-black bg-blue-500 text-white">Submit</button>
        </form>
        </>
     );
}
 
export default CocktailDetail;