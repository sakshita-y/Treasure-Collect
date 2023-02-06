var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  //if(gameState===PLAY){
  //background(0);
  //boy.x = World.mouseX;
  
  //edges= createEdgeSprites();
  //boy.collide(edges);
  
  //code to reset the background
  //if(path.y > 400 ){
    //path.y = height/2;
  //}
  
    //createCash();
    //createDiamonds();
    //createJwellery();
    //createSword();

    //if (cashG.isTouching(boy)) {
      //cashG.destroyEach();
      //treasureCollection=treasureCollection+50;
    //}
    //else if (diamondsG.isTouching(boy)) {
      //diamondsG.destroyEach();
      //treasureCollection=treasureCollection+100;
      
    //}else if(jwelleryG.isTouching(boy)) {
      //jwelleryG.destroyEach();
      //treasureCollection=treasureCollection+150;
      
    //}else{
      //if(swordGroup.isTouching(boy)) {
        
      //setting game state to end
      //gameState=END;

      //changing boy's animation to game over
      //boy.addAnimation("SahilRunning", endImg);
      //boy.scale = 0.9;
      //boy.x=200;
      //boy.y=300;

      //destroying cash group
      //cashG.destroyEach();
      //cashG.setVelocityYEach(0);
     
      //destorying diamond group
      //diamondsG.destroyEach();
      //diamondsG.setVelocityYEach(0);

      //destorying jwellery group
      //jwelleryG.destroyEach();
      //jwelleryG.setVelocityYEach(0);

      //destorying sword group
      //swordGroup.destroyEach();
      //swordGroup.setVelocityYEach(0);

    //}
  //}
  
  //drawSprites();
  //textSize(20);
  //fill(255);
  //text("Treasure: "+ treasureCollection,150,30);
  //}

  //OR OR OR OR 

  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    boy.collide(edges);
    
    //code to reset the background
    if(path.y > 400 ){
      path.y = height/2;
    }
    
      createCash();
      createDiamonds();
      createJwellery();
      createSword();
  
      if (cashG.isTouching(boy)) {
        cashG.destroyEach();
        treasureCollection=treasureCollection+50;

        //speeding the path to look like boy is getting more energy
        path.velocityY = path.velocityY + 2;

      }
      else if (diamondsG.isTouching(boy)) {
        diamondsG.destroyEach();
        treasureCollection=treasureCollection+100;

        //speeding the path to look like boy is getting more energy
        path.velocityY = path.velocityY + 3;
        
      }else if(jwelleryG.isTouching(boy)) {
        jwelleryG.destroyEach();
        treasureCollection=treasureCollection+150;

        //speeding the path to look like boy is getting more energy
        path.velocityY = path.velocityY + 4;
        
      }else{
        if(swordGroup.isTouching(boy)) {  
        //setting game state to end
        gameState=END;

      }
    }

  } else if (gameState===END){
      //changing boy's animation to game over
      boy.addAnimation("SahilRunning", endImg);
      boy.scale = boy.scale + 0.01;
      boy.x=200;
      boy.y=300;

      //stopping the game over animation from growing
      if(boy.scale >= 0.9) {
        boy.scale = 0.9;
      }

      //destroying cash group
      cashG.destroyEach();
      cashG.setVelocityYEach(0);
     
      //destorying diamond group
      diamondsG.destroyEach();
      diamondsG.setVelocityYEach(0);

      //destorying jwellery group
      jwelleryG.destroyEach();
      jwelleryG.setVelocityYEach(0);

      //destorying sword group
      swordGroup.destroyEach();
      swordGroup.setVelocityYEach(0);

      //stopping the path from moving
      path.velocityY = 0;

      
      
  }

  //if space is pressed, game is resetted
  if (keyWentDown("space")) {
    //resetting treasure score
    treasureCollection=0;

    gameState=PLAY;

    //changing animation of boy & resetting the boy
    boy.addAnimation("SahilRunning", boyImg);
    boy.scale = 0.08;
    boy.x = 200;
    boy.y = 530;
    
    //moving path
    path.velocityY = 4;

  }

  drawSprites();
  textSize(20);
  fill(0);
  text("Treasure: "+ treasureCollection,150,30);
  //game over text to reset game
  textSize(15);
  text("Press Space To Reset Game",100,50);

  if (treasureCollection >= 500) {

    gameState=END;

    textSize(30);
    text("YOU WIN!",150,370);

  } 

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.rotationSpeed = 2;
  cash.velocityY = 3;
  cash.lifetime = 210;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.rotationSpeed = 3;
  diamonds.velocityY = 3;
  diamonds.lifetime = 210;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.rotationSpeed = 4;
  jwellery.velocityY = 3;
  jwellery.lifetime = 210;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.rotationSpeed = 5;
  sword.velocityY = 3;
  sword.lifetime = 210;
  swordGroup.add(sword);
  }
}