import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


const ProfileDetails = ({user}) => {
  const location = useLocation()
  const profile = location.state
console.log(user.profile)
console.log(profile._id)
  return (
    <>
      <div className="w-40 p-2 bg-white rounded-xl md:flex md:flex-wrap">
        <div>
          <h1 className="mt-8 text-center text-3xl font-bold" >Profile Details</h1>
          <img className="object-scale-down h-48 w-96" src={profile.photo} alt="avatar" />
        </div>
        <h3>name: {profile.name}</h3>
        <h3>bar: {profile.bar}</h3>
        <h3>city: {profile.city}</h3>
        <h3>bio: {profile.bio}</h3>
      </div>

      {

        ((user.profile === profile._id)) ? 
        <>
       
            <Link
              to='/editprofile'
              state={{ profile }}
            >
              Edit
            </Link>
            </>
            :
            <>
              
                {user.profile.name}
          
            </>
          
          }
</>
)
}

export default ProfileDetails;