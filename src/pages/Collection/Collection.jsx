import { CocktailCard } from "../../components/CocktailCard/CocktailCard";


const Collection = ({cocktails,profile, handleAddCocktailFav,handleRemoveCocktailFav,handleDeleteCocktail}) => {

  const favoritesArray = profile.favoriteCocktails
  const cocktailFavoritesArray = getFavorites(cocktails)

  function getFavorites(array){
    let tempArray = []
    favoritesArray.forEach(id => {
      cocktails.forEach(cocktail=>{
        if(cocktail._id === id){
          tempArray.push(cocktail)
          
        }
      })
    })
    return tempArray
  }
  


 //!function checking if in the collection or not

  
  return ( 
    <>
     <h1 className="mt-8 text-center text-3xl font-bold">Favorites List</h1>
        <div>
            {cocktailFavoritesArray.map((cocktail,idx) => (
                
                <div key={idx} >
                   <CocktailCard profile={profile} cocktail={cocktail}
                   handleRemoveCocktailFav={handleRemoveCocktailFav}
                   handleAddCocktailFav ={handleAddCocktailFav}
                   handleDeleteCocktail={handleDeleteCocktail}
                   />
                
                   
                </div>
            ))}
        </div>
    
    </>
   );
}
 
export default Collection;