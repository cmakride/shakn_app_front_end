import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/cocktails`

function create(cocktails){
    console.log(cocktails)
    return fetch(BASE_URL, {
        method: 'POST',
        header: {'content-type': 'application/json'},
        body: JSON.stringify(cocktails)
        
    })
    .then(res => res.json())
}


export {
    create
}