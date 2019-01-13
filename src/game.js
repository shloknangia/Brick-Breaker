// import Paddle from './paddle'
const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4,

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
        this.bricks = [];
        this.levels = [level1, level2];
        this.currentLevel = 0;
        // let brick = new Brick(this,{x: 20, y: 20})
        new InputHandler(this.paddle, this);

    }

    start(){
        
        if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;
        // let bricks = [];
        // for(let i=0;i<10;i++){
        //     bricks.push(new Brick(this,{x: 20 + i*52, y: 30}))
        // }

        this.bricks = buildLevel(game,this.levels[this.currentLevel]);
        this.ball.reset();
        this.gameObjects = [this.ball, this.paddle];
        this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltatime){
        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        if(this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) return;

        if(this.bricks.length === 0){
            // console.log("new level");
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start()
        }

        // this.paddle.update(deltatime);
        // this.ball.update(deltatime);

        // this.gameObjects.forEach(obj => obj.update(deltatime));
        [...this.gameObjects,...this.bricks].forEach(obj => obj.update(deltatime));

        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
    }

    draw(ctx){
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);

        // this.gameObjects.forEach(obj => obj.draw(ctx));
        [...this.gameObjects, ...this.bricks].forEach(obj => obj.draw(ctx));

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