import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import NotFound from '.';

describe('NotFound />', () => {
  it('renders component correctly', () => {
    const { container } = render(<NotFound />);

    const message = screen.getByText('Not Found🥲');
    expect(message).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
