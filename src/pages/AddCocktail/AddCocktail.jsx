import React, { useState, useEffect, useRef } from 'react';

function AddCocktail(props) {
    const formElement = useRef()
    const formElementIng = useRef()

    const [formData, setFormData] = useState({
        name: ""
    })

    //!individual ingredient in the form
    const [formDataIngredient, setformDataIngredient] = useState({})

    //! Ingredients Array stored as a state
    const [arrayIngredients, setArrayIngredients] = useState([])

    const handleIngredientChange = (evt) => {
        setformDataIngredient({ ...formDataIngredient, [evt.target.name]: evt.target.value });
    };

    //!For Form
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("HANDLESUBMIT, FORMDATA == ", formData)
        formData.ingredients = arrayIngredients
        props.handleAddCocktail(formData)
    }

    //! add to the state which is an array of ingredients
    const handleIngredientAdd = (evt) => {
        evt.preventDefault()
        console.log(formDataIngredient.ingredient)
        //!adding the ingredient in form to the arrayIngredients in state
        setArrayIngredients(arrayIngredients => [...arrayIngredients,formDataIngredient.ingredient])
    }


    return (
        <>
            <h1>New Cocktail</h1>
            <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
                <label htmlFor="name-input">Cocktail Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                /> 
            
                <br />
                <label htmlFor="method-input">Method:</label>
                <select name="method" onChange={handleChange} value={formData.method}>
                    <option>Shake</option>
                    <option>Mixing Glass</option>
                    <option>Build in Glass</option>
                </select> <br />
                <label htmlFor="garnish-input">Garnish:</label>
                <input
                    type="text"
                    name="garnish"
                    onChange={handleChange}
                    value={formData.garnish}
                /> <br />
                <label htmlFor="servedin-input">Served in:</label>
                <select name="servedIn" onChange={handleChange} value={formData.servedIn}>
                    <option>Martini Glass</option>
                    <option>Rocks Glass</option>
                    <option>Rocks Glass Ice</option>
                    <option>High Ball</option>
                </select> <br />
                <button type='submit'>Add Cocktail</button>
            </form>
            <form autoComplete='off' ref={formElementIng} onSubmit={handleIngredientAdd}>
                <input
                    type="text"
                    name="ingredient"

                    onChange={handleIngredientChange}
                />
                <button type='submit'>Add Ingredient</button>
            </form>
            <h4>Ingredients</h4>
            <ul>
            {arrayIngredients.map((ingredient,idx)=>(
                <li key={idx}>
                    <h2>{ingredient}</h2>
                </li> 
            ))}
            </ul>
        </>
    );
}

export default AddCocktail;