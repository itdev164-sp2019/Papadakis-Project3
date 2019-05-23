import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const Container = styled.div` 
    text-align: center;
    border: 1px solid: #fff;
    z-index: 2;
    `;

const Link = styled.a`
  text-decoration: none;
  z-index: 2;
`;

const H3 = styled.div`
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

const Social = props => (
  <Link href={props.sLink}>
    <H3>{props.name}</H3>
  </Link>
);

export default Social;
