import { handleAction } from 'redux-actions';

const initialState = {
  name: 'Dmitriy',
  lastName: 'Lomov',
};

const profileReducer = handleAction('', store => store, initialState);

export default profileReducer;

