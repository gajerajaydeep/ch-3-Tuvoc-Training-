import React, { useState } from 'react'

export default function Task_f() {

    const [number, setNumber] = useState([1, 2, 3, 4, 5])
    const [sum, setSum] = useState(0)

    let squreNumber = number.map((v) => (v * v));
    console.log(squreNumber);

    let sumNumber = squreNumber.reduce((acumulatore, current) => {
        return acumulatore + current;
    })
 

    const getSum = () => (
        setSum(sum + sumNumber)
     
        
    )
    const handleInputChange = (e) =>(
       setNumber([...number,e.target.value]) 
    )
    return (
        <>
        <label htmlFor="">Enter Value to Add in List : &nbsp; </label>
                <input type="text" onChange={handleInputChange}/>

            <ul>
                {
                    number.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>
            <h1>Squred Sum Of All Values is : {sum}</h1>
            <button onClick={getSum}>Sum</button>
        </>
    )
}


