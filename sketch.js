var START=1;
var PLAY=2;
var END=0;
var gameState= START;
var LEVEL2=3;


var bucket,bucketImg;
var droplet,dropletImg,dropletGroup,dropfallImg;
var win,winImg;
var input,button,name1

var background2,background_level2Img;
var bg,bgImg;

var restart,restartImg;
var time;

var dropletSound;

var bglevel2;
var score=0;
var bottle

function preload(){
 
  bucketImg=loadImage("bucket.png");
   tapImg=loadImage("tap 1.png");
  dropletImg=loadImage("droplet.png");
  
  bglevel2=loadImage("level1_bg.jpg")
  background_level2Img=loadImage("background2.jpg");
 bgImg=loadImage("basicbg.jpg");
  
  restartImg=loadImage("restart.png");
  
  winImg=loadImage("win.png");

  dropletSound= loadSound("droplet sound.mp3");

  dropfallImg= loadAnimation("dropfall.png")
  bottle1_Img=loadImage("bottle1.png");
bottle2_Img=loadImage("bottle2.png");
bottle3_Img=loadImage("bottle3.png");
bottle4_Img=loadImage("bottle4.png");
}



function setup() 
 {
  createCanvas(windowWidth, windowHeight);
   
  var timer=second()

      bucket=createSprite(52,340);
      bucket.addImage(bucketImg);
      bucket.scale=0.3;
      bucket.visible=false
      
        win=createSprite(200,160);
        win.addImage(winImg);
        win.scale=0.2;
        win.visible=false;
       
     
  
         restart=createSprite(200,80);
        restart.addImage(restartImg);
        restart.scale=0.3
      restart.visible=false;
    
     dropletGroup = new Group();
     bottlesGroup = new Group();
    
     input=createInput("Name")
     input.position(width/2-60,displayHeight/2)

     button = createButton("Enter")
     button.position(width/2,displayHeight/2+40)

     //may22
     bottle=createSprite(100,height-50,50,50)
     bottle.addImage( bottle1_Img)
     bottle.scale=0.5
   bottle.visible=false

   //score=0;
  

   
  
}

function draw() {
  background(bgImg);
   
  timeit()
  if(gameState=== START){
    if(keyDown("space")){
      gameState = PLAY;
     }
   
   
   
  }
  
  button.mousePressed(()=>{
    input.hide()
    button.hide()
    var name=input.value()
    name1=name
    gameState=PLAY
   
  })
  
  if(gameState===PLAY){
    
   background(background_level2Img);
   fill("black")
   textSize(20)
   text("Welcome " + name1,600,50)
 
     restart.visible=false;
    
 bucket.visible=true
 


 noStroke();
 fill(1);
 textSize(20);
 text("score:"+score,300,40);
 text("timer:"+timer,width-width/4,40);

    spawnDroplets();
 
    
      if(keyDown("right_arrow")){
      bucket.x=bucket.x+5;
    }
      
    if(keyDown("left_arrow")){
      bucket.x=bucket.x-5;
    }
    
    if (dropletGroup.isTouching(bucket)) {
   
     score += 1;
    dropletGroup.destroyEach();
    dropletSound.play();

  }
    
  


   /* 
   if(score===1){
      
    gameState = END;
    } */

// new codes added on 22/may
    if(score===1){
      
      gameState = LEVEL2;
      background(bglevel2) 
      //bottle.visible=true
      } 
      
  } 
  
  if(gameState === LEVEL2){
   
    
  
  text("Hi welcome to next level", width/2,height/2)
  //spawnBottles()
  bottle.visible=true
  drawSprites()
  bucket.hide() 



  }
 


 drawSprites();
  
  
  if(gameState === START){
    //noStroke();
    stroke(2)
    strokeWeight(4)
    fill(255);
    textSize(30);

  text("Press Space To Start",width/2-200,200);
    text("Be ready to collect all the water droplets",width/2-300,250)
    text("All the best from my side",width/2-200,310);
    text("go ahead and take my challenge",width/2-220,360)
  }
  
  
  
  
  

  
    }
 

function spawnDroplets(){
  if(frameCount % 20 === 0){
  waterdroplet= createSprite(20,130,10,10);
  var rand =Math.round(random(20,windowWidth-20))
  waterdroplet.x=rand
  waterdroplet.addImage("droplet",dropletImg);
  waterdroplet.y=Math.random(round(20,150));
  waterdroplet.velocityY=15;
  waterdroplet.scale =0.08;
  dropletGroup.add(waterdroplet);
  
}
}


function reset(){
  gameState=PLAY;
  restart.visible=false;
  
 score=0;
}
  
    
  


  
function timeit(){
  timer=second()
}