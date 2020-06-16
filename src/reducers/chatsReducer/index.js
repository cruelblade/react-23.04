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

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case setChats:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default reducer;