import { CocktailCard } from "../../components/CocktailCard/CocktailCard";
import { Link } from "react-router-dom"

const CocktailList = ({ cocktails, handleAddCocktailFav, handleRemoveCocktailFav, handleDeleteCocktail, profile }) => {
    // profile.favoriteCocktails.some(id => id ===

    //!function checking if in the collection or not
    function check(array, cocktailId) {
        let unique = true
        array.forEach(id => {
            if (id === cocktailId) {
                unique = false
            }
        })
        return unique
    }

    return (
        <>
            <h1>Cocktail List</h1>
            <div>
                {cocktails.map((cocktail,idx) => (

                    <div key={idx} className="w-40 p-2 m-1 bg-white rounded-xl md:flex md:flex-wrap shadow-lg ">
                        <div>
                            <Link to="/cocktail" state={{cocktail}} className="font-bold text-lg">{cocktail.name}</Link>
                        </div>
                        <div>
                            {((cocktail.profile._id === profile._id)||(cocktail.profile === profile._id)) ?
                                <>
                                    <Link to='/editcocktail' state={{ cocktail }} className="text-white bg-yellow-500 p-2 rounded-md">Edit</Link>
                                    <button onClick={() => handleDeleteCocktail(cocktail._id)} className="text-white bg-red-600 p-1 h-9 rounded-md">Delete</button>
                                </>
                                :
                                <>
                                </>

                            }
                        </div>
                        {check(profile.favoriteCocktails, cocktail._id) ?
                            <>
                                <button onClick={() => handleAddCocktailFav(cocktail)}>♡</button>
                            </>
                            :
                            <>
                                <button onClick={() => handleRemoveCocktailFav(cocktail)}>🖤</button>
                            </>

                        }
                        <div>
                        </div>
                    </div>
                
                   
                   
                
            ))}
        </div>
        </>
     );
}

export default CocktailList;