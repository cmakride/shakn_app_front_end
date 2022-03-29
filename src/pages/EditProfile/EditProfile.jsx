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
                <button type="submit" disabled={!validForm}>
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









// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation } from "react-router-dom";


// function ProfileDetails(props) {
//   const location = useLocation()
//   const formElement = useRef()
//   const [validForm, setValidForm] = useState(false)
//   const [formData, setFormData] = useState(location.state.profile,
//   {
//     name: '',
//     bio: '',
//     city: ''
//   })

//   // useEffect(() => {
//   //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
//   // }, [formData])


//   const handleChange = evt => {
//     setFormData({ ...formData, [evt.target.name]: evt.target.value })
//   }

//   const handleSubmit = evt => {
//     evt.preventDefault()
//     console.log(evt)
//     props.handleAddProfileDetails(formData)
//     // const profileFormData = new FormData()
//     // profileFormData.append('name', formData.name)
//     // profileFormData.append('bio', formData.bio)
//     // profileFormData.append('age', formData.city)
//     // props.handleAddProfileDetails(profileFormData)
//   }


//   return (
//     <>
//       {/* ternary for users profile vs someone else's profile */}
//       <h1>Profile/A Users Profile</h1>
//       <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name-input">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="bio-input">
//             Bio
//           </label>
//           <input
//             type="text"
//             name="bio"
//             value={formData.bio}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="city-input">
//             City
//           </label>
//           <input
//             type="test"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             // disabled={!validForm}
//           >
//             Update Profile
//           </button>
//         </div>
//       </form>
//     </>
//   )
// }

// export {
//   ProfileDetails
// }