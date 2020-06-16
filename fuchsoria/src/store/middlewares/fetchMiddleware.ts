import { MiddlewareAPI } from 'redux';
import { IChats } from './../../interfaces';
import { CHATS_SUCCESS, setChats } from './../actions/chatsActions';
import { PROFILE_SUCCESS, setNickName } from './../actions/profileActions';
import { Action } from './../reducers/reducerTypes';

type ProfilePayload = {
  nickname: string;
};

export const fetchMiddleware = (store: MiddlewareAPI) => (next: Function) => (action: Action<unknown>) => {
  if (action.type === CHATS_SUCCESS) {
    store.dispatch(setChats(action.payload as IChats));
  }

  if (action.type === PROFILE_SUCCESS) {
    store.dispatch(setNickName((action.payload as ProfilePayload).nickname));
  }

  next(action);
};
