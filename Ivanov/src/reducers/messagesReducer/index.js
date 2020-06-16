import { handleActions } from "redux-actions";
import { addMessage } from "../../actions/chatsActions";

const initialStore = {
    messagesByIds: {
        1:{
            id: 1,
            text: 'Hi from first chat',
            author: 'Bot',
            chatId: 1
        },
        2:{
            id: 2,
            text: 'Hi from second chat',
            author: 'Bot',
            chatId: 2
        },
        3:{
            id: 3,
            text: 'Hi from third chat',
            author: 'Bot',
            chatId: 3
        },
    },
    messagesIds: [1,2,3]
};
const reducer = handleActions({
    [addMessage]: (state, { payload })=> ({
        messagesByIds: {...state.messagesByIds,[payload.id]: payload },
        messagesIds: [...state.messagesIds, payload.id]
    }),
}, initialStore);

export default reducer;