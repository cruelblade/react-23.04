import { handleActions } from 'redux-actions';
import { addNewMessage, sendMessagesRequest, getMessagesSuccess } from './actions';

const initialState = {
  messagesByIds: {},
  messagesIds: [],
};

const messageReducer = handleActions(
  {
    [sendMessagesRequest]: state => ({ ...state, isFetching: true }),
    [getMessagesSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
    }),
    [addNewMessage]: (state, { payload }) => ({
      messagesByIds: { ...state.messagesByIds, [payload.id]: payload },
      messagesIds: [...state.messagesIds, payload.id],
    }),
  },
  initialState,
);

export default messageReducer;
