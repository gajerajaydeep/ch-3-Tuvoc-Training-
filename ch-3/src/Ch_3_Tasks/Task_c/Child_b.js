import React,{useContext} from 'react';
import {data,data1} from './Parent';


export default function Child_b() {

    const firstName = useContext(data);
    const gender = useContext(data1);
  return (
    <>
    
    <h2>Child B | My Name is : {firstName} and gender is {gender} </h2>
    <p>App \ Parent \ Child-A \ Child-B</p>
    </>
  )
}
