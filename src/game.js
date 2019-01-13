// import Paddle from './paddle'
const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
}

class Game {
    constructor(gameWidth, gameHeight){

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.gamestate = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.gameObjects= [];
        this.lives = 3;
        let brick = new Brick(this,{x: 20, y: 20})
        new InputHandler(this.paddle, this);

    }

    start(){
        
        if(this.gamestate !== GAMESTATE.MENU) return;
        // let bricks = [];
        // for(let i=0;i<10;i++){
        //     bricks.push(new Brick(this,{x: 20 + i*52, y: 30}))
        // }

        let bricks = buildLevel(game,level1);
        this.gameObjects = [this.ball, this.paddle, ...bricks];
        this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltatime){
        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        if(this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) return;
        // this.paddle.update(deltatime);
        // this.ball.update(deltatime);

        this.gameObjects.forEach(obj => obj.update(deltatime));
        this.gameObjects = this.gameObjects.filter(obj => !obj.markedForDeletion);
    }

    draw(ctx){
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);

        this.gameObjects.forEach(obj => obj.draw(ctx));
        if(this.gamestate == GAMESTATE.PAUSED){
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth/2, this.gameHeight/2);
        }

        if(this.gamestate == GAMESTATE.MENU){
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Space bar to start....", this.gameWidth/2, this.gameHeight/2);
        }
        if(this.gamestate == GAMESTATE.GAMEOVER){
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameWidth/2, this.gameHeight/2);
        }
    }

    togglepause(){
        
        if(this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }
        else{
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
};