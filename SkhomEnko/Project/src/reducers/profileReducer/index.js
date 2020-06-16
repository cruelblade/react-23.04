import { handleActions } from 'redux-actions';
import { updateProfile } from '../../actions/chatsActions';

const initialStore = {
  name: 'Алексей',
  lastName: 'Схоменко',
};

const reducer = handleActions(
  {
    [updateProfile]: (state, action) => action.payload,
  },
  initialStore,
);

export default reducer;
