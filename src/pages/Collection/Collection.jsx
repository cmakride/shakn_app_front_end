import { useState, useEffect } from 'react'
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";


import * as profileService from '../../services/profileService'

const Collection = ({cocktails,profile, handleAddCocktailFav,handleRemoveCocktailFav,handleDeleteCocktail}) => {


const [favoriteCocktailsArray, setFavoriteCocktailsArray] = useState([])

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
            {favoriteCocktailsArray.map((cocktail) => (
                
                <div key={cocktail._id} >
                   <CocktailCard handleAddCocktailFav={handleAddCocktailFav} key={cocktail._id} cocktail={cocktail}
                   handleDeleteCocktail={handleDeleteCocktail}
                   />
                
                   {check(profile.favoriteCocktails,cocktail._id) ? 
                   <>
                   <button onClick={()=>handleAddCocktailFav(cocktail)}>♡</button>
                   </>
                   :
                   <>
                   <button onClick={()=>handleRemoveCocktailFav(cocktail)}>🖤</button>
                   </>
                       
                   }
                   
                   
                </div>
            ))}
        </div>
    
    </>
   );
}
 
export default Collection;