import React from 'react'

export const NotesList = (props) => {
    const { notes = [], onSelect, selected } = props
    return <div className="list-group">
        {notes.map((note) => (
            selected && note.id === selected.id ? 
                <div data-testid="note-item"  className="list-group-item active">{note.title}</div>
            :
                <div data-testid="note-item" onClick={() => onSelect(note)} className="list-group-item">{note.title}</div>
        ))}
        
        
    </div>
}
