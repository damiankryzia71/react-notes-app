import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [expanded, setExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        if (note.title) {
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
            setExpanded(false);
        }
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {expanded ? <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                /> : null}
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={expanded ? 3 : 1}
                    onClick={() => {
                        setExpanded(true);
                    }}
                />
                <Zoom in={expanded}>
                    <button onClick={submitNote}>
                        <AddIcon />
                    </button>
                </Zoom>
            </form>
        </div>
    );
}
