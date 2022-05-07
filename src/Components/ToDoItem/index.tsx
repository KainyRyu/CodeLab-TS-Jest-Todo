import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Button } from 'Components/Button';

interface Props {
  readonly id: number;
  readonly label: string;
  readonly onDelete?: () => void;
}

const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const Label = Styled(Link)`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
`;

export const ToDoItem = ({ id, label, onDelete }: Props) => {
  return (
    <Container>
      <Label to={`/detail/${id}`}>{label}</Label>
      <Button label="Delete" backgroundColor="#EE5555" hoverColor="#EE3333" onClick={onDelete} />
    </Container>
  );
};
