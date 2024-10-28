import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function Colorrating() {

   const  [rating , setRating]=useState(0)
   const [hoverRating, setHoverRating] = useState(0);


    const size=new Array(5).fill(0)
    function handlerating(i) {
    setRating(i+1)
     console.log(i+1);
        
    }

  return (
    <div className='grid grid-cols-5 gap-4  '>
{
    size.map((_,index)=>
    {return <FaStar key={index}
    className={`cursor-pointer ${index < (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-700'} text-4xl`}
 
    onClick={()=>{handlerating(index)}}
    onMouseEnter={() => setHoverRating(index + 1)}
    onMouseLeave={() => setHoverRating(0)}
    ></FaStar>}
    )
}
    </div>
  )
}

export default Colorrating