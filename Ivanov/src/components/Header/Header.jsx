import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Button,
    CssBaseline,
    Toolbar,
    Typography
} from '@material-ui/core'
import { getProfileFromStore } from '../../reducers/profileReducer';
import styles from './Header.css'

const Header = () => {
    const { name, lastname } = useSelector(getProfileFromStore);
    
    return (
        <AppBar>
            <Toolbar>
                <Typography
                    component="h2"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={styles.title}
                >
                    Hello, {name} {lastname||''}
                </Typography>
                <Button color="inherit">
                    <Link to='/profile'>Profile</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;