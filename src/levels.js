const level1 = [
    [1,0,1,0,1,0,1,0,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];

function buildLevel(game, level){
    bricks = [];
    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick === 1){
                bricks.push(new Brick(game, {x:80*brickIndex, y: 70 + 24*rowIndex}));
            }
        })
    });
    return bricks;
}