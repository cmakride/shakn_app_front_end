import { useState, useEffect } from 'react'


import * as profileService from '../../services/profileService'

const Collection = ({profile, handleAddCocktailFav,handleRemoveCocktailFav}) => {


const [favorites, setFavorites] = useState([])

useEffect(()=>{
  profileService.getProfileDetail(profile.profile)
  .then(profileDetails => setFavorites([...favorites, profileDetails.favoriteCocktails]))
},[])
  
  return ( 
    <>
    <h2>TEST</h2>
    
    </>
   );
}
 
export default Collection;