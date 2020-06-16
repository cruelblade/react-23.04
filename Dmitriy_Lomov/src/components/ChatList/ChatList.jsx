import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAllChats, getChatUpdatedIds } from '../../store/chats/selectors';
import PropTypes from 'prop-types';

import styles from './index.css';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const muiStyles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  logo: {
    marginRight: 'auto',
    marginLeft: theme.spacing(1),
  },

  paper: {
    color: theme.palette.text.primary,
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  itemRoot: {
    position: 'relative',
    whiteSpace: 'pre-line',
  },

  link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.appBar,
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(3, 2),
  },

  toolbarClose: {
    justifyContent: 'flex-start',
  },
});

class ChatList extends PureComponent {
  render() {
    const { chats, classes, chatUpdatedIds } = this.props;
    return (
      <Drawer
        variant="permanent"
        className={cx(classes.drawer, classes.drawerOpen)}
        classes={{
          paper: cx(classes.paper, classes.drawerOpen),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="body1">Список чатов</Typography>
        </div>
        <Link to="/" key="home-page">
          <ListItem
            classes={{
              root: classes.itemRoot,
            }}
            button
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <List disablePadding>
          {chats.map(({ id, title, to }) => (
            <Link to={to} key={id}>
              <ListItem
                className={cx({ [styles.highlighter]: chatUpdatedIds.includes(id) })}
                classes={{
                  root: classes.itemRoot,
                }}
                button
              >
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    );
  }
}

ChatList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  chats: getAllChats(store),
  chatUpdatedIds: getChatUpdatedIds(store),
});

export default compose(connect(mapStateToProps), withStyles(muiStyles))(ChatList);
