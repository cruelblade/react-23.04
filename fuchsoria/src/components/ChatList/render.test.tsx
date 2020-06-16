import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initStore } from '../../store';
import { IChatListProps } from '../../interfaces';
import ChatList from '../ChatList';

const { store } = initStore();

const mockData: IChatListProps = {
  items: [
    {
      id: 0,
      title: 'John',
      description: 'What are you doing?',
    },
    {
      id: 1,
      title: 'Heinz',
      description: 'What are you doing?',
    },
    {
      id: 2,
      title: 'Dungeon Master',
      description: 'What are you doing?',
    },
  ],
  blinkingIds: [],
};

describe('<ChatList/>', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        };
      }),
    });
  });

  it('Component should render', () => {
    const { container } = render(
      <Provider store={store}>
        <ChatList items={mockData.items} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
