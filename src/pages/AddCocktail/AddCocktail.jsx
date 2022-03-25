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
        setArrayIngredients(arrayIngredients => [...arrayIngredients, formDataIngredient.ingredient])
    }



    const handleRemoveIngredient = (id) => {
        console.log("ARRAY INGREDIENTS BEFORE == ",arrayIngredients)
        console.log(id)
        const newArray = arrayIngredients

        setArrayIngredients(newArray.filter((item, index) => index !== id));
        
        console.log("ARRAYINGREDIENTS AFTER=",arrayIngredients)
        
    }

    useEffect(()=>{
        console.log("SomethingHappened")
    },[arrayIngredients])


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
                <select name="served_in" onChange={handleChange} value={formData.served_in}>
                    <option>Martini Glass</option>
                    <option>Rocks Glass</option>
                    <option>Rocks Glass Ice</option>
                    <option>High Ball</option>
                </select> <br />
                <button type='submit'>Add Cocktail</button>
            </form><br />
            <form autoComplete='off' ref={formElementIng} onSubmit={handleIngredientAdd}>
                <input
                    type="text"
                    name="ingredient"

                    onChange={handleIngredientChange}
                /> <br />   
                <button type='submit'>Add Ingredient</button>
            </form>
            <h4>Ingredients</h4>
            <ul>
                {arrayIngredients.map((ingredient, idx) => (
                    <li key={idx}>
                        <h2>{ingredient}</h2>
                        <button type="button" onClick={()=> handleRemoveIngredient(idx)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AddCocktail;