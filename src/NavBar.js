import React from 'react'
import './NavBar.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'


function NavBar() {
    return (
        <div className="navBar">
            <IconButton className="navBar-repeat">
                <ReplayIcon fontSize="large"/>
                
            </IconButton>
            <IconButton className="navBar-left">
                <CloseIcon fontSize="large"/>
                
            </IconButton>
            <IconButton className= "navBar-favorite">
                <GradeIcon fontSize= "large"/>
                
            </IconButton>
            <IconButton className="navBar-right">
                <FavoriteIcon fontSize="large" />
                
            </IconButton>
            <IconButton className="navBar-lightning">
                <FlashOnIcon fontSize= "large"/>
                
            </IconButton>

            
        </div>
    )
}

export default NavBar
