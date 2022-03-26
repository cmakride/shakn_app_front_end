import { Link } from "react-router-dom";
import { CocktailCard } from "../../components/CocktailCard/CocktailCard";

const CocktailList = (props) => {
    return ( 
        <>
        <h1>Cocktail List</h1>
        <div>
            {props.cocktails.map((cocktail) => (
                <div key={cocktail._id} >
                   <Link to='/cocktail' state={{ cocktail }}><CocktailCard key={cocktail._id} cocktail={cocktail} /></Link> 
                </div>
            ))}
        </div>
        </>
     );
}
 
export default CocktailList;