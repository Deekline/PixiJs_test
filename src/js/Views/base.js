export const elements = {
  gameCanvas: document.querySelector('canvas'),
  gameBoard: document.querySelector( '.game' ),
  gameGravity: document.querySelector('.gravity'),
  gravityNum: document.querySelector('.number-grav'),
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '0x';

  for ( let i = 0; i < 6; i++ ) {
    color += letters[ Math.floor( Math.random() * 16 ) ];
  }

  return color
};