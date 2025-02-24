import React, { useState, useMemo, useCallback } from 'react';

export default function Task_f() {
  const [number, setNumber] = useState([1, 2, 3, 4, 5]);
  const [sum, setSum] = useState(0);

  
  const sumNumber = useMemo(() => {
    const squaredNumbers = number.map((v) => v * v);
    return squaredNumbers.reduce((accumulator, current) => accumulator + current, 0);
  }, [number]); 

 
  const getSum = useCallback(() => {
    setSum(sumNumber); 
  }, [sumNumber]); 


  const handleInputChange = useCallback((e) => {
    const inputValue = parseInt(e.target.value, 10);

    if (!isNaN(inputValue)) {
      setNumber((prevNumbers) => [...prevNumbers, inputValue]);
    }
  }, []); 

  return (
    <>
      <label htmlFor="">Enter Value to Add in List : &nbsp; </label>
      <input type="text" onChange={handleInputChange} />

      <ul>
        {number.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
      <h1>Squared Sum Of All Values is : {sum}</h1>
      <button onClick={getSum}>Sum</button>
    </>
  );
}