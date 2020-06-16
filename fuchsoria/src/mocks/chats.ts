import { IChats } from '../interfaces';

const chats: IChats = {
  '0': {
    title: 'John',
    messages: [
      { id: 'yodl49rt4yi7kf', author: 'John', text: 'Hey, what are you doing?', authorAccess: 'user' },
      { id: 'yodl49jjkkr7kf', author: 'John', text: 'Hey, are you here?', authorAccess: 'user' },
    ],
  },
  '1': {
    title: 'Heinz',
    messages: [
      { id: 'yodl49rt4yi7kf', author: 'Heinz', text: 'Hey, what are you doing?', authorAccess: 'user' },
      { id: 'yodl4lhtrkr7kf', author: 'Heinz', text: 'Hey, are you here?', authorAccess: 'user' },
    ],
  },
  '2': {
    title: 'Dungeon Master',
    messages: [
      { id: 'yodl4lkjt4yi7k', author: 'Dungeon Master', text: 'Hey, what are you doing?', authorAccess: 'user' },
      { id: 'yodtryrtkkr7kf', author: 'Dungeon Master', text: 'Hey, are you here?', authorAccess: 'user' },
      {
        id: 'yodtryyyuo5777',
        author: 'Robot',
        text: 'Hi Dungeon Master, i am your personal assistant',
        authorAccess: 'bot',
      },
    ],
  },
  '3': {
    title: 'Friedrich',
    messages: [
      { id: 'yodl49riyuiukf', author: 'Friedrich', text: 'Hey, what are you doing?', authorAccess: 'user' },
      { id: 'yodl4ghjjjr7kf', author: 'Friedrich', text: 'Hey, are you here?', authorAccess: 'user' },
    ],
  },
};

export default chats;
