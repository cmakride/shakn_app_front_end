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
        console.log(formData)
        // props.handleAddCocktail(formData)
        const cocktailFormData = {"name": formData.name}
        console.log(cocktailFormData)
        props.handleAddCocktail(cocktailFormData)
    }

    


    return ( 
        <>
        <h1>New Cocktail</h1>
        <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
            <label htmlFor="name-input">Cocktail Name:</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name} />
            <button type='submit'>Submit</button>
        </form>
        </>
     );
}
 
export default AddCocktail;