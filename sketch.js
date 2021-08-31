var boxs
function setup() {
  createCanvas(800,800);
  boxs = createSprite(400,400,100,100)
}

function draw() 
{
  background("blue");
  if (keyDown(RIGHT_ARROW)){
    boxs.x = boxs.x +3
  }
  if (keyDown(LEFT_ARROW)){
    boxs.x = boxs.x -3
  }
  if (keyDown(UP_ARROW)){
    boxs.y = boxs.y -3
  }
  if (keyDown(DOWN_ARROW)){
    boxs.y = boxs.y +3
  }
drawSprites()
}




