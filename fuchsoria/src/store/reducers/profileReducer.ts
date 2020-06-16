import { createReducer } from 'typesafe-actions';
import { setNickName } from './../actions/profileActions';
import { Action, ProfileState, SetNickNamePayload } from './reducerTypes';

const initialState = {
  nickName: 'NickName',
};

export default createReducer<ProfileState>(initialState, {
  [setNickName.toString()]: (state, action: Action<SetNickNamePayload>) => {
    const { nickName } = action.payload;

    return { ...state, nickName };
  },
});
