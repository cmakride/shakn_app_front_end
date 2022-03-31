import { useState, useEffect } from 'react'
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";


import * as profileService from '../../services/profileService'

const Collection = ({cocktails,profile, handleAddCocktailFav,handleRemoveCocktailFav,handleDeleteCocktail}) => {


const [favoriteCocktailsArray, setFavoriteCocktailsArray] = useState([])

//!useeffect to get the cocktail information from each id in the profile.favoriteCocktails array, should be reset each time this array changes and when page is reloaded
useEffect(()=>{
  let tempArray = []
  let favoritesArray = profile.favoriteCocktails
  favoritesArray.forEach(id => {
    cocktails.forEach(cocktail=>{
      if(cocktail._id === id){
        tempArray.push(cocktail)
        
      }
    })
  })
  setFavoriteCocktailsArray(tempArray)
},[profile.favoriteCocktails])



 //!function checking if in the collection or not
 function check(array,cocktailId){
  let unique = true
  array.forEach(id => {
      if(id === cocktailId){
          unique = false
      }
  })
  return unique
}

  
  return ( 
    <>
     <h1 className="mt-8 text-center text-3xl font-bold">Favorites List</h1>
        <div>
            {favoriteCocktailsArray.map((cocktail,idx) => (
                
                <div key={idx} >
                   <CocktailCard profile={profile} cocktail={cocktail}
                   handleRemoveCocktailFav={handleRemoveCocktailFav}
                   handleAddCocktailFav ={handleAddCocktailFav}
                   />
                
                   
                </div>
            ))}
        </div>
    
    </>
   );
}
 
export default Collection;