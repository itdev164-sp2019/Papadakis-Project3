import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;

  flex-direction: column;
`;

const Child = styled.div``;

const Header = () => (
  <Container>
    <h1>Header</h1>
    <Child>
      <NavBar />
    </Child>
  </Container>
);

export default Header;
