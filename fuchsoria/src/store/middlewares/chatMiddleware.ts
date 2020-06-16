import { MiddlewareAPI } from 'redux';
import { push } from 'connected-react-router';
import { addChat } from '../actions/chatsActions';
import { Action, AddChatPayload } from './../reducers/reducerTypes';

export const autoRedirect = (store: MiddlewareAPI) => (next: Function) => (action: Action<AddChatPayload>) => {
  if (action.type === addChat.toString()) {
    store.dispatch(push(`/chats/${action.payload.chatId}`));
  }

  next(action);
};
