import * as PIXI from 'pixi.js';
import { elements } from './base';

export const app = new PIXI.Application( { antialias: true } );
elements.gameBoard.appendChild( app.view );

export const shapes = {
  0: 'rect',
  1: 'ellipse',
  2: 'triangle',
  3: 'circle'
};