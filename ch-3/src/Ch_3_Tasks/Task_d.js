import React, { useState, useReducer } from 'react'

export default function Task_d() {

    // const [counter, setCounter] = useState(0);
    const reducer = (state, action) => {
        // console.log(state, action);

        if (action.type === "Increment") {
            return state + 1

        }
        if (action.type === "Decrement") {
            return state - 1

        }
        if(action.type === "Reset"){
            return state = 0;
        }


    }
    const [counter, dispatch] = useReducer(reducer, 0);



    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(
                { type: "Increment" }
            )}>Increment</button>
            <button onClick={() => dispatch(
                { type: "Decrement" }
            )}>Decrement</button>
             <button onClick={() => dispatch(
                { type: "Reset" }
            )}>Reset</button>
        </>
    )
}
