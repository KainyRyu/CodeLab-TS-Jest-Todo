import React from 'react';
import Styled from 'styled-components';

import { Button } from 'Components';
import { Input } from 'Components';

const Container = Styled.div`
  display: flex;
`;

interface Props {
  readonly todo?: string;
  readonly onChange?: (text: string) => void;
  readonly onAdd?: () => void;
}

export default function InputContainer({ todo, onChange, onAdd }: Props) {
  return (
    <Container>
      <Input placeholder="Add your todos" value={todo} onChange={onChange} />
      <Button label="Add" onClick={onAdd} />
    </Container>
  );
}
