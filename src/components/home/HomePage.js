import * as React from 'react';
import "./HomePage.css";

import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import SnackbarNotify from '../notification-snackbar/SnackbarNotify';
import HomeLogo from "../../assets/images/home_image.svg";
import SyncLogo from "../../assets/images/sync_image.svg";
import FeatureLogo from "../../assets/images/feature_image.svg";
import { Link } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const HomePage = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    window.pathglobalvar = window.location.pathname;
  })

  return (
    <div className='home-body'>
      {/* 
      Snackbar testing
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <SnackbarNotify open={open} type={"success"} close={()=>handleClose()}/> 
      */}
      <div className='parent'>
        <div className="child1">
          <h1 className='tagline-1'>Make your Notes </h1>

          {/* -- */}
          <div
            className='tagline-2'
            style={{
              '--color-1': '#8d98fc',
              '--color-2': '#3f4ed4',
              background: `
      linear-gradient(
        200deg,
        var(--color-1) 5%,
        var(--color-2) 80%
      )
    `,

              // Unrelated styles:
              color: 'white',
              textAlign: 'center',
              padding: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 50,
              marginBottom: 5
            }}
          >
            WONDERFUL
          </div>
          {/* -- */}
          {/* <h1 className='tagline-2'>WONDERFUL</h1> */}
          <p className='tagline-3'>A clean and simple interface to organize your favourite notes.</p>
          <p className='tagline-3'>Try it for free.</p>
          <p className='tagline-4'>Create you first Note by <Link style={{ color: 'white' }} to="/notes">clicking here</Link>.</p>
        </div>
        <div className="child2">
          <div>
            <img className="home-image" src={HomeLogo} alt="Home Logo" />
          </div>
        </div>
      </div>

      <div id="aim" className='second-parent'>
        <div className="second-child1">
          <h1 className='tagline-2'>Our Aim</h1>
          <p className='second-tagline-1'>is to make it quick and easy for you to access your favourite notes. </p>
          <p className='second-tagline-2'>Your notes sync between your devices so you can access them on the go.</p>
          <p className='second-tagline-3'>A clean and simple interface to organize your favourite notes.</p>
        </div>
        <div className="child2">
          <div>
            <img className="home-image" src={SyncLogo} alt="Home Logo" />
          </div>
        </div>
      </div>

      <div className='third-parent'>
        <div className="third-child1">
          <h1 className='tagline-2'>Feature</h1>
          <p className='third-tagline'>Organize your notes however you like. Our simple and easy interface gives you complete control over how you manage your favourite notes.</p>
          <p className='third-tagline'>Our powerful search feature will help you find saved notes in no time at all. No need to trawl through all of your notes.</p>
        </div>
        <div className="child2">
          <div>
            <img className="home-image" src={FeatureLogo} alt="Home Logo" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage;