// import Paddle from './paddle'
class Game {
    constructor(gameWidth, gameHeight){

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        
        
    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.gameObjects = [this.ball, this.paddle];
        new InputHandler(this.paddle);
    }

    update(deltatime){
        // this.paddle.update(deltatime);
        // this.ball.update(deltatime);

        this.gameObjects.forEach(obj => obj.update(deltatime));
    }

    draw(ctx){
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);

        this.gameObjects.forEach(obj => obj.draw(ctx));
    }
}