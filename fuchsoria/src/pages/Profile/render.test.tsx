import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initStore } from '../../store';
import Profile from '../Profile';

const { store } = initStore();

describe('<Profile />', () => {
  it('Component should render', () => {
    const { container } = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
