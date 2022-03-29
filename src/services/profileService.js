import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

function createProfileDetail(profile) {
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

function addCocktailToCollection(cocktail) {
  console.log(cocktail)
  return fetch(`${BASE_URL}/addCocktail`, {
    method: "POST",
    headers: {
      Authorization: 
      `Bearer ${tokenService.getToken()}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(cocktail)
  })
  .then(res => res.json())
}


function getProfileDetailPage(profile) {
  return fetch(`${BASE_URL}`,{
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
  updateProfile,
  createProfileDetail,
  addCocktailToCollection,
  getProfileDetailPage
}
