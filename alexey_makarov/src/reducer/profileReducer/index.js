import {handleAction} from 'redux-actions';

const initialStore = {
    name: 'FirstUser',
    lastName: 'Second Name',
};

const reducer = handleAction('', store => store, initialStore);

export default reducer;

export const getProfileFromStore = store => store.profile;