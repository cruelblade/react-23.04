export const getChatsByIds = store => store.chats.chatsByIds;
export const getChatsIds = store => store.chats.chatsIds;

export const getAllChats = store => store.chats.chatsIds.map(key => store.chats.chatsByIds[key]);

export const getMessagesById = store => store.messages.messagesByIds;

export const getChatsMessages = (store, ownProps) => {
    const { chatId } = ownProps.match.params;
    const chatsByIds = getChatsByIds(store);
    const chatsIds = getChatsIds(store);
    const messagesByIds = getMessagesById(store);
    
    if(chatId in chatsByIds) {
        return chatsByIds[chatId].messages.map(id => messagesByIds[id])
    }
    return [];
};