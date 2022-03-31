import { React, useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const Reviews = ({ reviews }) => {
  const [number, setNumber] = useState(0)

  
  
  return (

    <div style={{display:"flex"}}>
      {Array(5).fill().map((_, index) => 
        <div key={index}>

        {number >= index + 1 ? 
        
        <AiFillStar onClick={()=> setNumber(index +1)}/>
        
        :
        
        <AiOutlineStar 
        onClick={()=> setNumber(index +1)}/>
        
        }

        </div>
      )}
      
    </div>
  )
}



export default Reviews
