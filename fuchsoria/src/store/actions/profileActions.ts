import { createAction } from 'typesafe-actions';
import { createAction as createFetchAction } from 'redux-api-middleware';

export const setNickName = createAction('SET_NICKNAME', (nickName: string) => ({ nickName }))();

export const PROFILE_REQUEST = '@@profile/PROFILE_REQUEST';
export const PROFILE_SUCCESS = '@@profile/PROFILE_SUCCESS';
export const PROFILE_FAILURE = '@@profile/PROFILE_FAILURE';

export const fetchProfile = () =>
  createFetchAction({
    endpoint: '/api/profile.json',
    method: 'GET',
    types: [PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE],
  });
