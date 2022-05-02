import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'Components';
import { useToDoList } from 'Contexts';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;
`;

const ToDo = Styled.div`
  min-width: 350px;
  height: 350px;
  overflow-y: auto;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
  padding: 10px;
`;

export default function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = Number.parseInt(id as string);
  const { toDoList, deleteToDo } = useToDoList();
  const toDo = toDoList[userId];

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button
        label="Delete"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={() => {
          deleteToDo(userId);
          navigate(-1);
        }}
      />
    </Container>
  );
}
