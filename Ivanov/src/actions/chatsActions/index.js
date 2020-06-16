import { createAction } from 'redux-actions';
import { v4 } from 'uuid';

export const setChats = createAction('chats/SET_CHATS', data => {
    return data.reduce((all, item) => {
        all.chatsByIds[item.id] = item;
        all.chatsIds.push(item.id);
        return all;
    },{
        chatsByIds: {},
        chatsIds: []
    });
});
export const addMessage = createAction('chats/ADD_MESSAGE',
 data => {
    return { ...data, id: v4() };
});
