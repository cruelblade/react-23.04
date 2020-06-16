import { combineReducers } from 'redux';
import chatsReducer from './chats/reducers';
import profileReducer from './profile/reducers';
import messageReducer from './messages/reducers';

export default combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messageReducer,
});
