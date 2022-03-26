import React, { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'


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
		const profileFormData = new FormData()
		profileFormData.append('name', formData.name)
		props.handleUpdateProfile(profileFormData)
	}

	return (
		<>
			<h1>Edit Profile</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name-input" className="form-label">
						Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div>
					<button
						type="submit"
            disabled={!validForm}
					>
						Save
					</button>
				</div>
        <div>
					<Link
						to="/"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditProfile