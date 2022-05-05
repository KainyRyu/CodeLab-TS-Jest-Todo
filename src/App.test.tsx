import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import 'jest-styled-components';

describe('<App />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('to do list');
    expect(header).toBeInTheDocument();
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const label = screen.getByText('+');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('goes to Add page and goBack to List page', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router history={history}>
        <App />
      </Router>,
    );
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    const header = screen.getByText('add to do');
    expect(header).toBeInTheDocument();

    const goBack = screen.getByText('Go Back');
    expect(goBack).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Add your todos');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('Add');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    fireEvent.click(goBack);
    expect(header.textContent).toBe('to do list');
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
  });

  it('goes to Detail page and go back to List page', () => {
    localStorage.setItem('ToDoList', '["ToDo 1","ToDo 2","ToDo 3"]');

    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('to do list');
    expect(header).toBeInTheDocument();
    const toDo2 = screen.getByText('ToDo 2');
    fireEvent.click(toDo2);
    expect(header.textContent).toBe('detail');
    const goBack = screen.getByText('Go Back');
    expect(goBack).toBeInTheDocument();
    const button = screen.getByText('Delete');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    fireEvent.click(button);
    expect(header).toBeInTheDocument();
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
  });

  it('shows Not Found page if the user enters the wrong URL, and go back to List page', () => {
    const history = createMemoryHistory();
    history.push('/hello');

    const { container } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const header = screen.getByText('error');
    expect(header).toBeInTheDocument();
    const goBack = screen.getByText('Go Back');
    expect(goBack).toBeInTheDocument();
    const notFoundMessage = screen.getByText('Not Found🥲');
    expect(notFoundMessage).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    fireEvent.click(goBack);
    expect(header.textContent).toBe('to do list');
    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
  });
});
