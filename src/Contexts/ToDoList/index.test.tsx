import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ToDoListProvider, useToDoList } from '.';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ToDoItem } from 'Components';
import ToDoList from 'Components/ToDoList';

beforeEach(() => {
  localStorage.clear();
});

describe('ToDoList Context', () => {
  it('renders component correctly', () => {
    const ChildComponent = () => <div>Child Component</div>;

    const { container } = render(
      <Router>
        <ToDoListProvider>
          <ChildComponent />
        </ToDoListProvider>
      </Router>,
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBeNull();

    expect(container).toMatchSnapshot();
  });

  it('loads localStorage data and sets it to State', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2","ToDo 3"]');

    const ChildComponent = () => {
      const { toDoList } = useToDoList();
      return (
        <div>
          {toDoList.map((toDo, index) => (
            <ToDoItem key={toDo} id={index} label={toDo} />
          ))}
        </div>
      );
    };
    render(
      <Router>
        <ToDoListProvider>
          <ChildComponent />
        </ToDoListProvider>
      </Router>,
    );

    const toDoItem1 = screen.getByText('ToDo 1');
    expect(toDoItem1.getAttribute('href')).toBe('/detail/0');
    const toDoItem2 = screen.getByText('ToDo 2');
    expect(toDoItem2.getAttribute('href')).toBe('/detail/1');
    const toDoItem3 = screen.getByText('ToDo 3');
    expect(toDoItem3.getAttribute('href')).toBe('/detail/2');
  });

  it('uses addToDo function', () => {
    const ChildComponent = () => {
      const { toDoList, addToDo } = useToDoList();
      return (
        <div>
          <div onClick={() => addToDo('study react 1')}>Add ToDo</div>
          <div>
            {toDoList.map((toDo) => (
              <div key={toDo}>{toDo}</div>
            ))}
          </div>
        </div>
      );
    };

    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    expect(localStorage.getItem('ToDoList')).toBeNull();
    const button = screen.getByText('Add ToDo');
    fireEvent.click(button);
    expect(localStorage.getItem('ToDoList')).toBe('["study react 1"]');
  });

  it('use deleteToDo function', () => {
    localStorage.setItem('ToDoList', '["ToDo 1","ToDo 2","ToDo 3"]');

    const ChildComponent = () => {
      const { toDoList, deleteToDo } = useToDoList();
      return (
        <div>
          <div>
            {toDoList.map((toDo, index) => (
              <div key={toDo} onClick={() => deleteToDo(index)}>
                {toDo}
              </div>
            ))}
          </div>
        </div>
      );
    };

    render(
      <Router>
        <ToDoListProvider>
          <ChildComponent />
        </ToDoListProvider>
      </Router>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem);
    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
  });

  it('moves to detail page', () => {
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    localStorage.setItem('ToDoList', '["ToDo 1","ToDo 2","ToDo 3"]');

    render(
      <Router>
        <TestComponent />
        <ToDoListProvider>
          <ToDoList />
        </ToDoListProvider>
      </Router>,
    );

    const url = screen.getByText('/');
    expect(url).toBeInTheDocument();

    const toDoItem1 = screen.getByText('ToDo 2');
    expect(toDoItem1.getAttribute('href')).toBe('/detail/1');
    fireEvent.click(toDoItem1);

    expect(url.textContent).toBe('/detail/1');
  });
});
