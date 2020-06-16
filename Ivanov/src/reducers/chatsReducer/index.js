import { handleActions } from 'redux-actions';
import { setChats, addMessage } from '../../actions/chatsActions';

const initialStore = {
    chatsByIds: {},
    chatsIds: []
};

const reducer = handleActions({
    [setChats]: (state, action) => action.payload,
    [addMessage]: (state, { payload }) => ({
        ...state,
        chatsByIds: {
          ...state.chatsByIds,
          [payload.chatId]: {
            ...state.chatsByIds[payload.chatId],
            messages: [...state.chatsByIds[payload.chatId].messages, payload.id],
          },
        },
      }),
},initialStore);

export default reducer;