import React, { useState } from 'react';
import Styled from 'styled-components';

import { Button } from 'Components';
import { Input } from 'Components';
import { useToDoList } from 'Contexts';

const Container = Styled.div`
  display: flex;
`;

export default function InputContainer() {
  const [toDo, setToDo] = useState('');
  const { addToDo } = useToDoList();
  return (
    <Container>
      <Input placeholder="Add your todos" value={toDo} onChange={setToDo} />
      <Button
        label="Add"
        onClick={() => {
          addToDo(toDo);
          setToDo('');
        }}
      />
    </Container>
  );
}
