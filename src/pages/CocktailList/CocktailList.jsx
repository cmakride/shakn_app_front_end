import { CocktailCard } from "../../components/CocktailCard/CocktailCard";


const CocktailList = ({ cocktails, handleAddCocktailFav, handleRemoveCocktailFav, handleDeleteCocktail, profile }) => {
    return (
        <>
            <h1 className="mt-8 text-center text-3xl font-bold p-4">Cocktail List</h1>
            <div className="flex flex-wrap mx-5">
                {cocktails.map((cocktail, idx) => (

                    <div className="p-4 sm:w-1/2 md:w-96 lg:w-1/3 xl:w-1/4 2xl:w-1/5" key={idx}>
                        <div className="h-96 border-2 border-gray-200 border-opacity-600 rounded-lg overflow-hidden">
                            <CocktailCard profile={profile} cocktail={cocktail}
                                handleRemoveCocktailFav={handleRemoveCocktailFav}
                                handleAddCocktailFav={handleAddCocktailFav}
                                handleDeleteCocktail={handleDeleteCocktail}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CocktailList;