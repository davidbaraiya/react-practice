import React, { useState } from 'react'
import Nav from './Nav'
import ProCard from './ProCard'
import api from './api/api'

const MenuCat = () => {

  const [filterCat, setFilterCat] = useState(api)


  const getCategory = (category) => {
    const filterOutCat = api.filter((item) => item.category === category );
     setFilterCat(filterOutCat)

     if(category === "all"){
      setFilterCat(api)
     }
 }

  return (
    <div className='container mt-5'>
        <Nav getCategory={getCategory} api={api} setFilterCat={setFilterCat} />
        <div  className='d-flex gap-4 flex-wrap'>
        {
          filterCat.map((curEle) => (
          <ProCard data={curEle} key={curEle.id}/>
          ))
        }
        </div>
    </div>
  )
}

export default MenuCat;