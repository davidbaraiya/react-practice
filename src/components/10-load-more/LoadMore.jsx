import { Box, Button } from '@mui/material';
import React, { useState } from 'react'


const allItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 13',
    'Item 14',
    'Item 15',
    'Item 16',
    'Item 17',
    'Item 18',
    'Item 19',
    'Item 20',
    'Item 21',
    'Item 22',
    'Item 23',
    'Item 24',
    'Item 25',
    'Item 26',
    'Item 27',
    'Item 28',
    'Item 29',
    'Item 30'
  ];
  

const LoadMore = () => {
    const [displayItem , setDisplayItem] = useState(5)

    const handleLoadMore = () => {
        setDisplayItem(displayItem + 5)
    }
  return (
   <>
        {
            allItems?.slice(0 , displayItem).map((item, i) => (
                <Box key={i} p={5} border={1}>
                    {item}
                </Box>
            ))
        }
        <Button variant='contained' mt={2} onClick={handleLoadMore}>load more</Button>
   </>
  )
}

export default LoadMore