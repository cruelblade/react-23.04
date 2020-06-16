import { handleActions } from 'redux-actions';
import { setChats, addNewChat, addNewMessage } from '../../actions/chatsActions';

const initialState = { chatsByIds: {}, chatsIds: [] };

const reducer = handleActions(
  {
    [setChats]: (state, action) => action.payload,
    [addNewChat]: state => {
      const id = Object.keys(state.chatsByIds).length + 1;
      return {
        ...state,
        chatsByIds: {
          ...state.chatsByIds,
          [id]: {
            id,
            to: `/chats/${id}`,
            title: `Чат ${id}`,
            messages: Array(0),
          },
        },
        chatsIds: [...state.chatsIds, id],
      };
    },
    [addNewMessage]: (state, { payload }) => ({
      ...state,
      chatsByIds: {
        ...state.chatsByIds,
        [payload.chatId]: {
          ...state.chatsByIds[payload.chatId],
          messages: [...state.chatsByIds[payload.chatId].messages, payload.id],
          lastTimestamp: payload.timestamp, // ~~(Math.random() * 10)
        },
      },
    }),
  },
  initialState,
);

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case setChats:
//       return action.payload
//     default:
//       return state
//   }
// }

export default reducer;
