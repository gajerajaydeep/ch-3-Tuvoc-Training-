import React from 'react'

export default function Note({ id, text, editHandler, deleteHandler }) {
    return (
        <>
            <div className="save-note-container">

            <div className="note-body">
                {text}

            </div>
            <div className="note-footer">
                <button onClick={() => editHandler(id, text)} className='edit-btn'>Edit</button> &nbsp;
                <button onClick={() => deleteHandler(id)}  className='dlt-btn'>Delete</button>
            </div>
            </div>
           
        </>
    )
}
