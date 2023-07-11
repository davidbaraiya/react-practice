import React, { useState } from 'react'
import Child from './Child'

function ParentChild() {

  const [color, setColor ] = useState('');

  const setColorFun = (color) => {
      setColor(color)
  }

  return (
    <>
   <div className='box' style={{
        width: '80px',
        height: '80px',
        padding: '10px',
        border: '1px solid #000',
        background: color,
    }}>
    child
    </div>

    <Child setColorFun={setColorFun}/>
    </>
  )
}

export default ParentChild