var PLAY=1;
var END=0;
gameState=1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,BananaGroup
var ground;
var score;
var r
function preload(){
  
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeystop=loadImage("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)
//create a banana group
BananaGroup= new Group()
obstacleGroup=new Group()  

//monkey animation add
monkey=createSprite(50,270,20,50)
monkey.addAnimation("moving",monkey_running)
monkey.scale=(0.1)
  
//create ground
ground=createSprite(400,300,1200,10) 
ground.x = ground.width /2;
  
score=0;    

}

function draw() {
  //velocity to gound
  ground.velocityX=-5
  
  if(ground.x<0){
    ground.x=ground.width/2
    }
  
  //add Gravity
monkey.velocityY = monkey.velocityY + 0.8
  
//prevent the monkey from falling down
  monkey.collide(ground)
  
  
  background("pink")
  text("score:"+score,30,40)
  if (gameState === PLAY){
  
    food();
    obstacles();
    
   if(monkey.isTouching(BananaGroup)){
     score=score+1
     BananaGroup.destroyEach();
   } 
  
    
    
    //when space key is pressed make the monkey jump
  if(keyDown("space")&& monkey.y >100) {
  monkey.velocityY = -20;
    }
  
 //change the gamestate to END when the monkry touches the obstacles   
if(monkey.isTouching(obstacleGroup)){
  gameState=END
}    
  
  
    
  }else if(gameState===END){
    BananaGroup.destroyEach()
    obstacleGroup.destroyEach()

    BananaGroup.setvelocityX=0
    obstacleGroup.setvelocityX=0
    
    
  }
  
  
    

  


  
  
  
  drawSprites();
  
}

//create a function
function food(){
   if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
     //generate random numbers
    banana.y = Math.round(random(120,200));
     //add Image of banana
    banana.addImage(bananaImage);
    banana.scale = 0.1;
     //give velocity
    banana.velocityX = -4;
     //add lifetime
     banana.lifetime=200;
     
     BananaGroup.add(banana)
    

}


}
//create a function for obstacles
function obstacles(){
   if (frameCount % 300 === 0){
var obstacle = createSprite(400,270,10,40);
var r = Math.round(random(1,6));
obstacle.addImage(obstacleImage)
obstacle.scale=0.2
obstacle.velocityX=-3 
obstacleGroup.add(obstacle)
obstacle.lifetime=200;     
     
     

     
   }
  
  
  
  
  
  
  
  
  
}