// canvas-sketch sketch.js --new --open
// canvas-sketch sketch.js --open
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.fillRect(100, 100, 500, 500);
  };
};

canvasSketch(sketch, settings);
