import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import Iconbutton from '@material-ui/core/IconButton';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

function Header() {
    return (
        <div className="header">
    
            <Iconbutton >
            <PersonIcon fontSize= "large" className="header-icon"/>
            </Iconbutton>
            <img className="header-logo"
            src="https://www.citypng.com/public/uploads/preview/-11595270396ei6vchptvb.png"
            alt="Headerlogo"></img>
            <Iconbutton>
                <ModeCommentIcon fontSize="large" className="header-icon"></ModeCommentIcon>
            </Iconbutton>
           
        </div>  
        
    )
}

export default Header
