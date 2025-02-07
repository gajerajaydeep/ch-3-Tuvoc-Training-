import React, { useEffect, useState } from 'react'

export default function Task_b() {

    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((responce) => responce.json())
            .then((data) => setApidata(data))
            .catch((error) => console.log(error)
            )

    }, [])

    return (
        <>
            <h2>Fetch User Data using JSONPlaceholder API</h2>
            <ul>
                {apiData.map((value, index) => (
                    <li key={index}>
                         UserId = {value.id} <br />
                        Name : {value.name} <br />
                        email : {value.email} <br />
                        Address : {value.address.street}
                    </li>
                ))}
            </ul>
        </>


    )
}
