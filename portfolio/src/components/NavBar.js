import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  text-decoration: none;
  justify-content: flex-start;
`;

const Item = styled.li`
  text-decoration: none;
  padding-left: 2rem;
`;

const NavBar = () => (
  <Nav>
    <Item>
      <Link to='/About'>About</Link>
    </Item>
    <Item>
      <Link to='/About'>Other</Link>
    </Item>
  </Nav>
);

export default NavBar;
