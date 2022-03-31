import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    profileService.getAllProfiles()
      .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>

    
      <h1 className="mt-8 text-center text-3xl font-bold">List of all the profiles</h1>
        {profiles.length ?
          <>
    
            {profiles.map((profile, idx) => (
      <div className= "w-40 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1 md:flex md:flex-wrap">
              <Link
                key={idx}
                to='/profile'
                state={ profile }
              >
                <h4 className="mt-8 text-center text-xl font-bold">{profile.name}</h4><img className="object-scale-down h-26 w-50" src={profile.photo} alt="avatar" />
              </Link>
                </div>
            ))}
          </>
          :
          <>
            <h2>No profiles yet</h2>
          </>
        }
    </>
  )
}

export default Profiles