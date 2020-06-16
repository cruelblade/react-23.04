import { createAction } from 'redux-actions';

export const sendChatsRequest = createAction('chat/SEND_CHATS_REQUEST');
export const getChatsSuccess = createAction('chats/GET_CHATS_SUCCESS');
export const getChatsReject = createAction('chats/GET_CHATS_REJECT');
export const setUpdateChatsIds = createAction('chat/SET_UPDATED_CHATS_IDS');
export const deleteUpdatedId = createAction('chat/DELETE_UPDATED_ID');

export const fetchChatsData = () => dispatch => {
  dispatch(sendChatsRequest());
  fetch('/api/chats.json')
    .then(res => {
      return res.json();
    })
    .then(res => {
      const data = res.reduce(
        (all, item) => {
          all.chatsByIds[item.id] = item;
          all.chatsIds.push(item.id);

          return all;
        },
        {
          chatsByIds: {},
          chatsIds: [],
        },
      );
      dispatch(getChatsSuccess(data));
      return true;
    })
    .catch(err => {
      dispatch(getChatsReject(err));
      return false;
    });
};
