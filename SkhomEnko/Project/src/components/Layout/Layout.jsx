import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Header from '../Header';
import ChatList from '../ChatList';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.root}>
        <ChatList ownProps="myprop" />
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
