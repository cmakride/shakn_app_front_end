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
            <div>
                <img class="object-scale-down h-48 w-96" src={currentCocktail.image} alt="Cocktail" />
                <h1>{currentCocktail.name}</h1>
                <Reviews reviews={currentCocktail.reviews}/>
                <h2>Method: {currentCocktail.method}</h2>
                <h2>Garnish: {currentCocktail.garnish}</h2>
                <h2>Served in: {currentCocktail.served_in}</h2>
                <h2>Ingredients: {currentCocktail.ingredients}</h2>
                <br />

                <div class="max-w-lg shadow-md">
                <form class="w-full p-4"
                    autoComplete='off'
                    ref={formElement}
                    onSubmit={handleCommentSubmit}
                >
                    <div class="mb-2">
                    <label for="comment" class="text-lg text-gray-600">Add a comment</label>
                    <textarea
                        name="comment" cols="40" rows="5" class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                        onChange={handleTextChange}>
                    </textarea>
                    </div>
                    <button class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded" type="submit" >Comment</button>
                </form>
                </div>
                
                {/* add comment list component here
        pass comment array to comment component as props
        within comment list map through props.commentarray
        */}

            <br></br>
                <Comments comments = {commentsArray}/>
            
        </div>
            </>
            :
            <h4>
                Cocktail is loading
            </h4>
    );
}

export default CocktailDetail;