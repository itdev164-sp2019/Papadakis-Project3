import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary.yellow};
  font-family: ${props => props.theme.fonts.primary.font1}
  text-align: left
  margin-left: -10px;
  font-size: ${props => props.theme.fontSize.primary.size1};
  &:hover {
      color: ${props => props.theme.colors.primary.creme}
  }
`;

const Child = styled.div`
  text-align: left;
`;

const Header = props => (
  <Container>
    <StyledLink link={'/'}>
      <H1>{props.name}</H1>
    </StyledLink>
    <Child>
      <NavBar />
    </Child>
  </Container>
);

export default Header;
