import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateNote from './create/CreateNote';
import "./Notes.css"
const Notes = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCreateNoteModalOpen = () => {
    setOpen(true);
  }

  const handleCreateNoteModalClose = () => {
    setOpen(false);
  }

  return (
    <div className='notes-body'>
      <div className='create-note-btn'>
        <Button variant="contained" onClick={handleCreateNoteModalOpen}>Create</Button>
      </div>
      <div>
        <CreateNote open={open} handleClose={() => handleCreateNoteModalClose()} />
      </div>
      {/* <div className='create-note'>
        
      </div> */}
    </div>
  )
}

export default Notes;