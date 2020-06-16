import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { addNewChat } from '../../actions/chatsActions';
import { getAllChats } from '../../selectors/chatsSelectors';

dayjs.extend(calendar);

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
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
    top: 'inherit',
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
    color: 'DarkSlateGray',
  },

  blink: {
    backgroundColor: 'Lavender',
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

  footerList: {
    marginTop: 'auto',
    marginBottom: theme.spacing(5),
  },
}));

// eslint-disable-next-line no-shadow
const ChatList = ({ chats, addNewChat }) => {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    history.push('/profile'); // для примера
  };

  return (
    <Drawer
      variant="permanent"
      className={cx(classes.drawer, classes.drawerOpen)}
      classes={{
        paper: cx(classes.paper, classes.drawerOpen),
      }}
    >
      <List disablePadding>
        {chats.map(({ title, to, lastTimestamp }) => (
          <Link
            to={to}
            key={title}
            style={{ textDecoration: 'none' }}
            className="RippleVisible"
          >
            <ListItem
              classes={{
                root: cx(classes.itemRoot), // , lastTimestamp > (now-3000000) ? classes.blink : ""
              }}
              button
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText>
                {title}
                <br />
                <ListItemText disableTypography style={{ fontSize: 'small' }}>
                  {lastTimestamp
                    ? dayjs().calendar(dayjs(lastTimestamp), {
                        sameDay: '[Сегодня в] HH:mm',
                        lastDay: '[Вчера в] HH:mm',
                        sameElse: 'DD/MM/YYYY',
                      })
                    : ''}
                </ListItemText>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
        <ListItem
          classes={{
            root: cx(classes.itemRoot),
          }}
          button
          onClick={addNewChat}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>Добавить чат</ListItemText>
        </ListItem>
      </List>
      <List className={classes.footerList} disablePadding>
        {['Настройки', 'Помощь'].map((text, index) => (
          <ListItem
            classes={{
              root: classes.itemRoot,
            }}
            button
            key={text}
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
        <Link to="/about" key="about-page">
          <ListItem
            classes={{
              root: classes.itemRoot,
            }}
            button
          >
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText>
              <span style={{ color: 'black', textDecoration: 'none' }}>About</span>
            </ListItemText>
          </ListItem>
        </Link>
        <ListItem
          key="logout-btn"
          classes={{
            root: classes.itemRoot,
          }}
          button
          onClick={logout}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Выйти</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

ChatList.propTypes = {
  addNewChat: PropTypes.func.isRequired,
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      to: PropTypes.string,
      title: PropTypes.string,
      messages: PropTypes.arrayOf(PropTypes.number),
      lastTimestamp: PropTypes.number,
    }),
  ).isRequired,
};

const mapDispatchToProps = {
  addNewChat,
};

const mapStateToProps = store => ({
  chats: getAllChats(store),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(ChatList);
