var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,400,50,50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,400,80,50);
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect.velocityX=5;
  movingRect.velocityX=-5;
}

function draw() {
  background(0);  

  bounceOff(movingRect,fixedRect);
 
  drawSprites();
}

function bounceOff(ob1,ob2){
  if(ob1.x-ob2.x <ob2.width/2+ob1.width/2&&
    ob2.x-ob1.x <ob2.width/2+ob1.width/2)
    {
     ob1.velocityX=ob1.velocityX*(-1);
    ob2.velocityX=ob2.velocityX*(-1);
    }

  if(ob1.y -ob2.y<ob2.height/2+ob1.height/2&&
    ob1.y-ob1.y<ob2.height/2+ob2.height/2)
  {
    ob1.velocityY=ob1.velocityY*(-1);
    ob2.velocityY=ob2.velocityY*(-1);
}
 
}