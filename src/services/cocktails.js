import * as tokenService from './tokenService'
const BASE_URL = `/api/cocktails`

function create(cocktail){
    console.log("SERVICES",cocktail)
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(cocktail)
                             
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

export {
    getDetail,
    create,
    getAll
}