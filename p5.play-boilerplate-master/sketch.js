var bullet,wall;
var speed,weight,thickness;
var deformation;
var trip = 0;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1500,height/2,thickness,height/2);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed/2;
  //bullet.bounceOff(wall);
  if(bullet.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    trip = trip + 1;
    bullet.velocityX = 0;
    if(trip > 0 && deformation < 10){
      wall.shapeColor = color(0,255,0);
    } 
    if(trip > 0 && deformation > 10 ){
      wall.shapeColor = color(255,0,0);
    }  
  }
  drawSprites();
}
