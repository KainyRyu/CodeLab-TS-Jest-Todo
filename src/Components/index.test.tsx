import React from 'react';
import 'jest-styled-components';

import { fireEvent, render, screen } from '@testing-library/react';
import InputContainer from './InputContainer';
import { ToDoListProvider } from 'src/Contexts';

describe('<InputContainer/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<InputContainer />);

    const input = screen.getByPlaceholderText('Add your todos');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('Add');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('empties data after adding data', () => {
    render(<InputContainer />);

    const input = screen.getByPlaceholderText('Add your todos') as HTMLInputElement;
    const button = screen.getByText('Add');

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'study react 1' } });
    expect(input.value).toBe('study react 1');
    fireEvent.click(button);
    expect(input.value).toBe('');
  });

  it('adds input data to localStorage via Context', () => {
    render(
      <ToDoListProvider>
        <InputContainer />
      </ToDoListProvider>,
    );

    const input = screen.getByPlaceholderText('Add your todos') as HTMLInputElement;
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'study react 1' } });
    fireEvent.click(button);

    expect(localStorage.getItem('ToDoList')).toBe('["study react 1"]');
  });
});
