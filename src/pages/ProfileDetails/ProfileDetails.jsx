import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


const ProfileDetails = ({ user }) => {
  const location = useLocation()
  const profile = location.state
  console.log(user.profile)
  console.log(profile._id)
  return (
    <>
      <div className="flex place-items-center">
        <div>
          <h1 className="mt-8 text-center text-3xl font-bold" >{profile.name}</h1>
          <img className="object-scale-down h-48 w-96" src={profile.photo} alt="avatar" />
        </div>
        <h3 className="mt-8 text-center text-3xl font-bold">bar: {profile.bar}</h3>
        <br></br>
        <h3 className="mt-8 text-center text-3xl font-bold">city: {profile.city}</h3>
        <br></br>
        <h3 className="mt-8 text-center text-3xl font-bold">bio: {profile.bio}</h3>

        {

          ((user.profile === profile._id)) ?
            <>

              <Link className="text-white bg-yellow-500 p-2 rounded-md"
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
      </div>
    </>
  )
}

export default ProfileDetails;