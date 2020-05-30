// ЭТОТ MIDDLEWARE устарел. В проекте не используется. Оставил для примера.

// import { v4 as uuidv4 } from 'uuid';
import { addMessage } from '../actions/chatsActions';

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

const botAnswer = store => next => action => {
  if (action.type === addMessage.toString()) {
    const { author, chatId } = action.payload;
    if (author !== 'Bot') {
      setTimeout(() => {
        store.dispatch(
          addMessage({
            author: 'Bot',
            text: botAnswers[Math.floor(Math.random() * botAnswers.length)],
            chatId,
            id: uuidv4(),
          }),
        );
      }, 1000);
    }
  }
  return next(action);
};

export default botAnswer;
