import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import cx from 'classnames';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const muiStyles = theme => ({
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
});

class Header extends PureComponent {
  render() {
    const { profile, classes } = this.props;

    return (
      <AppBar position="absolute" className={cx(classes.appBar, classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Эмулятор чата
          </Typography>
          <Typography
            component="p"
            variant="body2"
            color="textSecondary"
            noWrap
            className={classes.title}
          >
            Текущий профиль: {profile.name} {profile.lastName}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = store => ({
  profile: store.profile,
});

export default compose(connect(mapStateToProps), withStyles(muiStyles))(Header);
