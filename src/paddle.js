class Paddle {
    constructor(game){
        this.width = 150;
        this.height = 30;
        this.maxSpeed = 10;
        this.currentSpeed = 0;
        this.gameWidth = game.gameWidth;

        this.position = {
            x: (game.gameWidth/2 - this.width/2),
            y: (game.gameHeight - this.height - 10),
        }
    }

    moveLeft(){
        this.currentSpeed = -this.maxSpeed;
    }

    moveRight(){
        this.currentSpeed = this.maxSpeed;
    }
    
    stop(){
        this.currentSpeed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = '#0ff';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        // if(!deltaTime) return;
        this.position.x += this.currentSpeed;// 5 / deltaTime;
        if(this.position.x <0){
            this.position.x = 0;
        }
        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }
    }
}

// module.exports = Paddle;