import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Message from '../Message';
import ChatList from '../ChatList';

const muiStyles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg">
        <Header cid={this.props.cid} />
        <ChatList />
        <div className={classes.paper}>
          <Message cid={this.props.cid} />
        </div>
      </Container>
    );
  }
}

Layout.defaultProps = {
  classes: {},
};

Layout.propTypes = {
  classes: PropTypes.shape(PropTypes.any),
};

export default withStyles(muiStyles)(Layout);