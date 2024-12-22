import React, { useEffect, useState } from 'react'

import { NotesList } from './NotesList'
import { NoteForm } from './NoteForm'

export const App = (props) => {
    const { service } = props

    const [notes, setNotes] = useState([])
    const [selected, setSelected] = useState(null)

    // (!) Get notes from service
    useEffect(() => {
        fetchNotes()
        
    },[service])
    async function fetchNotes() {
        const data = await service.getNotes();
        console.log(data)
        setNotes(data);
        setSelected(null);
    }
    // Select new empty note
    function newNote(){
        setSelected({ id: null, title: '', text: '' });
    }

    // Set note as selected
    function onSelect(note){
        setSelected(note)
    }

    // Save note to service
    async function onSubmit(note){
        const updated = await service.saveNote(note)
        fetchNotes()
    }

    // Unselect note
    function onCancel(){
        fetchNotes()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React notes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <NotesList notes={notes} onSelect={onSelect} selected={selected} />
                </div>
                <div className="col-md-8">
                    <NoteForm note={selected} onSubmit={onSubmit} onChange={onSelect} onCancel={onCancel} />
                    <div><button id="new-note" data-testid="new-note" onClick={newNote}>New Note</button></div>
                </div>
            </div>
        </div>
    )
}
