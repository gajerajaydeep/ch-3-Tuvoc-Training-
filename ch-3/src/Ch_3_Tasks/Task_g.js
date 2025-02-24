// import { useState } from "react"
import React, { useState } from 'react'
import useCounter from "./useCounter"
import useLocalStorage from './useLocalStorage'
export default function Task_g() {

    const [name,handleInputChnage,handleSetData,handleGetData,handleRemoveData] = useLocalStorage('')
    
    return (
        <>
            <div>
                <h2> Design a custom hook useLocalStorage that can get, set, and remove items from local storage.
                </h2>

                <input type="text" value={name} onChange={handleInputChnage} /><br />
                <button onClick={handleSetData}>Set Data </button>
                <button onClick={handleGetData}>Get Data </button>
                <button onClick={handleRemoveData}>Remove Data </button>
            </div>

        </>
    )
}
