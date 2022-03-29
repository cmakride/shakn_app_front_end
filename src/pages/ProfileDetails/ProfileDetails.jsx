import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


const ProfileDetails = (profile) => {
  const location = useLocation()
  const profiles = location.state.profile

  return(
    <div>
    <div>
  <h1>Profile Details</h1>

  <h3>name: {profiles.name}</h3>
  <h3>bar: {profiles.bar}</h3>
  <h3>city: {profiles.city}</h3>
  <h3>bio: {profiles.bio}</h3>
    </div>


   {/* user.profile === user.profile?._id ? */
  <div>
  <Link to='/edit' state={{profile}}>Edit</Link>
  </div>
}
  </div>
  );
}

export default ProfileDetails;