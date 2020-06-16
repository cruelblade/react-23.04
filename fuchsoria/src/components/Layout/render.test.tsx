import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

describe('<Layout />', () => {
  it('Component should render', () => {
    const { container } = render(<Layout>Text</Layout>);

    expect(container).toMatchSnapshot();
  });
});
