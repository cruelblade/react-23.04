import { IChats, IProfileState } from './../../interfaces';

export const selectChats = (state: { chats: IChats }) => {
  const { chats } = state;

  return chats;
};

export const selectProfile = (state: { profile: IProfileState }) => {
  const { profile } = state;

  return profile;
};
