var fixedRect, movingRect;
var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;

var box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="yellow";

  gameObject2=createSprite(300,300,50,50);
  gameObject2.shapeColor="pink";
  gameObject2.velocityX=2
  
  gameObject3=createSprite(800,300,50,50);
  gameObject3.shapeColor="magenta";
  gameObject3.velocityX=-2


  gameObject4=createSprite(700,100,50,50);
  gameObject4.shapeColor="mustard";

  box1=createSprite(200,200,50,50);
  box1.velocityY=2
  box2=createSprite(200,600,50,50);
  box2.velocityY=-2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameObject2.shapeColor="yellow";
  }
 bounceOff(gameObject2,gameObject3);
  
  drawSprites();
}

