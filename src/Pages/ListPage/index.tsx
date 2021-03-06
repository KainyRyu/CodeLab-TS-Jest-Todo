import React from 'react';
import { Link } from 'react-router-dom';
import ToDoList from 'Components/ToDoList';
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

const AddButton = Styled(Link)`
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
  position: absolute;
  bottom: -30px;
  background-color: #304FFE;
  box-shadow:5px 5px 10px rgba(0,0,0,0.2);
  text-decoration: none;
  &:hover {
    background-color: #1A80FF;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2);
  }
`;
export default function ListPage() {
  return (
    <Container>
      <ToDoList />
      <AddButton to="/add">+</AddButton>
    </Container>
  );
}
