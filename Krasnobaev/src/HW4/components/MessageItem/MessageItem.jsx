import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => {
  return {
    item: {
      background: 'LightCyan',
      border: 0,
      borderRadius: '0 25px 25px 25px',
      boxShadow: theme.shadows[2],
      minHeight: 48,
      maxWidth: '30%',
      padding: '0 30px',
    },
    itemRight: {
      borderRadius: '25px 0 25px 25px',
    },
    left: {
      justifyContent: 'flex-start',
      alignItems: 'end',
      padding: 0
    },
    right: {
      justifyContent: 'flex-end',
      padding: 0 
    },
    hidden: {
      display: 'none'
    },
    inline: {
      display: 'inline',
      overflowWrap: 'anywhere'
    },
  };
});

const MessageItem = ({ author, text }) => {
  const classes = useStyles();
  return ( 
    <ListItem className={author == 'Bot' ? classes.left : classes.right}>
      <ListItemText 
        primary={author}
        className={`${classes.item} ${author == 'Bot' ? classes.item : classes.itemRight}`}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {text}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

MessageItem.defaultProps = {
    author: "Ivan K.",
  };

MessageItem.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default MessageItem;