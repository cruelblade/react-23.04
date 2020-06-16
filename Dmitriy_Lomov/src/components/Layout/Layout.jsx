import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';

const muiStyles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(8),
  },
});

class Layout extends PureComponent {
  render() {
    const { children, classes } = this.props;

    return (
      <>
        <Header />
        <main className={classes.root}>
          <ChatList />
          {children}
        </main>
      </>
    );
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(muiStyles)(Layout);
