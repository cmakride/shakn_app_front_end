import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

function ProfileEditForm(props) {
    const location = useLocation()
    const profile = location.state
    // const [formData, setFormData] = useState(profile)
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        bar: '',
        bio: '',
      })
    const [validForm, setValidForm] = useState(true)
    const formElement = useRef()
    console.log(profile)

    const handleChange = evt => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        const profileFormData = new FormData()
		profileFormData.append('name', formData.name)
		profileFormData.append('city', formData.city)
		profileFormData.append('bar', formData.bar)
		profileFormData.append('bio', formData.bio)
        profileFormData.append('photo', formData.photo)
        console.log(profileFormData.get('photo'))
        props.handleEditProfile(profileFormData)
    }

    const handleChangePhoto = (evt) => {
        console.log(evt.target.files)
        setFormData({ ...formData, photo: evt.target.files[0]})
    }

    return (
        <>
            <h1>Edit Profile</h1>
            <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name-input">Name:</label>
                    <input type="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="city-input">City:</label>
                    <input type="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="bar-input">Bar:</label>
                    <input type="bar" name="bar" value={formData.bar} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="bio-input">Bio:</label>
                    <input type="bio" name="bio" value={formData.bio} onChange={handleChange} required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="photo-upload" className="form-label">
                        Upload Photo
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="photo-upload"
                        name="photo"
                        onChange={handleChangePhoto}
                    />
                </div>
                <div>
                    <button type="submit" disabled={!validForm} className="text-white bg-yellow-500 p-2 rounded-md">
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}

export default ProfileEditForm;







// import React, { useState, useEffect, useRef } from 'react'
// import { useLocation } from 'react-router-dom';

// function ProfileEditForm (props) {
//   const location = useLocation()
//   const profile = location.state
//   const [formData, setFormData] = useState(profile)
//   const [validForm, setValidForm] = useState(true)
//   const formElement = useRef()
//   console.log(profile)

//   const handleChange = evt => {
//     setFormData({...formData, [evt.target.name]: evt.target.value })
// }

// const handleSubmit = evt => {
//   evt.preventDefault()
//   props.handleEditProfile(formData)
// }

//   return ( 
//     <>
//     <h1>Edit Profile</h1>
//     <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="name-input">Name:</label>
//             <input type="name" name="name" value={formData.name} onChange={handleChange} required/>
//         </div>
//         <div>
//             <label htmlFor="city-input">City:</label>
//             <input type="city" name="city" value={formData.city} onChange={handleChange} required/>
//         </div>
//         <div>
//             <label htmlFor="bar-input">Bar:</label>
//             <input type="bar" name="bar" value={formData.bar} onChange={handleChange} required/>
//         </div>
//         <div>
//             <label htmlFor="bio-input">Bio:</label>
//             <input type="bio" name="bio" value={formData.bio} onChange={handleChange} required/>
//         </div>
//         <div>
//             <button type="submit" disabled={!validForm} className="text-white bg-yellow-500 p-2 rounded-md">
//                 Save
//             </button>
//         </div>
//     </form>
//     </>
//    );
// }
 
// export default ProfileEditForm;