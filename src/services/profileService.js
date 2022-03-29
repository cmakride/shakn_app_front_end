import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

function createProfileDetails(profile) {
  return fetch(BASE_URL, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: profile
  })
  .then(res => res.json())
}

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function getEdit(id) {
  return fetch (`${BASE_URL}/${id}}`)
  .then(res => res.json())
}

function getProfileDetail(profile, id) {
  return fetch(`${BASE_URL}/${id}`,{
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
    .then(res => res.json())
}

function updateProfile(profile) {
  return fetch(`${BASE_URL}/${profile.get('_id')}`, {
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
  updateProfile,
  createProfileDetails,
  getEdit
}
