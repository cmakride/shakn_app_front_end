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
    
    const handleChangePhoto = (evt) => {
        setFormData({...formData, photo: evt.target.files[0]})
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        const cocktailFormData = new FormData()
        cocktailFormData.append('image', formData.photo)
        cocktailFormData.append('name', formData.name)
        cocktailFormData.append('method', formData.method)
        cocktailFormData.append('served_in', formData.served_in)
        cocktailFormData.append('garnish', formData.garnish)
        cocktailFormData.append('_id', formData._id)
        props.handleUpdateCocktail(cocktailFormData)
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
            <div>
                <label htmlFor="photo-upload">
                    Upload Photo:
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="photo-upload"
                    name="image"
                    onChange={handleChangePhoto}
                />
            </div>
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