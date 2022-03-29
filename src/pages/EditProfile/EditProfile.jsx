import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom"

function EditProfile(props) {
  
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.profile)
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  const handleChange = evt => {
      setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
      formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
      evt.preventDefault()
      props.handleUpdateProfile(formData)
  }

  return (
      <>
      <h1>Edit Profile</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name-input">Name:</label>
              <input type="name" name="name" value={formData.name} onChange={handleChange} required/>
          </div>
          <div>
              <button type="submit" disabled={!validForm} className="text-white bg-yellow-500 p-2 rounded-md">
                  Save
              </button>
          </div>
      </form>
      </>
  )
}

export {
  EditProfile
}