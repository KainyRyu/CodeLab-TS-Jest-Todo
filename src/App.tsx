import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';
import List from 'Pages/ListPage';
import Add from 'Pages/AddPage';
import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" component={List} />
          <Route path="/add" component={Add} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
