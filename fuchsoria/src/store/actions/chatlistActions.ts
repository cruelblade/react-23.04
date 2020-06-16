import { createAction } from 'typesafe-actions';

export const setBlinking = createAction('SET_BLINKING', (chatId: string) => ({chatId}))();
export const removeBlinking = createAction('REMOVE_BLINKING', (chatId: string) => ({chatId}))();
