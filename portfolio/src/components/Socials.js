import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 2;
`;

const Socials = props => (
  <Container>
    <Social
      sLink={props.socials.linkedin.link}
      name={props.socials.linkedin.name}
    />
    <Social
      sLink={props.socials.twitter.link}
      name={props.socials.twitter.name}
    />
  </Container>
);

export default Socials;
