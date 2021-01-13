import React from 'react';
import "./Header.css";
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import IconButton from "@material-ui/core/IconButton";

function Header() {
    //BEM naming convention
    return (
        <nav className="header">
            <div className="header__left">
                <IconButton aria-label="Apps">
                    <AppsIcon
                        className="header__leftIcon" />
                </IconButton>

                <h3 className="header__leftTitle">Sticky Notes</h3>
            </div>
            <div className="header__right">
                <SettingsIcon className="header__rightIcon" />
                <HelpIcon className="header__rightIcon" />
                <Avatar className="header__rightAvatar">MK</Avatar>
            </div>

        </nav>
    )
}

export default Header;
