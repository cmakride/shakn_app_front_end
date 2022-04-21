import { CocktailCard } from "../../components/CocktailCard/CocktailCard";


const CocktailList = ({ cocktails, handleAddCocktailFav, handleRemoveCocktailFav, handleDeleteCocktail, profile }) => {
    return (
        <>
            <h1 className="mt-8 text-center text-3xl font-bold">Cocktail List</h1>
            <div>
                {cocktails.map((cocktail, idx) => (

                    <div key={idx}>
                        <CocktailCard profile={profile} cocktail={cocktail}
                            handleRemoveCocktailFav={handleRemoveCocktailFav}
                            handleAddCocktailFav={handleAddCocktailFav}
                            handleDeleteCocktail={handleDeleteCocktail}
                        />
                    </div>




                ))}
            </div>
        </>
    );
}

export default CocktailList;