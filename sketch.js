var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
  

  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white")
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50)
  
  if(keyDown("UP_ARROW") && monkey.y >= 315){
      monkey.velocityY = -12
  }
  if(monkey.y < 315){
  monkey.velocityY = monkey.velocityY + 0.2
}
  if(monkey.y > 315){
    monkey.y = 315
  }
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  
  monkeyGravity();
  spawnFruit();
  spawnObstacles();

  drawSprites();
}
function restart() {
  
}
function monkeyGravity() {
   if(keyDown("UP_ARROW") && monkey.y >= 315){
      monkey.velocityY = -15
  }
  if(monkey.y < 315){
  monkey.velocityY = monkey.velocityY + 0.8
}
  if(monkey.y > 315){
    monkey.y = 315
  }
  if(ground.x < 0){
    ground.x = ground.width/2
  }
}

function spawnFruit(){
  if (frameCount % 80 === 0){
    banana = createSprite(350,20)
    banana.scale = 0.1
    banana.addImage("banana",bananaImage)
    banana.y = Math.round(random(120,200))
    banana.velocityX = -3
    banana.lifetime = 600
    foodGroup.add(banana)
  }
}
function spawnObstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(350,20)
    obstacle.scale = 0.1
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.y = Math.round(random(120,200))
    obstacle.velocityX = -3
    obstacle.lifetime = 600
    obstacleGroup.add(obstacle)
  }
}