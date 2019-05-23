import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.primary.creme};
  width: 70%;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: ${props => props.theme.colors.primary.yellow};
`;
const Link = styled.a`
  text-decoration: none;
  z-index: 2;
`;

const H3 = styled.h3`
 padding-top: 10px;
    text-align: center;
    border: 1px solid: #fff;
    font-family: ${props => props.theme.fonts.primary.font1};
    color: ${props => props.theme.colors.primary.creme};
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSize.primary.size3};
    text-decoration: none;
    z-index: 2;
`;

const H5 = styled.h5`
 padding-top: 10px;
    text-align: center;
    border: 1px solid: #fff;
    font-family: ${props => props.theme.fonts.primary.font2};
    color: ${props => props.theme.colors.primary.blue};
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSize.primary.size2};
    text-decoration: none;
    z-index: 2;
`;
const Project = props => (
  <Link href={props.sLink} target='_blank'>
    <Container>
      <H3>{props.name}</H3>
      <H5>{props.type}</H5>
    </Container>
  </Link>
);

export default Project;
