import { MiddlewareAPI } from 'redux';
import { v4 as uuid } from 'uuid';
import { Action, AddMessagePayload } from './../reducers/reducerTypes';
import { addMessage } from '../actions/chatsActions';
import { setBlinking, removeBlinking } from '../actions/chatlistActions';

const robotTimeouts: { [key: string]: number } = {};

export const generateBotAnswer = (store: MiddlewareAPI, cachedChatId: string, author?: string) => {
  const message = {
    id: uuid(),
    author: 'Robot',
    authorAccess: 'bot',
    text: `Hi ${author}, i am your personal assistant`,
    date: new Date().getTime(),
  };

  store.dispatch(addMessage(message, cachedChatId));
  
  store.dispatch(setBlinking(cachedChatId));
  setTimeout(() => store.dispatch(removeBlinking(cachedChatId)), 5000);
};

export const botAnswer = (store: MiddlewareAPI) => (next: Function) => (action: Action<AddMessagePayload>) => {
  if (action.type === addMessage.toString()) {
    const { chatId, message } = action.payload;

    if (message.authorAccess === 'user' || message.authorAccess === 'self') {
      const { chats } = store.getState();
      const { messages } = chats[chatId];
      const cachedChatId = chatId;
      const lastMessage = messages[messages.length - 1];

      if (lastMessage?.author === message.author) {
        clearTimeout(robotTimeouts[chatId]);
      }

      robotTimeouts[cachedChatId] = window.setTimeout(
        () => generateBotAnswer(store, cachedChatId, message.author),
        3000
      );
    }
  }

  return next(action);
};
