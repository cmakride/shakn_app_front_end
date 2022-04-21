import { Link } from "react-router-dom"
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

function CocktailCard({ cocktail, handleDeleteCocktail, handleRemoveCocktailFav, handleAddCocktailFav, profile }) {
    const cocktailId = cocktail._id
    const favoritesArray = profile.favoriteCocktails

    const inFavorites = favoritesArray.find(i => i === cocktailId)



    return (
        <div className="w-40 p-2 m-1 bg-white rounded-xl md:flex md:flex-wrap shadow-lg ">
            <img src={cocktail.image} alt="cocktail" />
            <div>
                <Link to="/cocktail" state={{ cocktail }} className="font-bold text-lg">{cocktail.name}</Link>
            </div>
            <div>
                {((cocktail.profile._id === profile._id) || (cocktail.profile === profile._id)) ?
                    <>
                        <Link to='/editcocktail' state={{ cocktail }} className="text-white bg-yellow-500 p-2 rounded-md">Edit</Link>
                        <button onClick={() => handleDeleteCocktail(cocktailId)} className="text-white bg-red-600 p-1 h-9 rounded-md">Delete</button>
                    </>
                    :
                    <>
                    </>

                }
            </div>
            <div>
                {inFavorites ?
                    <>
                        <button onClick={() => handleRemoveCocktailFav(cocktail)}><BsSuitHeartFill /></button>
                    </>
                    :
                    <>
                        <button onClick={() => handleAddCocktailFav(cocktail)}><BsSuitHeart /></button>
                    </>

                }
            </div>
        </div>
    )
}

export {
    CocktailCard
}