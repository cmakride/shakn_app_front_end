import { CocktailCard } from "../../components/CocktailCard/CocktailCard";

const CocktailList = (props) => {
    return ( 
        <>
        <h1>Cocktail List</h1>
        <div>
            {props.cocktails.map((cocktail) => (
                <div key={cocktail._id} >
                   <CocktailCard key={cocktail._id} cocktail={cocktail} handleDeleteCocktail={props.handleDeleteCocktail}/>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default CocktailList;