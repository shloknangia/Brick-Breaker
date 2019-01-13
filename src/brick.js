class Brick {
    constructor(game, position){
        this.image = document.getElementById('img_brick');
        this.position = position;
        this.size = {
            width: 52,
            height: 24,
        };
        
        this.game = game;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
    }

    update(){

    }
}