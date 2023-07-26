import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { Fab } from '@mui/material';
function CreateArea(props) {
  const [note, setNote] = useState({
    img: "",
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      img: "",
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }

  return (
    <>

    <form className="create-note">

    <div> 
          {isExpanded ? <input 
          onChange={handleChange} 
          name="img" 
          type="file"  
          value={note.img} /> : null  }
    </div>

    <div>
        {isExpanded ? <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        /> : null}
    </div>

    <div>
        <textarea
          onChange={handleChange}
          name="content"
          onClick ={expand}
          placeholder="Take a note..."
          rows={isExpanded? "3" : "1"}
          value={note.content}
        />
        <Zoom in ={isExpanded? true : false}>
        <Fab onClick={submitNote}><AddIcon /> </Fab>
        </Zoom>
      
    </div>
    </form>

    </>
  );
}

export default CreateArea;
