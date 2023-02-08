import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NoteIcon from '@mui/icons-material/Note';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import { Link, NavLink } from 'react-router-dom';
import "./Navigation.css";

export default function Navigation(props) {
    const pathname = window.location.pathname;
    const [value, setValue] = React.useState(pathname);

    React.useEffect(() => {
        // Update the document title using the browser API
        console.log("here", pathname);
      });

    return (
        <div className="nav">
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction component={NavLink} value={"/"} to={"/"} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction component={Link} to={"/notes"} value={"/notes"} label="Notes" icon={<NoteIcon />} />
                    <BottomNavigationAction component={Link} to={"/about"} value={"/about"} label="About" icon={<FavoriteIcon />} />
                </BottomNavigation>
            </Box>
        </div>
    );
}