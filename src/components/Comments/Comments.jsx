import React, { useState, useEffect } from 'react';

const Comments = ({comments}) => {


  return ( 
    <>
    {comments.length ?
    <>
    {comments.map((comment,idx)=>
  <div key={idx}>
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