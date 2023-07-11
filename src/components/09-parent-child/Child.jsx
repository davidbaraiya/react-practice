import React, { useState } from 'react'

const Child = ({setColorFun}) => {
    const [color , setColor] = useState('');


    const handleColorChange  = (e) => {
        setColor(e.target.value);
        setColorFun(e.target.value)
    }


  return (
    <>
        <input type="color" value={color} onChange={handleColorChange} />
    </>
  )
}

export default Child;