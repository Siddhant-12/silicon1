var boy,boyImg,boyright_Img,boyleft_Img,boyfront_img;
var bottle,bottlesGroup,bottle1_Img,bottle2_Img,bottle3_Img,bottle4_Img;
var background,background_Img;
var score=0;

function preload(){

boyImg=loadAnimation("boy back 1.png","boy back 2.png","boy back 3.png","boy back 4.png","boy back 5.png",
"boy back 6.png","boy back 7.png","boy back 8.png","boy back 9.png","boy back 10.png","boy back 11.png");

boyright_Img=loadAnimation("boy right 1.png","boy right 2.png","boy right 3.png","boy right 4.png","boy right 5.png",
"boy right 6.png","boy right 7.png","boy right 8.png","boy right 9.png");

boyleft_Img=loadAnimation("boy left 1.png","boy left 2.png","boy left 3.png","boy left 4.png","boy left 5.png",
"boy left 6.png","boy left 7.png","boy left 8.png","boy left 9.png","boy left 10.png","boy left 11.png");

boyfront_img=loadAnimation("boy front 1.png","boy front 2.png","boy front 3.png","boy front 4.png","boy front 5.png",
"boy front 6.png","boy front 7.png","boy front 8.png","boy front 9.png","boy front 10.png");

background_Img=loadImage("level1_bg.jpg");

bottle1_Img=loadImage("bottle1.png");
bottle2_Img=loadImage("bottle2.png");
bottle3_Img=loadImage("bottle3.png");
bottle4_Img=loadImage("bottle4.png");
}

function setup(){
createCanvas(windowWidth, windowHeight);

    boy=createSprite(600,200);
    boy.addImage(boyImg);
     boy.scale=0.5;

     bottlesGroup= new Group();

     
}

function draw(){
    background(background_Img);
 

   spawnBottles();

    if(keyDown("right_arrow")){
        boy.changeAnimation(boyright_Img);
        boy.x=boy.x+5;
      }

      if(keyDown("left_arrow")){
          boy.changeAnimation(boyleft_Img);
        boy.x=boy.x-5;
      }

      if(keyDown("up_arrow")){
        boy.x=boy.y+5;
      }

      if(keyDown("down_arrow")){
          boy.changeAnimation(boyfront_img);
        boy.x=boy.y-5;
      }

      if(boy.isTouching(bottlesGroup)){
        score += 1;
        bottlesGroup.destroyEach();
      }

      drawSprites()
}

    noStroke();
    fill(1);
    textSize(20);
    text("score:"+score,300,40);
  

function spawnBottles(){

    if (frameCount % 80 === 0) {
        var bottle= createSprite(50,50);
         bottle.x = randomNumber(0, 400);
          bottle.y = randomNumber(0, 400);
         
         
          bottle.scale=0.58;
          bottlesGroup.add(bottle);
        
        var rand = Math.round(random(1,4));
         switch(rand) {
        case 1 : bottle.setAnimation(bottle1_Img);
        break;
        
        case 2 : bottle.setAnimation(bottle2_Img);
        break;
        
       case 3 : bottle.setAnimation(bottle3_Img);
        break;
        
        case 4:  bottle.setAnimation(bottle4_Img);
        break;
        default: break;
        
        
      }
      
      bottles.setLifetimeEach(15);
        
      
      }
     

}
