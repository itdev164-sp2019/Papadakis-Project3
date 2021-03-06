import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLink = styled(Link)`
  text-decoration: none;
  z-index: 3;
`;

const StyledLink = ({ children, ...props }) => (
  <SLink to={props.link}>{children}</SLink>
);

export default StyledLink;
