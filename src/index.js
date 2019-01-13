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
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(timestamp){
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    paddle.update(deltatime);
    paddle.draw(ctx);
    ball.update(deltatime);
    ball.draw(ctx);

    requestAnimationFrame(gameLoop);
}
// paddle.stop();
requestAnimationFrame(gameLoop);
