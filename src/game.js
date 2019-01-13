// import Paddle from './paddle'
class Game {
    constructor(gameWidth, gameHeight){

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        
        
    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        let brick = new Brick(this,{x: 20, y: 20})

        // let bricks = [];
        // for(let i=0;i<10;i++){
        //     bricks.push(new Brick(this,{x: 20 + i*52, y: 30}))
        // }

        let bricks = buildLevel(game,level1);

        this.gameObjects = [this.ball, this.paddle, ...bricks];
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
};