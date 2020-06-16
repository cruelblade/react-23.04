import React, { Component } from 'react';
import {
    Avatar,
    Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Profile.css';

export class Profile extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    }
    
    render() {
        const { name } = this.props;
        return (
            <div className={styles.root}>
                <Avatar>N</Avatar>
                <Typography variant="h4" component="h2">{name}</Typography>
            </div>
        )
    }
}

export default Profile

