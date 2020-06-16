import { handleActions } from 'redux-actions';
import { addNewMessage } from '../../actions/chatsActions';

const initialReducer = {
  messagesByIds: {
    1: {
      id: 1,
      text: 'Hi! I`m the chosen one! From first chat.',
      author: 'Bot',
    },
    2: {
      id: 2,
      text: 'Hello there from chat 2',
      author: 'Bot',
    },
  },
  messagesIds: [1, 2],
};

const reducer = handleActions(
  {
    [addNewMessage]: (state, { payload }) => ({
      messagesByIds: { ...state.messagesByIds, [payload.id]: payload },
      messagesIds: [...state.messagesIds, payload.id],
    }),
  },
  initialReducer,
);

export default reducer;