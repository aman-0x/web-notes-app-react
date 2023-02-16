import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import './CreateNote.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 30,
  borderRadius: 1,
  p: 4,
};

const CreateNote = (props) => {

  // const [title, setTitle] = useState("");
  // const [body, setBitle] = useState("");
  React.useEffect(() => {
    console.log(props)
  })
  return (
    <>
      <Modal
        // style={{background: "silver"}}
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      // className="create-note-modal"
      >
        <Box sx={style}>
          <div>
            <div className='create-note-modal-header'>
              <div><Typography style={{ fontFamily: 'Poppins' }} id="modal-modal-title" variant="h6" component="h2">
                Create Note
              </Typography></div>
              <div className='cancel-btn'>
                <CancelIcon onClick={() => props.handleClose()}></CancelIcon>
              </div>
            </div>

            <div className='create-note-modal-body'>
              <div className='create-note-modal-title'>
                <TextField
                  style={{ paddingBottom: 10 }}
                  id="outlined-basic"
                  label="Note Title"
                  multiline
                  rows={1}
                  // value={title}
                  // onChange={setTitle({title})}
                  variant="outlined" />
              </div>
              <div className='create-note-modal-note'>
                <TextField
                  style={{ paddingBottom: 10 }}
                  id="outlined-basic"
                  label="Your Note"
                  multiline
                  rows={5}
                  variant="outlined" />
              </div>
            </div>

            <div className='create-note-modal-footer'>
              <Button variant="contained" >Create</Button>
            </div>

          </div>
        </Box>
      </Modal>
    </>
    // <div className='create-note-body'>
    //   <div className='create-note-text'>
    //     <TextField
    //       style={{ paddingBottom: 10 }}
    //       id="outlined-basic"
    //       label="Note Title"
    //       multiline
    //       rows={1}
    //       value={title}
    //       // onChange={setTitle({title})}
    //       variant="outlined" />
    //     <TextField
    //       style={{ paddingBottom: 10 }}
    //       id="outlined-basic"
    //       label="Your Note"
    //       multiline
    //       rows={5}
    //       variant="outlined" />
    //   </div>
    //   <div className='create-note-button'>
    //     <Button variant="contained" onClick={()=>handelCreateOpenModal()}>Create</Button>
    //   </div>
    // </div>
  )
}

export default CreateNote