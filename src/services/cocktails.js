import * as tokenService from './tokenService'
const BASE_URL = `/api/cocktails`

function create(cocktail){
    console.log("SERVICES",cocktail)
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`
    },
        body: cocktail
                             
    })
    .then(res => res.json())
}

function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

function getDetail(id) {
    return fetch (`${BASE_URL}/${id}}`)
    .then(res => res.json())
}

function deleteCocktail(id) {
    return fetch(`${BASE_URL}/${id}`, {method: 'DELETE'})
  .then(res => res.json())
}

export {
    deleteCocktail,
    getDetail,
    create,
    getAll
}