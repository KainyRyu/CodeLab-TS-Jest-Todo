import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';
import List from 'Pages/List';
import { Route, Routes } from 'react-router-dom';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Routes>
          <Route path="/">
            <List />
          </Route>
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
