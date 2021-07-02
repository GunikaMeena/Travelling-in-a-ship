
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

sea = createSprite(200,200,400,400);
sea.addImage(seaImg);
sea.velocityX = -5;
sea.x = sea.width/2;

ship = createSprite;
ship.addAnimation(shipImg);

//make the ship

}

function draw() {
  background("blue");
  if(sea.x < 0){
  sea.x = sea.width/2
  }

drawsprites
}

