import { createReducer } from 'typesafe-actions';
import { setBlinking, removeBlinking } from './../actions/chatlistActions';
import { Action } from './reducerTypes';

const initialState = {
  blinkingIds: [],
};

type ChatlistState = {
  blinkingIds: string[];
};

type BlinkingPayload = {
  chatId: string;
};

export default createReducer<ChatlistState>(initialState, {
  [setBlinking.toString()]: (state, action: Action<BlinkingPayload>) => {
    return { blinkingIds: [...state.blinkingIds, action.payload.chatId] };
  },
  [removeBlinking.toString()]: (state, action: Action<BlinkingPayload>) => {
    return { blinkingIds: [...state.blinkingIds.filter((id) => id !== action.payload.chatId)] };
  },
});
