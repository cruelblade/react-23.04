import React,{Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, List, ListItem, Typography } from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";

const listStyles = {
    border: '1px solid #123',
    borderRadius: 7,
    minHeight:100,
};

const muiStyles = theme => {
    console.log(theme);
    return {
        message: {
            maxWidth: '75%',
            border: 0,
            borderRadius: 12,
            boxShadow: theme.shadows[5],
            color: 'white',
            padding: theme.spacing(1, 2),
            backgroundColor: theme.palette.info.main,
        },
        left: {
            justifyContent: 'flex-start',
        },
        right: {
            justifyContent: 'flex-end',
        },
        item: {},
    };
};

class Messages extends Component {
    render() {
        const {messages,classes} = this.props;
        messages.map(({author, text})=>
            console.log(`${author}:${text}`)
        )
        return (
            //Note: через style={{border: '1px solid #123', borderRadius: 7}} можно задать стиль напрямую
            // и можно вынести наверх см. переменную listStyles
            <Container maxWidth="sm" style={listStyles}>
                <List>
                    {messages.map(({text,author},index) =>(
                  //Note в className можно указать логику, но лучше использовать classnames
                  //TODO: не работает classnames
                  <ListItem color="primary" key={index} className={cx(classes.item, {
                      [classes.left]: author !== 'Bot',
                      [classes.right]: author === 'Bot',
                  })}
                  >
                      <Typography
                          component="p"
                          variant="body1"
                          color="textPrimary"
                          className={classes.message}
                      >
                          {text}
                          <Typography variant="caption" display="block">
                              {author}
                          </Typography>
                      </Typography>
                  </ListItem>
              ))}
                </List>
            </Container>
        );
    }
}

Messages.propTypes ={
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            author: PropTypes.string,
        })
    ).isRequired,
}

export default withStyles(muiStyles)(Messages);