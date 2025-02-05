import React, { createContext, useContext } from 'react';
import Child_a from './Child_a';

const data = createContext();
const data1 = createContext();

export default function Parent() {

  const name = "jaydeep";
  const gender = "Male";
    return (
        <>
            <h1>Parent Compnents</h1>
            <data.Provider value={name}>
                <data1.Provider value={gender}>
                    <Child_a />
                </data1.Provider>
            </data.Provider>
        </>
    )
}

export {data,data1}
