import React, { useState } from 'react'

function ColorGenerator() {

const [color , setColor]=useState("#99FFCC")

function handlechange(e) {
    setColor(e.target.value)
}

function generaterandomcolor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
}

  return (
    <div className="h-4/5 w-3/4 bg-slate-200 rounded-xl flex flex-col justify-end " style={{ backgroundColor: color }} >



        <div className='flex justify-evenly pb-5'>
            
            <input type='color'
             value={color}
              className='rounded-xl border-none w-20 shadow-inner hover:shadow-lg px-5 py-5 '
              onChange={handlechange}/>
        <button className='rounded-lg
         bg-slate-200 shadow-inner hover:shadow-lg px-5 py-3 font-semibold'
         onClick={generaterandomcolor}
         >generate random color</button>
        </div>

    </div>
  )
}

export default ColorGenerator