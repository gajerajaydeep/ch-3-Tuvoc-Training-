// NoteApp.js
import React, { useEffect, useState } from 'react';
import './NoteApp.css';
import CreateNotes from './CreateNotes';
import { v4 as uuid } from 'uuid';
import Note from './Note';

export default function NoteApp() {
    const [inputText, setInputText] = useState("");
    const [notes, setNotes] = useState([]);
    const [editToggle, setEditToggle] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    //edit handler
    const editHandler = (id, text) => {
        setEditToggle(id);
        setInputText(text);
    };
    //save handler
    const saveHandler = () => {
        // console.log(inputText);


        if (editToggle) {
            setNotes(
                notes.map((note) =>
                    note.id === editToggle ? { ...note, text: inputText } : note
                )
            );
            let saveNote = notes.map((v) => (v))
            console.log(saveNote);

        } else {
            setNotes((prevNotes) => [
                ...prevNotes,
                {
                    id: uuid(),
                    text: inputText,
                },
            ]);
        }

        setInputText("");
        setEditToggle(null);
    };
    //delete handler
    const deleteHandler = (id) => {
        const newNotes = notes.filter((n) => n.id !== id);
        setNotes(newNotes);
    };

    // Load notes from localStorage on mount

    let data
    useEffect(() => {
        data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
            setNotes(data);
        }
    }, []);

    // Save notes to localStorage when "notes" state changes
    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    }, [notes]);


    //search functionality
    // Function to handle search input change
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter notes based on search term
    const filteredNotes = notes.filter((note) =>
        note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
   



    return (
        <div className="notes">
            <h1 >Note Taking App</h1>

            <div className="search-bar">
                <label htmlFor="">Search Your Note Here!</label> &nbsp;&nbsp;
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
               
            </div>
            {filteredNotes.map((note) => (
                editToggle === note.id ? (
                    <CreateNotes
                        key={note.id}
                        inputText={inputText}
                        setInputText={setInputText}
                        saveHandler={saveHandler}
                        searchHandler={handleSearch}
                        filteredNotes={filteredNotes}
                    />
                ) : (
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    />
                )
            ))}
            {editToggle === null && (
                <CreateNotes
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                />
            )}
        </div>
    );
}
