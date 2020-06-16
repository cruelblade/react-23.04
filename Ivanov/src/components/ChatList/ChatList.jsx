import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { getAllChats } from '../../selectors/chatSelectors'
import styles from './ChatList.css';

class ChatList extends Component {
    render() {
        const { chats } = this.props;
        return (   
            <Drawer 
                className={styles.drawer} 
                component="nav"
                variant="permanent"
                classes={{ paper: styles.drawerpaper}}
            >
                <Toolbar />
                <List>
                    { chats.map(({id, title}) => (
                        <Link to={"/chats/"+id} key={title} className={styles.chatlink}>
                            <ListItem id={"chat-list-item"+id} button>
                                <ListItemText primary={title} className={styles.chatname}/>
                            </ListItem>
                        </Link>
                    )) }
                </List>
            </Drawer>
        )
    }
}

ChatList.propTypes = {
    chats: PropTypes.array.isRequired,
}

const mapStateToProps = store => ({
    chats: getAllChats(store),
});

export default connect(mapStateToProps)(ChatList);