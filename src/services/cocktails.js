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


export {
    create
}