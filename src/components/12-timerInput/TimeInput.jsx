import React, { useState } from "react";

const TimeInput = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
     const TimeId = setInterval(() => {
        setCount((prev) => prev > 0 ? (prev - 1) : prev);
      }, 1000);

      return(() => {
        clearInterval(TimeId)
      })
  };
  
  console.log(count);
  

  return (
    <>
      <input
        type="number"
        placeholder="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <h2>{count}</h2>
      <button onClick={handleCount}>submit</button>
    </>
  );
};

export default TimeInput;
