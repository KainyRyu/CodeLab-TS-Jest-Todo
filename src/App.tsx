import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';
import List from 'Pages/ListPage';
import Add from 'Pages/AddPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import DetailPage from 'Pages/DetailPage';

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
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
