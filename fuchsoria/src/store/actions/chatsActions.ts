import { createAction } from 'typesafe-actions';
import { createAction as createFetchAction } from 'redux-api-middleware';
import { IChats, IMessage } from './../../interfaces';

export const setChats = createAction('SET_CHATS', (chats: IChats) => chats)();
export const getChats = createAction('GET_CHATS')();
export const addChat = createAction('ADD_CHAT', (chatName: string, chatId: string) => ({ chatName, chatId }))();
export const addMessage = createAction('ADD_MESSAGE', (message: IMessage, chatId: string) => {
  return { message, chatId };
})();
export const deleteChat = createAction('DELETE_CHAT', (chatId: string) => ({ chatId }))();
export const deleteMessage = createAction('DELETE_MESSAGE', (messageId: string, chatId: string) => ({
  messageId,
  chatId,
}))();

export const CHATS_REQUEST = '@@chats/CHATS_REQUEST';
export const CHATS_SUCCESS = '@@chats/CHATS_SUCCESS';
export const CHATS_FAILURE = '@@chats/CHATS_FAILURE';

export const fetchChats = () =>
  createFetchAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    types: [CHATS_REQUEST, CHATS_SUCCESS, CHATS_FAILURE],
  });
