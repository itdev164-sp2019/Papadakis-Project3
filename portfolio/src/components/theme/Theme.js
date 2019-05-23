import React from 'react';

const theme = {
  colors: {
    primary: {
      yellow: '#fcb30a',
      creme: '#FFFCD6',
      blue: '#01839b;'
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
      size2: 'calc(1vw + 1vh + 1vmin)',
      size3: 'calc(2vw + 2vh + 2vmin)'
    }
  }
};

const Theme = { ...theme };

export { Theme };
