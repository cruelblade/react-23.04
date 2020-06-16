import { createReducer } from 'typesafe-actions';
import { IChats } from './../../interfaces';
import { setChats, getChats, addChat, addMessage, deleteChat, deleteMessage } from './../actions/chatsActions';
import { Action, AddChatPayload, AddMessagePayload, DeleteChatPayload, DeleteMessagePayload } from './reducerTypes';

const initialState = {};

export default createReducer<IChats>(initialState, {
  [setChats.toString()]: (state, action: Action<IChats>) => {
    return action.payload;
  },
  [getChats.toString()]: (state) => {
    return { ...state };
  },
  [addChat.toString()]: (state, action: Action<AddChatPayload>) => {
    const { chatName, chatId } = action.payload;

    return {
      ...state,
      [chatId]: {
        title: chatName,
        messages: [],
      },
    };
  },
  [addMessage.toString()]: (state, action: Action<AddMessagePayload>) => {
    const { message, chatId } = action.payload;

    return {
      ...state,
      [chatId]: {
        ...state[chatId],
        messages: [...state[chatId].messages, message],
      },
    };
  },
  [deleteChat.toString()]: (state, action: Action<DeleteChatPayload>) => {
    const { chatId } = action.payload;
    const copy = JSON.parse(JSON.stringify(state));
    delete copy[chatId];

    return {
      ...copy,
    };
  },
  [deleteMessage.toString()]: (state, action: Action<DeleteMessagePayload>) => {
    const { messageId, chatId } = action.payload;
    const filteredMessages = state[chatId].messages.filter((message) => message.id !== messageId);

    return {
      ...state,
      [chatId]: {
        ...state[chatId],
        messages: [...filteredMessages],
      },
    };
  },
});
