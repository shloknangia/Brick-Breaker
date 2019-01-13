const level2 = [
    [1,0,1,0,1,0,1,0,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];

const level1 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0],
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