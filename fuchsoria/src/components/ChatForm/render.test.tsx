import React from 'react';
import { render } from '@testing-library/react';
import ChatForm from '../ChatForm';

describe('<ChatForm />', () => {
  it('Component should render', () => {
    const { container } = render(<ChatForm handleSubmit={jest.fn} />);

    expect(container).toMatchSnapshot();
  });
});
