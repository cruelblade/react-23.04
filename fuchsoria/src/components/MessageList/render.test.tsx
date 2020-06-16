import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IMessageListProps } from '../../interfaces';
import MessageList from '../MessageList';
import { initStore } from '../../store';

const { store } = initStore();

const mockData: IMessageListProps = {
  messages: [
    {
      id: 'w7i456644834',
      author: 'Jest 1',
      text: 'Jest first example message',
      authorAccess: 'user',
    },
    {
      id: 'w7i458h84834',
      author: 'Jest',
      text: 'Jest second example message',
      authorAccess: 'user',
    },
    {
      id: 'w7ifttyjhf34',
      author: 'Robot',
      text: 'Hi Jest, i am your personal assistant',
      authorAccess: 'bot',
    },
  ],
  chatId: '0',
};

describe('<MessageList />', () => {
  it('Component should render', () => {
    const { container } = render(
      <Provider store={store}>
        <MessageList messages={mockData.messages} chatId={mockData.chatId} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
