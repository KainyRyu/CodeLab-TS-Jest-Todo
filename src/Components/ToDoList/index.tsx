import React from 'react';
import Styled from 'styled-components';
import { ToDoItem } from 'Components/ToDoItem';
import { useToDoList } from 'src/Contexts';

const Container = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;

export default function ToDoList() {
  const { toDoList, deleteToDo } = useToDoList();
  return (
    <Container data-testid="toDoList">
      {toDoList.map((item, index) => (
        <ToDoItem key={item} label={item} onDelete={() => deleteToDo(index)} />
      ))}
    </Container>
  );
}
