import React, { useState } from 'react';
import Styled from 'styled-components';
import { Button, ToDoItem } from 'Components';
import { Input } from 'Components/Input';

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

const InputContainer = Styled.div`
display: flex;
`;

const ToDoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
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
        <ToDoListContainer data-testid="toDoList">
          {todoList.map((item, index) => (
            <ToDoItem key={index} label={item} onDelete={() => deleteTodo(index)} />
          ))}
        </ToDoListContainer>

        <InputContainer>
          <Input placeholder="HI" value={todo} onChange={(text) => setTodo(text)} />
          <Button label="Add" onClick={addTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;
