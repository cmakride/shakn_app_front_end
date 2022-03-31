import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Comments from '../../components/Comments/Comments';
import Reviews from '../../components/Reviews/Reviews';


function CocktailDetail({ cocktails, handleAddCocktailFav, handleAddComment, profile }) {
    //!As cocktails are being updated by the adding of a comment, 
    //! cocktails details is being refreshed because cocktails is a prop
    
    const formElement = useRef()
    const location = useLocation()

    const cocktailId = location.state.cocktail._id

    const currentCocktail = cocktails.find(c => c._id === cocktailId)
    
    const commentsArray = currentCocktail?.comments
    //!Array of Comments for this cocktail
    
    const reviewsArray = currentCocktail?.comments
    //!Array of Reviews for this cocktail
    const [formData, setFormData] = useState({
        comment: ''
    })



    const handleTextChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    function handleCommentSubmit(evt) {
        evt.preventDefault()
        handleAddComment(formData, currentCocktail._id, profile._id)
    }


    
    // if(!currentCocktail)return <h1>Hello</h1>


    //! this ternary is saying if current cocktail exists this will be loaded, if does not exists it will go to a loading text and react will wait and check if it does load
    return (

        currentCocktail ?
            <>
                <img src={currentCocktail.image} alt="Cocktail" />
                <h1>{currentCocktail.name}</h1>
                <Reviews reviews={currentCocktail.reviews}/>
                <h2>Method: {currentCocktail.method}</h2>
                <h2>Garnish: {currentCocktail.garnish}</h2>
                <h2>Served in: {currentCocktail.served_in}</h2>
                <h2>Ingredients: {currentCocktail.ingredients}</h2>
                <br />
                <h2>Comments:</h2>

                <form
                    autoComplete='off'
                    ref={formElement}
                    onSubmit={handleCommentSubmit}
                >
                    <textarea
                        name="comment" cols="40" rows="5" className="shadow-md border-2 border-black"
                        onChange={handleTextChange}>
                    </textarea>
                    <br />

                    <button type="submit" className="w-30 p-1 rounded-xl border-2 border-black bg-blue-500 text-white">Submit</button>
                </form>
                
                {/* add comment list component here
        pass comment array to comment component as props
        within comment list map through props.commentarray
        */}
                <Comments comments = {commentsArray}/>
            </>
            :
            <h4>
                Cocktail is loading
            </h4>

    );
}

export default CocktailDetail;