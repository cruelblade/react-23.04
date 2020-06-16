import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from "../Message";
import FormMessage from "../FormMessage";
import { getChatMessages } from '../../selectors/chatsSelectors';
import { addMessage } from '../../actions/chatsActions';
import styles from './index.css';


const MessageField = () => {
  const params = useParams();
  const messages = useSelector(store => getChatMessages(store, params));
  const dispatch = useDispatch();

  const addNewMessage = data => {
    const { chatId } = params;
    dispatch(addMessage({ ...data, chatId }));
  };

  return (
      <div className= {styles.MessageField}>
        <h2>чат </h2>
        <Message words={messages} />      
        <FormMessage addNewMessage={addNewMessage} />
        </div>
   );
  };
MessageField.defaultProps = {
  messages: [],
};
  
export default memo(MessageField);
//export default MessageField;