import { CocktailCard } from "../../components/CocktailCard/CocktailCard";

const CocktailList = ({cocktails,handleAddCocktailFav,handleRemoveCocktailFav,handleDeleteCocktail,profile}) => {
    return ( 
        <>
        <h1>Cocktail List</h1>
        <div>
            {cocktails.map((cocktail) => (
                <div key={cocktail._id} >
                   <CocktailCard handleAddCocktailFav={handleAddCocktailFav} key={cocktail._id} cocktail={cocktail} handleDeleteCocktail={handleDeleteCocktail}
                   />
                   <button onClick={()=>handleAddCocktailFav(cocktail)}>♡</button>
                   
                </div>
            ))}
        </div>
        </>
     );
}
 
export default CocktailList;