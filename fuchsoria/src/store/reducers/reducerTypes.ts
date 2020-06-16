import { IChats, IProfileState, IMessage } from './../../interfaces';

export type State = {
  chats: IChats;
  profile: IProfileState;
  chatlist: {
    blinkingIds: string[];
  };
};

export type Action<P> = {
  type: string;
  payload: P;
};

export type ProfileState = {
  nickName: string;
};

export type SetNickNamePayload = {
  nickName: string;
};

export type AddMessagePayload = {
  message: IMessage;
  chatId: string;
};

export type AddChatPayload = {
  chatName: string;
  chatId: string;
};

export type DeleteChatPayload = {
  chatId: string;
};

export type DeleteMessagePayload = {
  messageId: string;
  chatId: string;
};
