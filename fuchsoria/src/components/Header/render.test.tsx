import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initStore } from '../../store';
import Header from '../Header';

const { store } = initStore();

describe('<Header />', () => {
  it('Component should render', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
