import { handleAction } from 'redux-actions';

const initialStore = {
    name: 'Sergei',
    lastName: 'Str',
};

const reducer = handleAction('', store => store, initialStore);

export default reducer;

export const getProfileFromStore = store => store.profile;