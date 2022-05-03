import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Styled from 'styled-components';

const Container = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: dodgerblue;
`;

const Title = Styled.div`
padding: 20px;
color: #ffffff;
font-size: 20px;
font-weight: 600;

`;
const GoBack = Styled(Link)`
  padding: 20px;
  color: #ffffff;
  font-size: 16px
  font-weight: 600;
  text-decoration: none;
  position: absolute;
  left: 20px;
`;

export default function PageHeader() {
  const { pathname } = useLocation();
  let title = 'error';

  if (pathname === '/') {
    title = 'to do list';
  } else if (pathname === '/add') {
    title = 'add to do';
  } else if (pathname.startsWith('/detail')) {
    title = 'detail';
  }
  return (
    <Container>
      <Title>{title}</Title>
      {pathname !== '/' && <GoBack to="/">Go Back</GoBack>}
    </Container>
  );
}
