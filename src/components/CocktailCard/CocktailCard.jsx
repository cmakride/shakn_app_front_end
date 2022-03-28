import { Link } from "react-router-dom"

function CocktailCard({cocktail, handleDeleteCocktail}) {
    return(
        <div>
            <div>
                <Link to="/cocktail" state={{ cocktail }}>{cocktail.name}</Link>
            </div>
                <div>
                    <Link to='/edit' state={{ cocktail }}>Edit</Link>
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