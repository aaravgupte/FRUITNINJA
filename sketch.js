var PLAY = 1;
var END = 0;
var gameState=1;
var sword,swordImage;
var fruit1,fruit2,fruit3,fruit4,fruit;
var monster,monsterImage;
var fruitGroup,enemyGroup;
var score = 0;
var gameOverImage;






function preload(){
swordImage = loadImage("sword.png");  
fruit1 = loadImage("fruit1.png");
fruit2 = loadImage("fruit2.png");
fruit3 = loadImage("fruit3.png");
fruit4 = loadImage("fruit4.png");
monsterImage = loadAnimation("alien1.png","alien2.png"); 
gameOverImage = loadImage("gameover.png");


}

function setup(){
 createCanvas(600,600);
 sword = createSprite(40,200,20,20);
 sword.addImage(swordImage); 
 fruitGroup = new Group(); 
 enemyGroup = new Group(); 
 
  
  

  
}
  
  function draw(){
background("cyan");
if(gameState == PLAY){
 sword.x=mouseX; 
 sword.y=mouseY;
 Enemy();
 fruits();
 if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach(); 
   score=score+2
 } 
  if(enemyGroup.isTouching(sword)){
  gameState=END;
  }  
}
if( gameState == END){
 
 sword.addImage(gameOverImage);
 sword.x=300;
 sword.y=300;  
 
  
  
  
  
  
  
 
}  
 drawSprites(); 
  
  
  text("score="+ score,500,500); 
 } 
  
function fruits(){
if(World.frameCount%80===0){
fruit=createSprite(400,20,20);  
fruit.scale=0.2;  

  r=Math.round(random(1,4));
  if(r == 1){
   fruit.addImage(fruit1);   
  }else if (r == 2){
   fruit.addImage(fruit2); 
  }else if (r == 3){
    fruit.addImage(fruit3);
  }else {
   fruit.addImage(fruit4); 
  }
  
  fruit.y=Math.round(random(50,340));
  fruit.velocityX=-7;
  fruit.setLifetime=100;
  
  fruitGroup.add(fruit);

 }  
   }

 function Enemy(){
  if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);  
  monster.addAnimation("moving",monsterImage);
  monster.y=Math.round(random(100,300));  
  monster.velocityX=-8;
  monster.setLifetime=50;
  
  enemyGroup.add(monster)
    
    
  } 
   
   
 }

  


