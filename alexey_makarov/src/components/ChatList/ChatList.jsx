import React, {memo} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import cx from 'classnames';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, useHistory} from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
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
        width: 240,
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

    footerList: {
        marginTop: 'auto',
        marginBottom: theme.spacing(5),
    },
}));

const ChatList = props => {

    const classes = useStyles();
    const history = useHistory();

    return (
        <Drawer
            className={cx(classes.drawer, classes.drawerOpen)}
            classes={{
                paper: cx(classes.paper, classes.drawerOpen),
            }}
            variant="permanent">
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
                        <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
                <List disablePadding>
                    {props.chats.map(({title, to}) => (
                        <Link to={to} key={title}>
                            <ListItem
                                classes={{
                                    root: classes.itemRoot,
                                }}
                                button
                            >
                                <ListItemIcon>
                                    <MenuIcon/>
                                </ListItemIcon>
                                <ListItemText>{title}</ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <List className={classes.footerList} disablePadding>
                    <Link to="/about" key="about-page">
                        <ListItem
                            classes={{
                                root: classes.itemRoot,
                            }}
                            button
                        >
                            <ListItemIcon>
                                <InfoIcon/>
                            </ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItem>
                    </Link>

                </List>
        </Drawer>
    )

}
const mapStateToProps = (store, ownProps) => ({
    chats: store.chats,
})

export default compose(connect(mapStateToProps), memo)(ChatList);