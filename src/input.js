class InputHandler {
    constructor(paddle){
        document.addEventListener('keydown',(event) => {
            // alert(event.keyCode);
            switch(event.keyCode){
                case 37:
                    // alert('move left');
                    paddle.moveLeft();
                    break;
                case 39:
                    // alert('move right');
                    paddle.moveRight();
                    break;
            }
        });


        document.addEventListener('keyup',(event) => {
            // alert(event.keyCode);
            switch(event.keyCode){
                case 37:
                    // alert('move left');
                    if(paddle.currentSpeed<0) paddle.stop();
                    break;
                case 39:
                    // alert('move right');
                    if(paddle.currentSpeed>0) paddle.stop();
                    break;
            }
        });
    }
}