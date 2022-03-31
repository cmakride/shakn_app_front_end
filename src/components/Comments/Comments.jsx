import React, { useState, useEffect } from 'react';

const Comments = ({comments, user}) => {

  console.log(comments)
  console.log(user)


  return ( 
    <>
    {comments.length ?
    <>
    {comments.map((comment,idx)=>
  <div className= "w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1" key={idx}>
    <p>user: {user.name}</p>
    <p>{comment.comment}</p>
    

  </div>

    )}
    </>
    :
    <>
    <h3>Loading Comments</h3>
    </>
}
    </>
   );
}
 
export default Comments;