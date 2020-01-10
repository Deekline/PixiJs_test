import * as PIXI from 'pixi.js';

import Shape from './Models/Shape';
import * as viewShape from './Views/viewShape';




const renderShape = ( x, y ) => {
  let randomI = Math.floor( Math.random() * Math.floor( 4 ) );
  const createNewShape = new Shape( x, y, viewShape.shapes[ randomI ], viewShape.app );
  createNewShape.createShape();
  console.log(createNewShape)
};


document.querySelector( 'canvas' )
        .addEventListener( 'click', e => {
          renderShape( e.clientX, e.clientY );
        } );
