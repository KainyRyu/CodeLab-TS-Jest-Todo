import React from 'react';
import Styled from 'styled-components';

interface Props {
  readonly value?: string;
  readonly placeholder?: string;
  readonly onChange?: (text: string) => void;
}

const InputBox = Styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
`;

export const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputBox
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (typeof onChange === 'function') {
          onChange(e.target.value);
        }
      }}
    />
  );
};
