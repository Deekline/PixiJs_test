export const elements = {
  gameBoard: document.querySelector( '.game' )
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '0x';

  for ( let i = 0; i < 6; i++ ) {
    color += letters[ Math.floor( Math.random() * 16 ) ];
  }

  return color
};