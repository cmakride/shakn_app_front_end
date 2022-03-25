const CocktailList = (props) => {
    console.log(props.cocktails)
    return ( 
        <>
        <h1>Cocktail List</h1>
        <div>
            {props.cocktails.map(cocktail => (
                <div key={cocktail._id}>
                    <p>{cocktail.name}</p>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default CocktailList;