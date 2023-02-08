import { Button, TextField } from '@mui/material'
import React from 'react'
import './CreateNote.css'

const CreateNote = () => {
  return (
    <div className='create-note-body'>
      <div className='create-note-text'>
        <TextField
          style={{ paddingBottom: 10 }}
          id="outlined-basic"
          label="Note Title"
          multiline
          rows={1}
          variant="outlined" />
        <TextField
          style={{ paddingBottom: 10 }}
          id="outlined-basic"
          label="Your Note"
          multiline
          rows={5}
          variant="outlined" />
      </div>
      <div className='create-note-button'>
      <Button variant="contained">Create</Button>
      </div>
    </div>
  )
}

export default CreateNote