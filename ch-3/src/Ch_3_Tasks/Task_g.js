// import { useState } from "react"
import React from 'react'
import useCounter from "./useCounter"

export default function Task_g() {

const [counter,increment,decrement] = useCounter()
   
  return (
    <>

   <h1>{counter}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}
