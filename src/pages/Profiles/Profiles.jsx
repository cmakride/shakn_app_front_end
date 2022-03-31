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
              <Link
                key={idx}
                to='/profile'
                state={ profile }
              >
                <div class= "w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1">
                {profile.name}
                <br></br>
                </div>
              </Link>
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