import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
});

export default rootReducer;