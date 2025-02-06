import React, { useEffect, useRef, useState } from 'react'

export default function Task_e() {

    const userName = useRef(null);
    const email = useRef(null);

    const [name, setName] = useState("")

    const handleFormSubmit = (e) => {
        return (

            e.preventDefault()
        )
    }
    const handleFormName = (e) => {
        return (
            setName(e.target.value)
        )
    }
    useEffect(
        ()=> (userName.current.focus())
    )

return (
        <>
            <h1>Auto Focus when Webpage is refresh using - useRef hoook</h1>
            <form onSubmit={handleFormSubmit} >
                <input type="text" ref={userName} onChange={handleFormName} placeholder='Enter Name' />
                <br />
                <br />
                <input type="text"   placeholder='Enter Email' />
                <br />
                <br />
                <button >Submit</button>
            </form>
        </>
    )
}
