import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './index';

describe('<Button />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Button label="Button Test" />);
    const label = screen.getByText('Button Test');
    expect(label).toBeInTheDocument();
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304FFE');
    expect(parent).toHaveStyleRule('background-color', '#1E40FF', { modifier: ':hover' });

    expect(container).toMatchSnapshot();
  });
});
