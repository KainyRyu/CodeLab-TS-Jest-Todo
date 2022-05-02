import React, { useState } from 'react';
import Styled from 'styled-components';

import { Button } from 'Components';
import { Input } from 'Components';
import { useToDoList } from 'Contexts';

interface Props {
  readonly onAdd?: () => void;
}

const Container = Styled.div`
  display: flex;
`;

export default function InputContainer({ onAdd }: Props) {
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
          if (toDo && typeof onAdd === 'function') {
            onAdd();
          }
        }}
      />
    </Container>
  );
}
