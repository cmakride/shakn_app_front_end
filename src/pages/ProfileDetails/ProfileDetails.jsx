import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


const ProfileDetail = (profile) => {
  const location = useLocation()
  const profiles = location.state.profile

  return(
    <div>

    <div>
  <h1>Profile Details</h1>
  <h2>name: {profiles.name}</h2>
  <h2>bar: {profiles.bio}</h2>
  <h2>city: {profiles.city}</h2>
    </div>
  
  <div>
  <Link to='/editprofile' state={{profile}} className="text-white bg-yellow-500 p-2 rounded-md">Edit</Link>
  </div>
  </div>
  );
}

export default ProfileDetail;