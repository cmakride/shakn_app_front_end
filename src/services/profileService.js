import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function getProfileDetail(id) {
  return fetch (`${BASE_URL}/${id}}`)
  .then(res => res.json())
}

function updateProfile(profile) {
  return fetch(`${BASE_URL}/${profile._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(profile)
  })
  .then(res => res.json())
}

export { 
getAllProfiles,
getProfileDetail,
updateProfile
}
