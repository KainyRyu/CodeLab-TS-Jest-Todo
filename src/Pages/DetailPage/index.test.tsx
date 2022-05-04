import React from 'react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ToDoListProvider } from 'Contexts';
import DetailPage from '.';
import { useLocation } from 'react-router-dom';

describe('<DetailPage />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/detail/0');
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const { container } = render(
      <ToDoListProvider>
        <Router history={history}>
          <Route path="/detail/:id" component={DetailPage} />
        </Router>
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('Delete');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('deletes ToDo data', () => {
    const history = createMemoryHistory();
    history.push('/');
    history.push('/detail/0');
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const TestComponent = () => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    render(
      <ToDoListProvider>
        <Router history={history}>
          <TestComponent />
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        </Router>
      </ToDoListProvider>,
    );

    const url = screen.getByText('/detail/0');
    expect(url).toBeInTheDocument();

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('Delete');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(url.textContent).toBe('/');
    expect(toDoItem).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
