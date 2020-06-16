import { createSelector } from 'reselect';

export const getChatsByIds = store => store.chats.chatsByIds;
export const getChatsIds = store => store.chats.chatsIds;

export const getAllChats = createSelector(getChatsByIds, getChatsIds, (byIds, ids) =>
  ids.map(key => byIds[key]),
);

export const getMessagesById = store => store.messages.messagesByIds;

export const getChatMessages = (store, ownProps) => {
  const chatsByIds = getChatsByIds(store);
  const messagesByIds = getMessagesById(store);

  const { chatId } = ownProps.match.params;

  if (chatId in chatsByIds) {
    return chatsByIds[chatId].messages.map(id => messagesByIds[id]);
  }
  return [];
};

export const getChatUpdatedIds = store => store.chats.updatedChatsIds;