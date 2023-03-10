import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [textArea, setTextArea] = useState(false)

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
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expandArea (){
    setTextArea(true);
  }

  return (
    <div>
      <form className="create-note">
      {
        textArea ?  <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      /> : null
      }
       
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={expandArea}
          rows={textArea ? 3:1}
        />
        <Zoom in={textArea}>
          <Fab onClick={submitNote}>

            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
