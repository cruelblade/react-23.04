import { setUpdateChatsIds, deleteUpdatedId } from '../chats/actions';
import { addNewMessage } from '../messages/actions';

const notification = store => next => action => {
  if (action.type === addNewMessage.toString()) {
    const { author, chatId } = action.payload;
    if (author === 'Bot') {
      store.dispatch(setUpdateChatsIds(+chatId));

      setTimeout(() => {
        store.dispatch(deleteUpdatedId(+chatId));
      }, 2000);
    }
  }
  return next(action);
};

export default notification;
