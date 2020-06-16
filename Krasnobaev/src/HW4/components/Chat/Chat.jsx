import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import MessageItem from '../MessageItem';
import styles from './index.css';


const listStyles = {
  width: '90vw',
  height: '75vh',
  overflowY: 'scroll',
  backgroundImage: 'linear-gradient(0deg, rgba(248, 248, 255, 0.3) 60%, rgba(255, 250, 250, 0.3) 100%), url(https://rusability.ru/wp-content/uploads/2019/02/v-telegram-poyavilis-novye-vozmozhnosti-dlya-raboty-s-fonami-chatov.jpg)',
  backgroundSize: 'contain, contain',
  margin: '0 auto'
};

const Chat = ({ messages }) => {
  return (
    <Container maxWidth="md" component="ul" className={styles.list} style={listStyles} id="chat">
      {messages.map(({ text, author }, index) => (
        <MessageItem key={index} text={text} author={author} />
      ))}
    </Container>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default Chat;