'use strict';
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext("2d");//rendering context
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


// ctx.clearRect(0,0,800,800);
// ctx.fillStyle = '#f00'; 
// ctx.fillRect(20, 20, 20, 10);
// ctx.fillRect(100, 100, 50, 50);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx); 

new InputHandler(paddle);
let lastTime = 0;

//images
let imgball = document.getElementById('img_ball');

function gameLoop(timestamp){
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,800,600);
    paddle.update(deltatime);
    paddle.draw(ctx);
    ctx.drawImage(imgball, 10, 10, 16, 16);

    requestAnimationFrame(gameLoop);
}
paddle.stop();
gameLoop();
