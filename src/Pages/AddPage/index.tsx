import React from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import InputContainer from 'Components/InputContainer';

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

export default function AddPage() {
  const { replace } = useHistory();

  return (
    <Container>
      <InputContainer onAdd={() => replace('/')} />
    </Container>
  );
}
