import React from 'react';
import { render } from '@testing-library/react';
import ChatListForm from '../ChatListForm';

describe('<ChatListForm />', () => {
  it('Component should render', () => {
    const { container } = render(<ChatListForm handleCreate={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
