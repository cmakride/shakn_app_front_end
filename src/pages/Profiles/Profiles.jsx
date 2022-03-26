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
      <h1>List of all the profiles</h1>
        {profiles.length ?
          <>
            {profiles.map((profile, idx) => (
              <Link
                key={idx}
                to='/profile'
                state={{ profile }}
              >
                {profile.name}
                <br></br>
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