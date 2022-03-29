import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ProfileDetail = (profile) => {
  const location = useLocation()
  const profiles = location.state.profile


  return (
  
    <div className="w-40 p-2 bg-white rounded-xl md:flex md:flex-wrap">
    
    <div>
      <h1>Name: {profiles.name}</h1>
      <h2>Bio: {profiles.bio}</h2>
      <h2>City: {profiles.city}</h2>
      </div>

      <div>
      <Link to='/editprofile' state={{ profile }} className="text-white bg-yellow-500 p-2 rounded-md">Edit</Link>
      </div>
    
    </div>
    
      );
}

export default ProfileDetail;