import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

export const sendMessagesRequest = createAction('messages/SEND_MESSAGES_REQUEST');
export const getMessagesSuccess = createAction('messages/GET_MESSAGES_SUCCESS');
export const getMessagesReject = createAction('messages/GET_MESSAGES_REJECT');
export const addNewMessage = createAction('messages/ADD_MESSAGE');

export const fetchMessagesData = () => dispatch => {
  dispatch(sendMessagesRequest());
  fetch('/api/messages.json')
    .then(res => {
      return res.json();
    })
    .then(res => {
      const data = res.reduce(
        (all, item) => {
          all.messagesByIds[item.id] = item;
          all.messagesIds.push(item.id);

          return all;
        },
        {
          messagesByIds: {},
          messagesIds: [],
        },
      );
      dispatch(getMessagesSuccess(data));
      return true;
    })
    .catch(err => {
      dispatch(getMessagesReject(err));
      return false;
    });
};

export const addMessage = data => dispatch => {
  const { author, chatId } = data;
  if (author !== 'Bot') {
    setTimeout(() => {
      dispatch(
        addNewMessage({
          author: 'Bot',
          text: 'Отстань, человек, я просто робот!!!',
          chatId,
          id: uuidv4(),
        }),
      );
    }, 1000);
  }
  dispatch(addNewMessage({ ...data, id: uuidv4() }));
};
