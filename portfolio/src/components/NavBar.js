import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  justify-content: flex-start;
`;

const Item = styled.li`
  text-decoration: none;
  padding: 1rem;
  margin-left: 1rem;
  font-family: ${props => props.theme.fonts.primary.font1};
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary.creme};
  font-size: ${props => props.theme.fontSize.primary.size2};
  border: 1px solid black;
  &:hover {
    background-color: ${props => props.theme.colors.primary.creme};
    color: ${props => props.theme.colors.primary.yellow};
  }
`;

const NavBar = props => (
  <Nav>
    <StyledLink link='/About'>
      <Item>About</Item>
    </StyledLink>
    <StyledLink link='/About'>
      <Item>Projects</Item>
    </StyledLink>
    <StyledLink link='/Socials'>
      <Item>Social</Item>
    </StyledLink>
  </Nav>
);

export default NavBar;
