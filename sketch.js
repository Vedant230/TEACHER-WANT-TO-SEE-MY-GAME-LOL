var lightningBolt,tyres,heartImg,track;
var bgImg,groundImg,trackImg,TyresImg;
var obstacleGroup;
var PLAY=1,END=2,gameState;

gameState = PLAY

function preload(){
  lightningBoltImg=loadImage("assets/car1.jpg");
  trackImg=loadImage("assets/track.png");
  TyresImg=loadImage("assets/Tyres.png");
  car3=loadImage("assets/car3.png");
  car4=loadImage("assets/car4.png");
  heartImg=loadImage("assets/heart.png")
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  lightningBolt=createSprite(displayWidth/2,displayHeight-65,50,50);
  lightningBolt.addImage(lightningBoltImg);
  lightningBolt.scale=0.55;
  track=createSprite(10,10,windowWidth-10,windowHeight-20);
  track.addImage(trackImg);
  track.scale=3.5;
  heart=createSprite(50,50,50,50)
  heart.addImage(heartImg)
  heart.scale=0.09

  obstacleGroup = new Group();
  
}

function draw(){
  background("white");
  fill("purple");
  text(mouseX+","+mouseY,mouseX,mouseY);
  if(keyCode===87){
    lightningBolt.velocityY=-5;
    lightningBolt.addImage(lightningBoltImg);
  }
  if(keyCode===68){
    lightningBolt.velocityX=5;
    lightningBolt.addImage(car3);
  }
  if(keyCode===65){
    lightningBolt.velocityX=-5;
    lightningBolt.addImage(car4);
  }
  


  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%120===0){
  tyres=createSprite(500,500,50,50);
  tyres.addImage(TyresImg);
  tyres.x=Math.round(random(120,1200));
  tyres.y=Math.round(random(120,1200));
  tyres.scale=0.3;
  tyres.depth=lightningBolt.depth;
  lightningBolt.depth+=1;
  obstacleGroup.add(tyres);
  }
}

