import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';


function Header() {
    return (
        <div className='header'>

            <IconButton>
            <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>

            <img className='header_logo' src='https://www.cybersmile.org/wp-content/uploads/tinder-flame-crop-101.png' alt='logo'></img>

            <IconButton>
            <ForumIcon fontSize='large' className='header_icon'></ForumIcon>
            </IconButton>



        </div>
    )
}

export default Header
