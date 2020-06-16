import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
//import EmailIcon from '@material-ui/icons/Email';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import { getAllChats, getChatUpdatedIds } from '../../selectors/chatsSelectors';
import pageLinks from './page-links';
import styles from './index.css';

class ChatList extends Component {

    render() {

        return (
            <Paper className={styles.chatListContainer}>
                <MenuList >
                <Link to="/" key="home-page">
                    <MenuItem>
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">HOME</Typography>
                    </MenuItem>
                    </Link>
                    {this.props.chats.map(({  id, title, to }) => (
                         <Link to={to} key={title}>
                          <MenuItem 
                          button>
                           <ListItemIcon>
                              <SendIcon fontSize="small" />
                          </ListItemIcon>          
                              <Typography variant="inherit">{title}</Typography>
                         </MenuItem>
                        </Link>
        ))}


                <Link to="/about" key="about-page" >
                    <MenuItem>
                        <ListItemIcon>
                            <InfoIcon  fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">About</Typography>
                    </MenuItem>
                    </Link>
                    <MenuItem key="logout-btn"
                              button
                              >
                        <ListItemIcon>
                            <ExitToAppIcon  fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                        Выйти
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Paper>
        );
    }
}

const mapStateToProps = store => ({
    chats: getAllChats(store),
    chatUpdatedIds: getChatUpdatedIds(store),
  });
  
  export default connect(mapStateToProps)(ChatList);