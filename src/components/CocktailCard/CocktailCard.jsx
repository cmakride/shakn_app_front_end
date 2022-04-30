import { Link } from "react-router-dom"
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

function CocktailCard({ cocktail, handleDeleteCocktail, handleRemoveCocktailFav, handleAddCocktailFav, profile }) {
    const cocktailId = cocktail._id
    const favoritesArray = profile.favoriteCocktails

    const inFavorites = favoritesArray.find(i => i === cocktailId)



    return (
        <>
            <div>
                <Link to="/cocktail" state={{ cocktail }}>
                    <img src={cocktail.image} alt="cocktail" className="w-full h-80 object-cover object-center" />
                    {cocktail.name}
                </Link>
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
        </>
    )
}

export {
    CocktailCard
}