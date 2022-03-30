import { CocktailCard } from "../../components/CocktailCard/CocktailCard";

const CocktailList = ({cocktails,handleAddCocktailFav,handleRemoveCocktailFav,handleDeleteCocktail,profile}) => {
    // profile.favoriteCocktails.some(id => id ===

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
        <h1>Cocktail List</h1>
        <div>
            {cocktails.map((cocktail) => (
                
                <div key={cocktail._id} >
                   <CocktailCard handleAddCocktailFav={handleAddCocktailFav} key={cocktail._id} cocktail={cocktail} handleDeleteCocktail={handleDeleteCocktail}
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
 
export default CocktailList;