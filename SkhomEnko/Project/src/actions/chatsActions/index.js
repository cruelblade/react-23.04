import { createAction } from 'redux-actions';

const botAnswers = [
  'Талант — это способность верить в успех.',
  'Все, что существует на свете, когда-то было мечтой.',
  'Человек лучше всего следит за собой тогда, когда другие следят за ним тоже.',
  'Мир — это сфера, центр которой повсюду, а окружности нет нигде.',
  'Продолжительность времени определяется нашим восприятием. Размеры пространства обусловлены нашим сознанием. Поэтому, коли дух покоен, один день сравнится с тысячей веков, а коли помыслы широки, крохотная хижина вместит в себя целый мир.',
  'Не думай, что ты умнее других, хотя другие и считают, что умнее тебя, — и в этом твое преимущество перед ними.',
  'Не расставайтесь со своими иллюзиями. Когда их не станет, может быть, вы и продолжите существовать, но перестанете жить.',
  'Идите на риск, когда вы чувствуете себя готовым, но не заставляйте себя делать то, к чему вы еще не готовы.',
  'Самое сложное в том, чтобы подняться на верхнюю ступеньку лестницы, это пробраться через толпу у ее основания.',
];

const getBotText = () => botAnswers[Math.floor(Math.random() * botAnswers.length)];

let botTimeout = 0;

export const setChats = createAction('chats/SET_CHATS', data => {
  return data.reduce(
    (all, item) => {
      all.chatsByIds[item.id] = item;
      all.chatsIds.push(item.id);

      return all;
    },
    {
      chatsByIds: {},
      chatsIds: [],
    },
  );
});

export const addNewChat = createAction('chats/ADD_CHAT');

export const addNewMessage = createAction('chats/ADD_MESSAGE');

const botAnswer = (chatId, dispatch, getState) => {
  const { messagesIds } = getState().messages;
  let lastId = messagesIds[messagesIds.length - 1];
  dispatch(
    addNewMessage({
      author: 'Bot',
      text: getBotText(),
      chatId,
      id: ++lastId,
      timestamp: new Date().getTime(),
    }),
  );
};

export const addMessage = data => (dispatch, getState) => {
  const { author, chatId } = data;
  const { messagesIds } = getState().messages;
  let lastId = messagesIds[messagesIds.length - 1];
  dispatch(addNewMessage({ ...data, id: ++lastId })); // диспатчим то что отправили

  // вызываем наш middleware бота
  if (author !== 'Bot') {
    clearTimeout(botTimeout);
    botTimeout = setTimeout(() => {
      botAnswer(chatId, dispatch, getState);
    }, 1000);
  }
};

export const updateProfile = createAction('profile/UPDATE_PROFILE');
