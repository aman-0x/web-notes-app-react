import React from 'react';
import CreateNote from './create/CreateNote';
import "./Notes.css"
const Notes = () => {
  return (
    <div className='notes-body'>
      <div className='create-note'>
        <CreateNote />
      </div>
    </div>
  )
}

export default Notes;