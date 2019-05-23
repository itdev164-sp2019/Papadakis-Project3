import React from 'react';

import styled from 'styled-components';

const YellowStripe = styled.div`
  width: 40px;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 10px;
  background-color: ${props => props.theme.colors.primary.yellow};
  z-index: 0;
  overflow: hidden;
`;

const Stripe = props => <YellowStripe />;

export default Stripe;
