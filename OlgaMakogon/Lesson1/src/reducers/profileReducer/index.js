import { handleAction } from 'redux-actions';

const initialStore = {
  name: 'Alex',
  lastName: 'Pog',
};

const reducer = handleAction('', store => store, initialStore);

export default reducer;

export const getProfileFromStore = store => store.profile;