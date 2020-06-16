import { handleActions } from 'redux-actions';
import {
  getChatsSuccess,
  setUpdateChatsIds,
  deleteUpdatedId,
  sendChatsRequest,
} from './actions';
import { addNewMessage } from '../messages/actions';

const initialState = { isFetching: false, chatsByIds: {}, chatsIds: [], updatedChatsIds: [] };

const reducer = handleActions(
  {
    [sendChatsRequest]: state => ({ ...state, isFetching: true }),
    [getChatsSuccess]: (state, action) => ({ ...state, ...action.payload, isFetching: false }),
    [addNewMessage]: (state, { payload }) => ({
      ...state,
      chatsByIds: {
        ...state.chatsByIds,
        [payload.chatId]: {
          ...state.chatsByIds[payload.chatId],
          messages: [...state.chatsByIds[payload.chatId].messages, payload.id],
        },
      },
    }),
    [setUpdateChatsIds]: (state, { payload }) => ({
      ...state,
      updatedChatsIds: [...state.updatedChatsIds, payload],
    }),
    [deleteUpdatedId]: (state, { payload }) => ({
      ...state,
      updatedChatsIds: state.updatedChatsIds.filter(i => i !== payload),
    }),
  },
  initialState,
);

export default reducer;
