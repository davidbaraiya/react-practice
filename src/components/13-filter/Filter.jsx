import React, { useState } from 'react'


const dummyArray = [
    { id: 1, name: 'AProduct 1', price: 10.99 },
    { id: 2, name: 'YProduct 2', price: 19.99 },
    { id: 3, name: 'WProduct 3', price: 7.99 },
    { id: 4, name: 'Product 20', price: 14.99 },
    { id: 5, name: 'Product 5', price: 9.99 },
    { id: 6, name: 'EProduct 6', price: 12.99 },
    { id: 7, name: 'KProduct 7', price: 8.99 },
    { id: 8, name: 'AProduct 8', price: 6.99 },
    { id: 9, name: 'Product 9', price: 11.99 },
    { id: 10, name: 'CProduct 10', price: 15.99 }
  ];
  

  const Filter = () => {
    const [arr, setArr] = useState(dummyArray);
    const [sort, setSort] = useState('');
  
    const handleSortBy = (e) => {
      const selectedSort = e.target.value;
      setSort(selectedSort);
  
      let sortedArray = [...dummyArray];
  
      if (selectedSort === 'name') {
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
      } else if (selectedSort === 'pricePlus') {
        sortedArray.sort((a, b) => a.price - b.price);
      } else if (selectedSort === 'priceMinus') {
        sortedArray.sort((a, b) => b.price - a.price);
      }
      setArr(sortedArray);
    };
  
    return (
      <div>
        <label htmlFor="">Sort By</label>
        <select className="mb-3" onChange={handleSortBy}>
          <option value="name">Name</option>
          <option value="pricePlus">Price: Low to High</option>
          <option value="priceMinus">Price: High to Low</option>
        </select>
        {arr?.map(({ id, name, price }) => (
          <div key={id}>
            <h6>{name}</h6>
            <div>{price}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Filter;
  