class Ball {
    constructor(game){
        this.image = document.getElementById('img_ball');
        this.speed = {
            x: 5,
            y : -2
        };
        
        this.size = 16;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.reset();
    }


    reset(){
        this.position = {
            x: 10,
            y: 400,
        };

        this.speed = {
            x: 5,
            y : -2
        };
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime){
        // console.log(this.game.paddle.position.x);
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;        

        if(this.position.x > this.gameWidth - this.size || this.position.x < 0 ){
            this.speed.x = -this.speed.x;
        }
        if(this.position.y <0){
            this.speed.y = -this.speed.y;
        }
        // bottom of game
        if(this.position.y > this.gameHeight - this.size){
            this.game.lives--;
            this.reset();
        }

        if(detectCollision(this, this.game.paddle)){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}