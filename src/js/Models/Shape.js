import * as PIXI from 'pixi.js';
import { getRandomColor } from '../Views/base';

export default class Shape {
  constructor( xC, yC, shape, app ) {
    this.xC = xC;
    this.yC = yC;
    this.shape = shape;
    this.app = app;
    this.yVelocity = 0.1;
  }

  createShape() {
    const shape = new PIXI.Graphics();
    shape.beginFill( getRandomColor() );
    if ( this.shape === 'rect' ) {
      shape.drawRect( this.xC, this.yC - 50, 100, 100 );
    } else if ( this.shape === 'ellipse' ) {
      shape.drawEllipse( this.xC, this.yC, 60, 40 );
    } else if (this.shape === 'circle'){
      shape.drawCircle(this.xC, this.yC, 50)
    } else if ( this.shape === 'triangle' ) {
      const path = [
        this.xC - 75,
        this.yC + 50,
        this.xC,
        this.yC - 50,
        this.xC + 75,
        this.yC + 50
      ];
      shape.drawPolygon( path );
    }
    shape.endFill();
    this.app.stage.addChild( shape );
    this.app.ticker.add( () => {
      shape.y += this.yVelocity;
    } );
  }
}