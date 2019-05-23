import React from 'react';

import styled from 'styled-components';

const YellowStripe = styled.div`
  width: 40px;
  height: 150%;
  position: absolute;
  top: -450px;
  right: -50px;
  border-left: 50px solid ${props => props.theme.colors.primary.yellow};
  z-index: 0;
  -webkit-transform: translateY(20px) translateX(5px) rotate(-56deg);
  overflow: hidden;
`;

const Stripe = props => <YellowStripe />;

export default Stripe;
