import { Link } from "react-router-dom"

function CocktailCard({cocktail, handleDeleteCocktail}) {
    return(
        <div className="w-40 p-2 m-1 bg-white rounded-xl md:flex md:flex-wrap shadow-lg ">
            <div>
                <Link to="/cocktail" state={{ cocktail }} className="font-bold text-lg">{cocktail.name}</Link>
            </div>
                <div>
                    <Link to='/editcocktail' state={{ cocktail }} className="text-white bg-yellow-500 p-2 rounded-md">Edit</Link>
                    <button onClick={() => handleDeleteCocktail(cocktail._id)} className="text-white bg-red-600 p-1 h-9 rounded-md">Delete</button>
                </div>
                <div>
                </div>
        </div>
    )
}

export {
    CocktailCard
}