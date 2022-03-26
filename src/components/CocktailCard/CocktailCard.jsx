import { Link } from "react-router-dom"

function CocktailCard({cocktail, handleDeleteCocktail}) {
    return(
        <div>
            <div>
                <Link to="/cocktail" state={{ cocktail }}>{cocktail.name}</Link>
            </div>
                <div>
                    <button onClick={() => handleDeleteCocktail(cocktail._id)}>Delete</button>
                </div>
        </div>
    )
}

export {
    CocktailCard
}