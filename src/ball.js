class Ball {
    constructor(game){
        this.image = document.getElementById('img_ball');
        this.speed = {
            x: 5,
            y :3
        };
        this.position = {
            x: 10,
            y: 10,
        };
        this.size = {
            width: 16,
            height: 16,
        };
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;        

        if(this.position.x > this.gameWidth - this.size.width || this.position.x < 0 ){
            this.speed.x = -this.speed.x;
        }
        if(this.position.y > this.gameHeight - this.size.height || this.position.y <0){
            this.speed.y = -this.speed.y;
        }
    }
}