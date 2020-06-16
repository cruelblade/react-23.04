import { handleActions } from 'redux-actions';
import { setChats, updateChats } from '../../actions/chatsActions';

const initialState = [];

const reducer = handleActions(
    {
        [setChats]: (state, action) => action.payload,
        [updateChats]: state => state,
    },
    initialState,
);

export default reducer;