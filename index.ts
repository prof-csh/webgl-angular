// Import stylesheets
import './style.css';

// Write TypeScript code!

main();

function main() {
  console.log('main!');
  const canvas: HTMLCanvasElement = <HTMLCanvasElement>document
    .getElementById('canvas');

  canvas.width = 640;
  canvas.height = 480;

  const context = canvas.getContext('2d');

  context.fillStyle = '#532';
  context.fillRect(0, 0, canvas.width, canvas.height);


  context.beginPath();
  context.arc(320, 240, 50, 0, 2*Math.PI);
  context.stroke();

}

