var gameState = 0;
var gs0bg, logo,logoImg, start, track, trackImg;
var boy,boyImg;
var bgS;
var invGround;
var egypt, egyptImg;
var diamond, diamondImg;
var mummy, mummyImg;

function preload(){
    gs0bg = loadImage("./ps/bg1.jpg");
    logoImg = loadImage("./ps/logo.jpg");
    trackImg = loadImage("./ps/path.jpg");
    boyImg = loadImage("./ps/boy.png");
    bgS = loadSound("./ps/bgmusic.mp3");
    egyptImg = loadImage("./ps/egypt.png");
    diamondImg = createSprite("/ps/diamond.png");
    mummyImg = loadImage("./ps/mummy.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    start = createButton("START");
    start.position(displayWidth/2-30, displayHeight/2+100);

    logo = createSprite(displayWidth/2-50,150);
    logo.addImage(logoImg);
    logo.scale = 0.1;

    track = createSprite(390,390,displayWidth,displayHeight);
    track.addImage(trackImg);
    track.scale = 1.9;

    boy = createSprite(60,displayHeight-250);
    boy.addImage(boyImg);
    boy.scale = 0.5;

    invGround = createSprite(0,displayHeight,displayWidth,10);

   
    
}

function draw(){
    //bgS.loop();
  if(gameState === 0){
    background(gs0bg);
    
    track.visible = false;
    boy.visible = false;
    invGround.visible = false;
    textStyle(BOLDITALIC)
    textSize(30);
    fill("black");
    text("Hey! WELCOME to the Cave Adventures!",displayWidth/2-300,displayHeight/2-90);
    text("There are many rumours in the village about Gold Treasure in the Cave Of Tharsis",displayWidth/2-600,displayHeight/2-50);
    text("A boy went there to find it!",displayWidth/2-300+10,displayHeight/2-10);
    text("Now, you are going to help that boy...",displayWidth/2-300,displayHeight/2+30);
    fill("red");
    text("CAUTION: Don't touch any of obstacle or you have to start again!!!",displayWidth/2-550,displayHeight/2+70);
  
    start.mousePressed(GS1);
    
  }
  
  boyJump();
  
  drawSprites();
  
}

function GS1(){
  
  gameState = 1;  
  track.visible = true;
  track.velocityX = -2;
  boy.visible = true;
  logo.visible = false;
  start.hide();
  invGround.visible = false;
  spawnObstacles(); 
  spawnMummy();
     
}

function boyJump(){

  if(keyDown("W") && boy.y >= displayHeight-300){
    boy.velocityY = -12;   
  }
  boy.velocityY = boy.velocityY+0.8;
  boy.collide(invGround);
}



function spawnObstacles(){
 
    if(frameCount%300 === 0){
      egypt = createSprite(displayWidth,displayHeight-100,10,40);
      //var diamond = createSprite(displayWidth-100,displayHeight-80,10,40);
      //diamond.addImage(diamondImg);
      egypt.addImage(egyptImg);
      egypt.scale = 0.3;
      egypt.velocityX = -3;
      egypt.lifetime = 600;
      //diamond.scale = 0.5;
      //diamond.velocityX = -3;
      //diamond.lifetime = 600;
    }
   
}   

function spawnMummy(){
  
  if(frameCount%450 === 0){
    mummy = createSprite(displayWidth,displayHeight-100,10,40);
    mummy.addImage(mummyImg);
    mummy.scale = 0.3;
    mummy.velocityX = -3;
    mummy.lifetime = 600;
  }
}
//sounds
//genie
//spawn all obstacles
//touches
//button panel on screen