import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PushToggle from '../PushToggle';
import { Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styles from './index.css';

class Header extends Component {


    render() {
        return (
            <div className={styles.divhead}>
                <PushToggle />
            <Paper component="form" className={styles.lheaderContainer}>
                <Link to="/profile" key="profile-page">
                <IconButton className={styles.liconButton} aria-label="menu">
                    <AccountBoxIcon/>
                </IconButton>
                </Link>
                {this.props.profile.name}

            </Paper>

                </div>
        );
    }
}

const mapStateToProps = store => ({
    profile: store.profile,
  });
  
  export default connect(mapStateToProps)(Header);
