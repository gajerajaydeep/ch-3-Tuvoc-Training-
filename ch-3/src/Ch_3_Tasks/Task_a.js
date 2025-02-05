import React, { useState } from 'react';
import './Toggal.css';

export default function Task_a() {



    const [isBtn, setIsBtn] = useState(false)

    const handleToggalBtn = () => {
        setIsBtn(!isBtn)
       
    }



return (
    <>
       <div className="toggal-switch"  style={{backgroundColor : isBtn ? 'white' : 'black'}}>
        <div className={`switch ${isBtn ? 'on' : 'off' }`}>
            <button onClick={handleToggalBtn} className='toggal-btn'>{isBtn ? 'on' : 'off' }</button>
        </div>
       </div>
    </>
)

}