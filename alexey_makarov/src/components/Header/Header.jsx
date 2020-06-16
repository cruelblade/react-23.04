import React from 'react';
import {AppBar, Badge, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames'
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useSelector} from 'react-redux';
import {getProfileFromStore} from "../../reducer/profileReducer";

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - 240px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));


const Header = props => {
    // const profile = useSelector(store=>store.profile);
    const profile = useSelector(getProfileFromStore);
    console.log(profile);
    const classes = useStyles();
    return (
        <AppBar position="absolute" className={cx(classes.appBar, classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            className={cx(classes.menuButton, classes.menuButtonHidden)}>
                    <MenuIcon/>
                </IconButton>
                <Typography component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}>
                    Page
                </Typography>
                <Link to="/profile" key="profile-page">
                    <IconButton color="secondary">
                        <AccountBoxIcon/>
                    </IconButton>
                    </Link>
                    <IconButton color="inherit">
                        {/*Note: интересный момент с уведомлением (объект Badge)*/}
                        <Badge badgeContent={999} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
}

export default Header;