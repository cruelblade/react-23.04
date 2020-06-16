import { v4 } from 'uuid';
import { addMessage } from "../actions/chatsActions"

export const botAnswer = store => next => action => {
    if(action.type == addMessage.toString()) {
        const { author, chatId } = action.payload;
        if(author != 'Bot') {
            setTimeout(() => {
                store.dispatch(
                    addMessage(
                        { author:'Bot', text: 'I am Bot!!!', chatId, id: v4()}
                    )
                )
            }, 1000);
        };
        if(author === 'Bot') {
            const chat_class = 'chat-list-item' + chatId;
            const el = document.getElementById(chat_class);
            el.style.backgroundColor="#ccc";
            setTimeout(() => {
                el.style.backgroundColor="#fff";
            },500);
        }
    }
    return next(action);
}