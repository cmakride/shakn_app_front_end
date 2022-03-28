import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom"

function EditCocktail(props) {
    const location = useLocation()
    const [formData, setFormData] = useState(location.state.cocktail)
    const [validForm, setValidForm] = useState(true)
    const formElement = useRef()

    console.log(location.state)

    const handleChange = evt => {
        setFormData({...formData, [evt.target.name]: evt.target.value })
    }
    
    useEffect(() => {
        formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
    }, [formData])
    
    const handleSubmit = evt => {
        evt.preventDefault()
        props.handleUpdateCocktail(formData)
    }

    return (
        <>
        <h1>Edit Cocktail</h1>
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name-input">Cocktail:</label>
                <input type="name" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div>
                <button type="submit" disabled={!validForm}>
                    Save
                </button>
            </div>
        </form>
        </>
    )
}

export {
    EditCocktail
}