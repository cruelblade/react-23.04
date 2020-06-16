import update from "react-addons-update";
import { handleActions } from "redux-actions";
import {
  SEND_MESSAGE,
  SUCCESS_MESSAGES_LOADING,
} from "../actions/messageActions";
import { ADD_CHAT } from "../actions/chatActions";

const initialState = {
  chats: {
    1: { title: "Chat1", messageList: [1, 2] },
    2: { title: "Chat2", messageList: [] },
    3: { title: "Chat3", messageList: [] },
    4: { title: "Chat4", messageList: [] },
  },
};

const chatReducers = handleActions(
  {
    [ADD_CHAT]: (state, action) => {
      const chatId = Object.keys(state.chats).length + 1;
      return update(state, {
        chats: {
          $merge: { [chatId]: { title: action.title, messageList: [] } },
        },
      });
    },
    [SEND_MESSAGE]: (state, action) => {
      return update(state, {
        chats: {
          $merge: {
            [action.chatId]: {
              title: state.chats[action.chatId].title,
              messageList: [
                ...state.chats[action.chatId].messageList,
                action.messageId,
              ],
            },
          },
        },
      });
    },
    [SUCCESS_MESSAGES_LOADING]: (state, action) => {
      const chats = { ...state.chats };
      action.payload.forEach((msg) => {
        const { id, chatId } = msg;
        chats[chatId].messageList.push(id);
      });
      return update(state, {
        chats: { $set: chats },
        isLoading: { $set: false },
      });
    },
  },
  initialState
);

export default chatReducers;
