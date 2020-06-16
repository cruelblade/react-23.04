import React from "react";
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import styles from './index.css';
import MessageItem from '../MessageItem';
class Message extends React.PureComponent {


  
  render() {
   // console.log(this.props.words);
  return (
    
    <Container maxWidth="sm" component="ul" display="flex" className={styles.list} style={{display: 'flex'}}>
    
      {this.props.words.map(({ id, text, author }, index) =>
        <MessageItem key={id} text={text} author={author} />
      )}
     
    </Container>
  );

  }
}
Message.propTypes = {
  id: PropTypes.number,
  message: PropTypes.string,
  author: PropTypes.string,
};
export default Message;
