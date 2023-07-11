import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const DIsButton = () => {
    const seconds = 5
    const [ btnDis , setBtnDis] = useState(true);
    const [count , setCount] = useState(seconds);

    
    useEffect(() => {
        let timeId;
        if(count > 0){
           timeId = setTimeout(() => {
                setCount(count - 1);
            },1000)
        }
        else{
            setBtnDis(false)
        }
    
        return(() => {
            clearImmediate(timeId);
        })
    },[count])


  return (
    <>
        <Typography> wait for {count} seconds</Typography>
        <Button variant='contained' disabled={btnDis} >{btnDis ? 'wait' : 'click'}</Button>
    </>
  )
}

export default DIsButton;