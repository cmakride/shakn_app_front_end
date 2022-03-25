import { Link } from "react-router-dom";

const CocktailList = (props) => {
    console.log(props.cocktails)
    return ( 
        <>
        <h1>Cocktail List</h1>
        <div>
            {props.cocktails.map((cocktail, idx) => (
                <div key={idx} >
                    <Link to="/cocktail" state={{ cocktail }}>{cocktail.name}</Link>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default CocktailList;