import React from 'react';
import 'jest-styled-components';

import { render, screen } from '@testing-library/react';
import InputContainer from './InputContainer';

describe('<InputContainer/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<InputContainer />);

    const input = screen.getByPlaceholderText('Add your todos');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('Add');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
