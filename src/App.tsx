import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';
import InputContainer from 'Components/InputContainer';
import ToDoList from 'Components/ToDoList';
import { Route, Routes } from 'react-router-dom';

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

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Routes>
          <Route path="/">
            <Contents>
              <ToDoList />
              <InputContainer />
            </Contents>
          </Route>
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
