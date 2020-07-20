var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(200, 200, 80, 80);
  object2 = createSprite(400, 200, 80, 80);
  object1.velocityX = 5;
  object2.velocityX = -5;
  }

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounce(object1,object2);
  //ARGUMENTS
  if(isTouching(object1, movingRect)){
    object1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else {
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}
//ball.isTouching(paddle);
//return value


/*
ARGUMENTS vs PARAMETERS

Arguments - actual values, real objects, used inside function draw()
Parameters - imaginary, non existent, PLACEHOLDERS for arguments
*/