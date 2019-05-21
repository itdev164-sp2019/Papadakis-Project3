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

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 150%;
  text-decoration: none;
`;

const Child = styled.div``;

const Header = props => (
  <Container>
    <Link to='/'>
      <H1>Header</H1>
    </Link>
    <Child>
      <NavBar />
    </Child>
  </Container>
);

export default Header;
