import React from 'react';
import { Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import AddPage from '.';
import { ToDoListProvider } from 'Contexts';

describe('<AddPage />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/add');

    const { container } = render(
      <Router history={history}>
        <AddPage />
      </Router>,
    );

    const input = screen.getByPlaceholderText('Add your todos');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('Add');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('add a new ToDo and redirect to the root page', () => {
    const history = createMemoryHistory();
    history.push('/add');

    const TestComponent = () => {
      const { pathname } = useLocation();
      return (
        <ToDoListProvider>
          <div>{pathname}</div>
          <AddPage />
        </ToDoListProvider>
      );
    };
    render(
      <Router history={history}>
        <TestComponent />
      </Router>,
    );

    const pathName = screen.getByText('/add');
    expect(pathName).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Add your todos');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    expect(pathName.textContent).toBe('/');
    expect(localStorage.getItem('ToDoList')).toBe('["New ToDo"]');
  });
});
