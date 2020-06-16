import { handleActions } from 'redux-actions';
import {
  profileSuccess,
  profileSend,
} from '../../actions/profileActions';

const initialState = { };

const reducer = handleActions(
  {
    [profileSend]: state => ({ ...state}),
    [profileSuccess]: (state, action) => ({ ...state, ...action.payload}),
  },
  initialState,
);

export default reducer;