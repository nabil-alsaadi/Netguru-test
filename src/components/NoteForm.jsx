import React, { useEffect, useState } from 'react'

export const NoteForm = (props) => {
    const { note = { title: '', text: '' },onSubmit,onChange,onCancel } = props
    console.log('note',note)
    // const [title, setTitle] = useState(note?.title);
    // const [text, setText] = useState(note?.text);
    // useEffect(()=> {
    //     setTitle(note.title)
    //     setText(note.text)
    // },[note])
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        const title = note.title
        const text = note.text
        onSubmit({ ...note, title, text }); // Call onSubmit with the updated note
    };

    return <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Title:</label>
            <input
                className="form-control"
                data-testid="input-title"
                name="title"
                value={note.title}
                onChange={(e) => onChange({ ...note, title: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label>Note:</label>
            <textarea
                className="form-control"
                data-testid="input-text"
                name="text"
                value={note.text}
                onChange={(e) => onChange({ ...note, text: e.target.value })}
            />
        </div>
        <div className="form-group">
            <input
                type="button"
                data-testid="cancel-note"
                className="btn btn-default pull-right"
                value="Cancel"
                onClick={onCancel}
            />
            <input
                type="submit"
                data-testid="save-note"
                className="btn btn-default pull-right"
                value="Save"
            />
        </div>
    </form>
}
