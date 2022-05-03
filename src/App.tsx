import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';
import List from 'Pages/ListPage';
import Add from 'Pages/AddPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import DetailPage from 'Pages/DetailPage';
import PageHeader from 'Components/PageHeader';
import NotFound from 'Pages/NotFound';

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
        <PageHeader />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
