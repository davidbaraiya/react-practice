import React, { useState } from 'react';

const checkData = [
  {
    id:0,
    label: 'name1',
  },
  {
    id:1,
    label: 'name2',
  },
  {
    id:2,
    label: 'name3',
  },
  {
    id:3,
    label: 'name4',
  },
  {
    id:4,
    label: 'name5',
  },
]



const MultiSelect = () => {
    const [isChecked , setIsChecked] = useState(false);
    const [checkedData , setcheckedData] = useState([])
  
    const handleAllChecked = (e) => {
        let val = e.target.checked;
        setIsChecked(val)
    }

    const handleSubCheckBox = (e) => {
        let check = e.target.checked;

        const getCheckedData = checkData.filter((item) => item === check)
        setcheckedData([...checkData, ...getCheckedData ])
    }

    console.log(checkData);

  return (
    <>
    <div>
        <label htmlFor="main" className='px-3'> main </label>
        <input type='checkbox'  id='main' onChange={ handleAllChecked } />
    </div>
    <div className='my-4 sub-checks'>
      {
        checkData?.map(({id, label}) => {
          return (
            <div>
              <label htmlFor={id} className='px-3'> {label} </label>
              <input type='checkbox' id={id} value={label} checked={isChecked || false} onChange={handleSubCheckBox}/>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default MultiSelect;