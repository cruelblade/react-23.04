import { createAction } from 'redux-actions';


 export const profileSend = createAction('profile/SEND_REQUEST');
 export const profileReject = createAction('profile/profile_REJECT');
 export const profileSuccess = createAction('profile/profile_SUCCESS');



 export const fetchProfile = () => dispatch => {
  dispatch(profileSend());
  return fetch('/api/profile.json')
    .then(res => {
      return res.json();
    })
    .then((res => {

      dispatch(profileSuccess(...res));
      return true;
    }))
    .catch(e => {
      dispatch(profileReject());
      return false;
    })
    .finally(() => {});
};