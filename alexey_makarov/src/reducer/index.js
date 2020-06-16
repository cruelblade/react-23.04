import {combineReducers} from 'redux'
import chatsReducer from './chatReducer';
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
});

export default rootReducer;