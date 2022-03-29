import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


const ProfileDetails = (props) => {
  const location = useLocation()
  const profile = location.state

  return(
    <>
      
    <div className="w-40 p-2 bg-white rounded-xl md:flex md:flex-wrap">
    <div>
  <h1>Profile Details</h1>

  <h3>name: {profile.name}</h3>
  <h3>bar: {profile.bar}</h3>
  <h3>city: {profile.city}</h3>
  <h3>bio: {profile.bio}</h3>
    </div>

   {/* user.profile === user.profile?._id ? */
  <div>
  <Link to='/editprofile' state={profile}>Edit</Link>
  </div>
}
  </div>
  </>
   );
}

export default ProfileDetails;