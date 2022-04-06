import React, { useState } from 'react';
import Styled from 'styled-components';
import { Button, ToDoItem } from 'Components';
import { Input } from 'Components/Input';
import InputContainer from 'Components/InputContainer';
import ToDoList from 'Components/ToDoList';

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (): void => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  };

  const deleteTodo = (index: number): void => {
    let list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  return (
    <Container>
      <Contents>
        <ToDoList todoList={todoList} deleteToDo={deleteTodo} />
        <InputContainer todo={todo} onChange={(text) => setTodo(text)} onAdd={addTodo} />
      </Contents>
    </Container>
  );
}

export default App;
