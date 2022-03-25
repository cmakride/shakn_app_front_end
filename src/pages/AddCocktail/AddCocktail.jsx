import React, { useState, useEffect, useRef } from 'react';

function AddCocktail(props){
    const formElement = useRef()
    const [formData, setFormData] = useState({
        name: ""
    })

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
      };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("HANDLESUBMIT, FORMDATA == ",formData)
        props.handleAddCocktail(formData)

        //! for image upload
        // const cocktailFormData = {"name": formData.name}
        // console.log(cocktailFormData)
        // props.handleAddCocktail(cocktailFormData)
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
            /> <br /> 
            <label htmlFor="ingredients-input">Ingredients:</label>
            <input 
            type="text"
            name="ingredients"
            onChange={handleChange}
            value={formData.ingredients}
            /> <br />
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
        </>
     );
}
 
export default AddCocktail;