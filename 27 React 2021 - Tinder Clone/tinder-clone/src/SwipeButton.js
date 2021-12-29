import React from 'react'
import './SwipeButton.css'

import  IconButton  from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn';


function SwipeButton() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons_repeat'>
                <ReplayIcon style={{color:'yellow'}} fontSize='large'></ReplayIcon>
            </IconButton>

            <IconButton className='swipeButtons_left'>
                <CloseIcon style={{color:'red'}} fontSize='large'></CloseIcon>
            </IconButton>

            <IconButton className='swipeButtons_star'>
                <StarRateIcon style={{color:'skyBlue'}} fontSize='large'></StarRateIcon>
            </IconButton>

            <IconButton className='swipeButtons_right'>
                <FavoriteIcon style={{color:'green'}} fontSize='large'></FavoriteIcon>
            </IconButton>

            <IconButton className='swipeButtons_light'>
                <FlashOnIcon style={{color:'magenta'}} fontSize='large'></FlashOnIcon>
            </IconButton>

        </div>
    )
}

export default SwipeButton
