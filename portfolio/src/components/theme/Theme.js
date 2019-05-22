import React from 'react';

const theme = {
  colors: {
    primary: {
      yellow: '#fcb30a',
      creme: '#FFFCD6',
      darkCreme: '#fffca6'
    }
  },
  fonts: {
    primary: {
      font1: 'Shrikhand',
      font2: 'Open Sans'
    }
  },
  fontSize: {
    primary: {
      size1: 'calc(3vw + 3vh + 3vmin)',
      size2: 'calc(1vw + 1vh + 1vmin)'
    }
  }
};

const Theme = { ...theme };

export { Theme };
