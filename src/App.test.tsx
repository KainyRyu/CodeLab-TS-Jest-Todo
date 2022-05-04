import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import 'jest-styled-components';

describe('<App />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const toDoList = screen.getByTestId('toDoList') as HTMLElement;
    expect(toDoList).toBeInTheDocument();

    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByText('Add your todos');
    expect(input).toBeInTheDocument();
    const label = screen.getByText('Add');
    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('adds and deletes ToDo items', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const input = screen.getByText('Add your todos');
    const button = screen.getByText('+');
    fireEvent.change(input, { target: { value: 'study react1' } });
    fireEvent.click(button);

    const todoItem = screen.getByText('study react1');
    expect(todoItem).toBeInTheDocument();
    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toBeInTheDocument();

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: 'study react 2' } });
    fireEvent.click(button);

    const todoItem2 = screen.getByText('study react 2');
    expect(todoItem2).toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(2);

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    // expect(todoItem).not.toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(1);
  });

  it('does not add empty ToDo', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const toDoList = screen.getByTestId('toDoList');
    const length = toDoList.childElementCount;

    const button = screen.getByText('+');
    fireEvent.click(button);

    expect(toDoList.childElementCount).toBe(length);
  });

  it('loads localStorage data', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2","ToDo 3"]');
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
    );

    expect(screen.getAllByText('Delete').length).toBe(3);
  });
});
