import * as PIXI from 'pixi.js';
import '../style/main.scss';

import Shape from './Models/Shape';
import * as viewShape from './Views/viewShape';
import { elements } from './Views/base';

let state = [];
window.state = state;
let gravityIndex = Number( elements.gravityNum.textContent );

const renderShape = ( x, y, yVelocity ) => {
  let randomI = Math.floor( Math.random() * Math.floor( 4 ) );
  const createNewShape = new Shape( x, y, viewShape.shapes[ randomI ], viewShape.app, yVelocity );
  state.push( createNewShape );
  createNewShape.createShape();
};

const changeSpeed = ( e ) => {
  if ( e.target.textContent === '+' ) {
    gravityIndex++;
    elements.gravityNum.textContent = gravityIndex;
    state.forEach( el => el.yVelocity = 0.1 * gravityIndex );
  } else if ( e.target.textContent === '-' && gravityIndex != 0 ) {
    gravityIndex--;
    elements.gravityNum.textContent = gravityIndex;
    state.forEach( ( el ) => {
      if ( gravityIndex <= 1 ) {
        el.yVelocity = 0.1;
      } else {
        el.yVelocity = (gravityIndex-1)/10;
      }
    } );
  }
};


document.querySelector( 'canvas' )
        .addEventListener( 'click', e => {
          renderShape( e.clientX, e.clientY, gravityIndex );
          e.currentTarget
        } );


elements.gameGravity.addEventListener( 'click', e => {
  changeSpeed( e );
} );


