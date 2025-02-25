import React, { useState } from 'react';
import './NoteApp.css'

export default function CreateNotes({ inputText, setInputText, saveHandler, }) {




  return (<>
    {/* <h1 style={{ display: "flex", justifyContent: "center" }}>Notes</h1> */}

    {/* search logic */}
    <div className="search-bar">
      {/* <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleSearch}
      /> */}

    </div>
    {/* ------------ */}
    <div className='note-container'>
      <textarea
        cols={21}
        rows={5}
        placeholder='Enter Your Note.....'
        value={inputText}
        onChange={(e) => { setInputText(e.target.value) }}

      >
      </textarea>
      <div>
        <button className='note_save' onClick={saveHandler}>Save</button>

      </div>
    </div>
  </>
  )
}
