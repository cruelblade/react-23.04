import React from 'react';
import { render } from '@testing-library/react';
import { IMessage } from '../../interfaces';
import Message from '../Message';

const mockData: IMessage = {
  id: 'w7i33e48tr834',
  author: 'Jest',
  text: 'Jest example message',
  authorAccess: 'user',
};

const mockDataSelf: IMessage = {
  id: 'w7i3hgf48trg4',
  author: 'Self',
  text: 'Self example message',
  authorAccess: 'self',
};

const message = document.createElement('div');
const messageBot = document.createElement('div');

describe('<Message />', () => {
  it('Component should render', async () => {
    render(
      <Message
        id={mockData.id}
        key={mockData.id}
        author={mockData.author}
        text={mockData.text}
        isSelf={mockData.authorAccess === 'self'}
        handleDelete={jest.fn()}
      />,
      { container: document.body.appendChild(message) }
    );

    render(
      <Message
        id={mockData.id}
        key={mockDataSelf.id}
        author={mockDataSelf.author}
        text={mockDataSelf.text}
        isSelf={mockDataSelf.authorAccess === 'self'}
        handleDelete={jest.fn()}
      />,
      { container: document.body.appendChild(messageBot) }
    );

    expect(document.body).toMatchSnapshot();
  });

  it('Check rendered user message', () => {
    expect(message.querySelector('.messageAuthor')?.textContent).toBe(mockData.author);
    expect(message.querySelector('.message')?.lastChild?.textContent).toBe(mockData.text);
    expect(message.querySelector('.message')?.classList.contains('messageSelf')).toBeFalsy();
  });

  it('Check rendered self message', () => {
    expect(messageBot.querySelector('.messageAuthor')?.textContent).toBe(mockDataSelf.author);
    expect(messageBot.querySelector('.message')?.lastChild?.textContent).toBe(mockDataSelf.text);
    expect(messageBot.querySelector('.message')?.classList.contains('messageSelf')).toBeTruthy();
  });
});
