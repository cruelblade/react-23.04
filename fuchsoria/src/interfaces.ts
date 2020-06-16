export interface IMessage {
  id: string;
  author?: string;
  text: string;
  authorAccess?: string;
  isSelf?: boolean;
  date?: number;
}

export interface IMessageWithHandler extends IMessage {
  handleDelete: () => void;
}

export interface IChatListItem {
  id: number | string;
  title: string;
  description: string;
}

export interface IChatListProps {
  items: IChatListItem[];
  blinkingIds?: string[];
}

export interface IChatContainerProps {
  chats: IChats;
  profile: IProfileState;
  addChat: (chatName: string, chatId: string) => void;
  addMessage: (message: IMessage, chatId: string, callback?: Function) => void;
  noContent?: boolean;
  history?: unknown;
  location?: unknown;
  match?: {
    isExact: boolean;
    params: {
      chatId: string;
    };
    path: string;
    url: string;
  };
}

export interface IProfileState {
  nickName: string;
}

export interface IChatContainerState {
  chatList?: IChatListItem[];
}

export interface IMessageListProps {
  messages: IMessage[];
  chatId: string;
}

export interface IChatFormProps {
  handleSubmit: (text: string, author?: string) => void;
}

export interface IChat {
  title: string;
  messages: IMessage[];
}

export interface IChats {
  [key: string]: IChat;
}

export interface IUpdateProfile {
  nickName?: string;
}

export interface IProfileFormProps {
  updateProfile: ({ nickName }: IUpdateProfile) => void;
}
