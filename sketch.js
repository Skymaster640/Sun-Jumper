var normal;
var flying;
var player;
var playerImg;
var playerState = "normal";
var playerDirection = "Left";
var jumpCount = 0;
var testsunmedallion;
var medallionImg;
var medalCount = 0;
var slash;
var slashImg;
var levelCount = 0;
var lifeCount = 3;
var lifeCounter;
var lifeImg;
var testbwaller;
var bwallerImg;
var testground;
var testground2;
var testgroundhitbox;
var testcheckpoint;
var platformGroup;
var flagImg;
var checkpointcounter;
var testcloud;
var cloudImg;
var testtempCloud;
var testspring;
var springImg;
var gameState = "play";
var testlifeup;
var lifeupImg;
var testconveyorR;
var conveyorImgR;
var testinvisibleconveyorR;
var testconveyorL;
var conveyorImgL;
var testinvisibleconveyorL;
var testshadowling;
var shadowImg1;
var shadowImg2;
var testladder;
var ladderImg;
var testflame;
var flameImg;
var testfrostbird;
var birdImg;
var testeggbot;
var eggImg;
var testicicle;
var icicleImg;
var testwingleaf;
var leafImg;
var testwall;

//level 1
var ocean;
var oceanImg;
var ground;
var groundhitbox;
var ground2;
var groundhitbox2;
var ground3;
var groundhitbox3;
var ground4;
var groundhitbox4;
var ground5;
var groundhitbox5;
var ground6;
var groundhitbox6;
var ground7;
var groundhitbox7;
var ground8;
var groundhitbox8;

var megabwaller;
var Mbwallerhealth = 10


var walkImgL;
var walkImgR;
var playerImgL;
var playerImgR;
var playerjumpR;
var playerjumpL;
var victoryImg;
var frostbirdImgR;
var frostbirdImgL;



function preload(){
  playerImg = loadAnimation("Images/Sunny.png");
  lifeImg = loadAnimation("Images/Placeholder_Lifecount0.png");
  bwallerImg = loadAnimation("Images/Bwaller.png");
  flagImg = loadAnimation("Images/Checkpoint.png");
  springImg = loadAnimation("Images/Placeholder_Spring0.png");
  cloudImg = loadAnimation("Images/Cloud.png");
  lifeupImg = loadAnimation("Images/Placeholder_Heart0.png");
  conveyorImgR = loadAnimation("Images/Placeholder_ConveyorR0.png");
  conveyorImgL = loadAnimation("Images/Placeholder_ConveyorL0.png");
  shadowImg1 = loadAnimation("Images/Placeholder_Shadow0.png");
  shadowImg2 = loadAnimation("Images/Placeholder_ShadowDown0.png");
  ladderImg = loadAnimation("Images/Placeholder_Ladder0.png");
  flameImg = loadAnimation("Images/Placeholder_Fireball0.png");
  slashImg = loadAnimation("Images/Placeholder_Slash0.png");
  birdImg = loadAnimation("Images/Placeholder_Bird0.png");
  eggImg = loadAnimation("Images/Eggbot.png");
  leafImg = loadAnimation("Images/Wingleaf.png");
  icicleImg = loadAnimation("Images/Icicle.png");
  medallionImg = loadAnimation("Images/Placeholder_Medallion0.png");


  playerImgR = loadAnimation("Images/Sunny_IdleRight.png");
  playerImgL = loadAnimation("Images/Sunny_IdleLeft.png");
  playerjumpL = loadAnimation("Images/Sunny_JumpLeft.png");
  playerjumpR = loadAnimation("Images/Sunny_JumpRight.png");
  walkImgL = loadAnimation("Images/Sunny_Walkleft.png","Images/Sunny_Walkleft2.png");
  walkImgR = loadAnimation("Images/Sunny_Walkright.png","Images/Sunny_Walkright2.png");
  victoryImg = loadAnimation("Images/Sunny_Win.png");

  //level 1
  oceanImg = loadAnimation("Images/Ocean0.png");

  frostbirdImgL = loadAnimation("Images/FrostbirdL.png");
  frostbirdImgR = loadAnimation("Images/FrostbirdR.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  testground = createSprite(windowWidth/2,600,10000,10);
  testgroundhitbox = createSprite(windowWidth/2,599,10000,10);
  testgroundhitbox.visible = false;
  testground2 = createSprite(2000,300,200,10);
  player = createSprite(10000,512,10,10);
  player.addAnimation("player",playerImg);
  player.scale=0.5;

  //lifeCounter = createSprite(player.x - 550,player.position.y - 400,10,10);
  //lifeCounter.addAnimation("regular",lifeImg);

  platformGroup = new Group();
  platformGroup.add(testgroundhitbox);
  platformGroup.add(testground2);

  testbwaller = createSprite(1300,500,10,10);
  testbwaller.addAnimation("normal",bwallerImg);
  testbwaller.scale = 0.45;

  testcheckpoint = createSprite(100,500,10,10);
  testcheckpoint.addAnimation("Flag",flagImg);
  testcheckpoint.scale = 0.5;

  checkpointcounter = createSprite(10000,512,10,10);
  checkpointcounter.visible = false;

  testtempCloud = createSprite(400,450,50,10);
  testtempCloud.visible = false;

  testcloud = createSprite(400,450,50,10);
  testcloud.addAnimation("Cloud",cloudImg);
  testcloud.scale = 0.5;
  platformGroup.add(testtempCloud);

  testspring = createSprite(400,420,10,10);
  testspring.addAnimation("Spring",springImg);
  testspring.scale = 0.2;

  testlifeup = createSprite (800,420,10,10);
  testlifeup.addAnimation("Heart",lifeupImg);
  testlifeup.depth = player.depth - 1;
  testlifeup.scale = 0.5;

  testconveyorR = createSprite(1000,300,10,10);
  testconveyorR.addAnimation("Right",conveyorImgR);
  testconveyorR.scale=0.5;

  testinvisibleconveyorR = createSprite(1000,280,105,10);
  testinvisibleconveyorR.visible = false;

  testconveyorL = createSprite(1250,300,10,10);
  testconveyorL.addAnimation("Left",conveyorImgL);
  testconveyorL.scale=0.5;

  testinvisibleconveyorL = createSprite(1250,280,105,10);
  testinvisibleconveyorL.visible = false;

  platformGroup.add(testinvisibleconveyorL);
  platformGroup.add(testinvisibleconveyorR);

  testshadowling = createSprite (200,0,10,10);
  testshadowling.addAnimation("Alive",shadowImg1);
  testshadowling.addAnimation("Dead",shadowImg2);
  testshadowling.scale = 0.5;

  testladder = createSprite(1125,250,10,10);
  testladder.addAnimation("Goal",ladderImg);
  testladder.scale =  0.5;

  testflame = createSprite(1500,windowHeight/2,10,10);
  testflame.addAnimation("fireball",flameImg);
  testflame.scale = 0.2;
  testflame.velocityY = 7;

  testfrostbird = createSprite(-500,300,10,10);
  testfrostbird.addAnimation("idle",birdImg);
  testfrostbird.scale=0.5;
  testfrostbird.velocityY = 7;

  testeggbot = createSprite(-700,580,10,10);
  testeggbot.addAnimation("eggbot",eggImg);
  testeggbot.scale=0.5;
  testeggbot.depth = player.depth-1;

  testwingleaf = createSprite(-600,580,10,10);
  testwingleaf.addAnimation("leaf",leafImg);
  testwingleaf.scale = 0.2;

  testsunmedallion = createSprite(2000,580,10,10);
  testsunmedallion.addAnimation("suncoin",medallionImg);
  testsunmedallion.scale = 0.5;
  testsunmedallion.depth = player.depth - 1;

  testicicle = createSprite(2000,338,10,10);
  testicicle.addAnimation("icicle",icicleImg);
  testicicle.scale = 0.5;

  testwall = createSprite(5000,500,30,3000);














  //Level 1
  ocean = createSprite(8750,745,10,10);
  ocean.addAnimation("water",oceanImg);
  ocean.scale = 3;

  ground = createSprite(10000,700,1000,300);
  groundhitbox = createSprite(10000,699,1000,300);
  groundhitbox.visible = false;
  platformGroup.add(groundhitbox);
  ground.shapeColor = "#838373";

  ground2 = createSprite(11000,750,1000,600);
  groundhitbox2 = createSprite(11000,749,1000,600);
  groundhitbox2.visible = false;
  platformGroup.add(groundhitbox2);
  ground2.shapeColor = "#31AA15";

  frostbird = createSprite(11250,520,10,10);
  frostbird.scale = 0.5;
  frostbird.velocityY = frostbird.velocityY + 7;
  frostbird.addAnimation("birdleft",frostbirdImgL);
  frostbird.addAnimation("birdright",frostbirdImgR);

  ground3 = createSprite(12000,800,1000,400);
  groundhitbox3 = createSprite(12000,799,1000,400);
  groundhitbox3.visible = false;
  platformGroup.add(groundhitbox3);
  ground3.shapeColor = "#31AA15";

  frostbird2 = createSprite(12000,400,10,10);
  frostbird2.scale = 0.5;
  frostbird2.velocityY =  frostbird2.velocityY + 7;
  frostbird2.addAnimation("birdleft",frostbirdImgL);
  frostbird2.addAnimation("birdright",frostbirdImgR);

 


  roof = createSprite(12000,0,2000,300);
  roof.shapeColor = "black";

  ground4 = createSprite(13500,800,1000,400);
  groundhitbox4 = createSprite(13500,799,1000,400);
  groundhitbox4.visible = false;
  platformGroup.add(groundhitbox4);
  ground4.shapeColor = "#70B061";

  ground5 = createSprite(15000,800,1000,400);
  groundhitbox5 = createSprite(15000,799,1000,400)
  groundhitbox5.visible = false;
  platformGroup.add(groundhitbox5);
  ground5.shapeColor = "#70B061";


  frostbird3 = createSprite(15000,550,10,10);
  frostbird3.scale = 0.5;
  frostbird3.velocityY = frostbird3.velocityY + 7;
  frostbird3.addAnimation("birdleft",frostbirdImgL);
  frostbird3.addAnimation("birdright",frostbirdImgR);

  ground6 = createSprite(16500,800,1000,400);
  groundhitbox6 = createSprite(16500,799,1000,400)
  groundhitbox6.visible = false;
  platformGroup.add(groundhitbox6);
  ground6.shapeColor = "#31AA15";

  ground7 = createSprite(17700,800,1500,1100)
  groundhitbox7 = createSprite(17700,799,1500,1100);
  groundhitbox7.visible =false;
  platformGroup.add(groundhitbox7);
  ground7.shapeColor = "#9AD98B";

  eggbot = createSprite(16900,300,10,10);
  eggbot.addAnimation("eggbot",eggImg);
  eggbot.scale = 0.5;
  eggbot.depth = player.depth - 1;
  eggbot.velocityY = 10;

  cloud = createSprite(17700,100,10,10);
  cloud.addAnimation("cloud",cloudImg);
  cloud.scale = 0.5;

  tempcloud = createSprite(17700,99,50,10);
  tempcloud.visible = false;

  wingleaf = createSprite(17700,100,10,10);
  wingleaf.addAnimation("leaf",leafImg);
  wingleaf.scale = 0.1;

  heart = createSprite(18900,560,10,10);
  heart.addAnimation("heart",lifeupImg);
  heart.scale = 0.5;

  ground8 = createSprite(20000,1000,1500,800);
  groundhitbox8 = createSprite(20000,999,1500,800);
  groundhitbox8.visible = false;
  platformGroup.add(groundhitbox8);
  ground8.shapeColor = "#31AA15";

  bwaller = createSprite(20000,600,10,10);
  bwaller.addAnimation("bwaller",bwallerImg);
  bwaller.velocityY = 10;
  bwaller.scale = 0.45;


  checkpoint1 = createSprite(13177,563,10,10);
  checkpoint1.addAnimation("flag",flagImg);
  checkpoint1.scale =  0.5;

  checkpoint2 = createSprite(19500,562,10,10);
  checkpoint2.addAnimation("flag",flagImg);
  checkpoint2.scale = 0.5;


  roof2 = createSprite(23000,-120,5000,800);

  ground9 = createSprite(23350,1200,4700,800);
  groundhitbox9 = createSprite(23350,1199,4700,800);
  groundhitbox9.visibile = false;
  platformGroup.add(groundhitbox9);
  ground9.shapeColor = "#000000"



  icicle1 = createSprite(21200,310,10,10);
  icicle1.addAnimation("icicle",icicleImg);
  icicle1.scale = 0.5;

  icicle2 = createSprite(21500,310,10,10);
  icicle2.addAnimation("icicle",icicleImg);
  icicle2.scale = 0.5;

  icicle3 = createSprite(21800,310,10,10);
  icicle3.addAnimation("icicle",icicleImg);
  icicle3.scale = 0.5;

  icicle4 = createSprite(22100,310,10,10);
  icicle4.addAnimation("icicle",icicleImg);
  icicle4.scale = 0.5;

  icicle5 = createSprite(22400,310,10,10);
  icicle5.addAnimation("icicle",icicleImg);
  icicle5.scale = 0.5;

  icicle6 = createSprite(22700,310,10,10);
  icicle6.addAnimation("icicle",icicleImg);
  icicle6.scale = 0.5;
  
  icicle7 = createSprite(23000,310,10,10);
  icicle7.addAnimation("icicle",icicleImg);
  icicle7.scale = 0.5;

  icicle8 = createSprite(23300,310,10,10);
  icicle8.addAnimation("icicle",icicleImg);
  icicle8.scale = 0.5;

  icicle9 = createSprite(23600,310,10,10);
  icicle9.addAnimation("icicle",icicleImg);
  icicle9.scale = 0.5;

  icicle10 = createSprite(23900,310,10,10);
  icicle10.addAnimation("icicle",icicleImg);
  icicle10.scale = 0.5;

  icicle11 = createSprite(24200,310,10,10);
  icicle11.addAnimation("icicle",icicleImg);
  icicle11.scale = 0.5;

  icicle12 = createSprite(24500,310,10,10);
  icicle12.addAnimation("icicle",icicleImg);
  icicle12.scale = 0.5;

  icicle13 = createSprite(24800,310,10,10);
  icicle13.addAnimation("icicle",icicleImg);
  icicle13.scale = 0.5;
  
  icicle14 = createSprite(25100,310,10,10);
  icicle14.addAnimation("icicle",icicleImg);
  icicle14.scale = 0.5;


  ground10 = createSprite(26360,1200,500,800);
  groundhitbox10 = createSprite(26360,1199,500,800);
  groundhitbox10.visible = false;
  platformGroup.add(groundhitbox10);
  ground10.shapeColor = "#31AA15";

  checkpoint3 = createSprite(26370,763,10,10);
  checkpoint3.addAnimation("flag",flagImg);
  checkpoint3.scale = 0.5;


  cloud2 = createSprite(27000,763,10,10);
  cloud2.addAnimation("cloud",cloudImg);
  cloud2.scale = 0.5;

  tempcloud2 = createSprite(27000,763,50,10);
  tempcloud2.visible = false;
  

  cloud3 = createSprite(27400,790,10,10);
  cloud3.addAnimation("cloud",cloudImg);
  cloud3.scale = 0.5;

  tempcloud3 = createSprite(27400,790,50,10);
  tempcloud3.visible = false;

  cloud4 = createSprite(27800,740,10,10);
  cloud4.addAnimation("cloud",cloudImg);
  cloud4.scale = 0.5;

  tempcloud4 = createSprite(27800,740,50,10);
  tempcloud4.visible = false;

  cloud5 = createSprite(28200,760,10,10);
  cloud5.addAnimation("cloud",cloudImg);
  cloud5.scale = 0.5;

  tempcloud5 = createSprite(28200,760,50,10);
  tempcloud5.visible = false;

  cloud6 = createSprite(28600,763,10,10);
  cloud6.addAnimation("cloud",cloudImg);
  cloud6.scale = 0.5;

  tempcloud6 = createSprite(28600,763,50,10);
  tempcloud6.visible = false;

  cloud7 = createSprite(29000,790,10,10);
  cloud7.addAnimation("cloud",cloudImg);
  cloud7.scale = 0.5;

  tempcloud7 = createSprite(29000,790,50,10);
  tempcloud7.visible = false;

  cloud8 = createSprite(29400,747,10,10);
  cloud8.addAnimation("cloud",cloudImg);
  cloud8.scale = 0.5;

  tempcloud8 = createSprite(29400,747,50,10);
  tempcloud8.visible = false;

  cloud9 = createSprite(29800,758,10,10);
  cloud9.addAnimation("cloud",cloudImg);
  cloud9.scale = 0.5;

  tempcloud9 = createSprite(29800,758,50,10);
  tempcloud9.visible = false;

  heart2 = createSprite(28830,700,10,10);
  heart2.addAnimation("heart",lifeupImg);
  heart2.scale = 0.5;
/*
  flyingfrostbird = createSprite(28400,700,10,10);
  flyingfrostbird.scale = 0.5;
  flyingfrostbird.addAnimation("normal",birdImg);

  flyingfrostbird2 = createSprite(29200,700,10,10);
  flyingfrostbird2.scale =0.5;
  flyingfrostbird2.addAnimation("normal",birdImg);
  */


  ground11 = createSprite(30570,1200,1000,800);
  groundhitbox11 = createSprite(30570,1199,1000,800);
  groundhitbox11.visible = false;
  platformGroup.add(groundhitbox11);
  ground11.shapeColor = "#31AA15"


  checkpoint4 = createSprite(30172,763,10,10);
  checkpoint4.addAnimation("flag",flagImg);
  checkpoint4.scale = 0.5;

  ground12= createSprite(31570,800,1000,1200);
  groundhitbox12 = createSprite(31570,799,1000,1200);
  groundhitbox12.visible = false;
  platformGroup.add(groundhitbox12);
  ground12.shapeColor = "#425D3C";

  eggbot2 = createSprite(30952,763,10,10);
  eggbot2.addAnimation("eggbot",eggImg);
  eggbot2.scale=1;

  heart3 = createSprite(30647,100,10,10);
  heart3.addAnimation("heart",lifeupImg);
  heart3.scale=0.5;


  ground13 = createSprite(32570,400,1000,1200);
  groundhitbox13 = createSprite(32570,399,1000,1200);
  groundhitbox13.visible = false;
  platformGroup.add(groundhitbox13);
  ground13.shapeColor = "#D6E8D2";


  sundial = createSprite(32570,-400,10,10);
  sundial.addAnimation("goal",medallionImg);
  sundial.depth = player.depth - 1;

  eggbot3 = createSprite(31920,163,10,10);
  eggbot3.addAnimation("egg",eggImg);


  megabwaller = createSprite(31727,163,10,10);
  megabwaller.addAnimation("bossbwaller",bwallerImg);



  frostbird4 = createSprite(30502,763,10,10);
  frostbird4.scale = 0.5;
  frostbird4.addAnimation("birdleft",frostbirdImgL);
  frostbird4.addAnimation("birdright",frostbirdImgR);

  frostbird5 = createSprite(30652,763,10,10);
  frostbird5.scale = 0.5;
  frostbird5.addAnimation("birdleft",frostbirdImgL);
  frostbird5.addAnimation("birdright",frostbirdImgR);

  frostbird6 = createSprite(31462,163,10,10);
  frostbird6.scale = 0.5;
  frostbird6.addAnimation("birdleft",frostbirdImgL);
  frostbird6.addAnimation("birdright",frostbirdImgR);

  frostbird7 = createSprite(31612,163,10,10);
  frostbird7.scale = 0.5;
  frostbird7.addAnimation("birdleft",frostbirdImgL);
  frostbird7.addAnimation("birdright",frostbirdImgR);

  bwaller2 = createSprite(30832,763,10,10);
  bwaller2.addAnimation("bwaller",bwallerImg);
  bwaller2.scale = 0.45;
}

function draw() {
  background("Yellow");

  camera.position.x = player.position.x;
  camera.position.y = player.position.y;



  textSize(50);
  text("Lives :"+lifeCount,player.x - 450,player.y - 190);

  textSize(50);
  text("Checkpoints :"+ levelCount,player.x+250,player.y - 190);


  if(gameState==="play"){
  player.collide(testground);
  player.collide(testtempCloud);
  player.collide(testconveyorL);
  player.collide(testconveyorR);
  testbwaller.collide(testground);
  testfrostbird.collide(testground);
  testeggbot.collide(testground);
  testshadowling.collide(testwall);

  //Level 1 collision
  player.collide(ground);
  player.collide(ground2);
  player.collide(ground3);
  player.collide(roof);
  player.collide(ground4);
  player.collide(ground5);
  player.collide(ground6);
  player.collide(ground7);
  player.collide(tempcloud)
  player.collide(ground8);
  player.collide(ground9);
  player.collide(roof2);
  player.collide(ground10);
  player.collide(tempcloud2);
  player.collide(tempcloud3);
  player.collide(tempcloud4);
  player.collide(tempcloud5);
  player.collide(tempcloud6);
  player.collide(tempcloud7);
  player.collide(tempcloud8);
  player.collide(tempcloud9);
  player.collide(ground11);
  player.collide(ground12);
  player.collide(ground13);
  

  frostbird.collide(ground);
  frostbird.collide(ground2);
  frostbird.collide(ground3);

  frostbird2.collide(ground2);
  frostbird2.collide(ground3);

  frostbird3.collide(ground5);

  bwaller.collide(ground8);

  eggbot.collide(ground6);

  eggbot2.collide(ground11);

  eggbot3.collide(ground12);

  megabwaller.collide(ground12);

  frostbird4.collide(ground11);
  frostbird4.collide(ground12);
  frostbird5.collide(ground11);
  frostbird5.collide(ground12);
  frostbird6.collide(ground11);
  frostbird6.collide(ground12);
  frostbird7.collide(ground11);
  frostbird7.collide(ground12);
  bwaller2.collide(ground11);
  bwaller2.collide(ground12);

  if(keyWentDown("W")&&playerState==="normal"&&jumpCount < 1){
    player.velocityY = -10;
    jumpCount = jumpCount + 1;
  }
  else if(keyWentDown("W")&&playerState==="jumpboost"&&jumpCount < 1){
    player.velocityY = -15;
    jumpCount = jumpCount + 1;
  }
  else if(keyWentDown("W")&&playerState==="hover"&&jumpCount < 1){
    player.velocityY = -10;
  }

  if(keyWentDown("A")){
    //player.velocityX = -10;
    player.velocityX = -10;
    playerDirection = "Left";
    //lifeCounter.velocityX = -10;
  }
  if(keyWentUp("A")){
    player.velocityX = 0;
    //lifeCounter.velocityX = 0
    
  }
  
  if(keyWentDown("D")){
    //player.velocityX =10;
    player.velocityX = 10;
    playerDirection = "Right";
    //lifeCounter.velocityX = 10;
    
  }
  if(keyWentUp("D")){
    player.velocityX = 0;
    //lifeCounter.velocityX = 0;
    
  }

  if(player.y > 800){
    lifeCount = 0;
  }


  /*
  if(keyDown("1")){
    player.position.x = 13177;
    player.position.y = 563;
  }
  if(keyDown("2")){
    player.position.x = 19500;
    player.position.y = 562;
  }
  if(keyDown("3")){
    player.position.x = 26370;
    player.position.y = 763;
  }
  if(keyDown("4")){
    player.position.x = 30172;
    player.position.y = 763;
  }


  */
  if(keyWentDown("SPACE")&&playerDirection === "Right"){
    slash = createSprite(player.x+50,player.y,10,10);
    slash.addAnimation("Swordslash",slashImg);
    slash.scale=0.5;
    slash.lifetime=2;

    if(testbwaller.isTouching(slash)){
      testbwaller.lifetime=1;
    }
    if(testshadowling.isTouching(slash)){
      testshadowling.lifetime=1;
    }
    if(testfrostbird.isTouching(slash)){
      testfrostbird.lifetime=1;
    }





    

    if(frostbird.isTouching(slash)){
      frostbird.lifetime=1;
    }
    if(frostbird2.isTouching(slash)){
      frostbird2.lifetime=1;
    }
    if(bwaller.isTouching(slash)){
      bwaller.lifetime=1;
    }
    if(frostbird3.isTouching(slash)){
      frostbird3.lifetime=1;
    }

    if(bwaller2.isTouching(slash)){
      bwaller2.lifetime=1;
    }
    if(frostbird4.isTouching(slash)){
      frostbird4.lifetime = 1;
    }

    if(megabwaller.isTouching(slash)){
      Mbwallerhealth = Mbwallerhealth - 1;
    }
    if(frostbird5.isTouching(slash)){
      frostbird5.lifetime = 1;
    }
    if(frostbird6.isTouching(slash)){
      frostbird6.lifetime = 1;
    }
    if(frostbird7.isTouching(slash)){
      frostbird7.lifetime = 1;
    }
  }
  else if(keyWentDown("SPACE")&&playerDirection === "Left"){
    slash = createSprite(player.x - 50,player.y,10,10);
    slash.addAnimation("Swordslash",slashImg);
    slash.scale=0.5;
    slash.lifetime=5;

    if(testbwaller.isTouching(slash)){
      testbwaller.lifetime=1;
    }
    if(testshadowling.isTouching(slash)){
      testshadowling.lifetime=1;
    }
    if(testfrostbird.isTouching(slash)){
      testfrostbird.lifetime=1;
    }

    
    
    if(frostbird.isTouching(slash)){
      frostbird.lifetime=1;
    }
    if(frostbird2.isTouching(slash)){
      frostbird2.lifetime=1;
    }
    if(bwaller.isTouching(slash)){
      bwaller.lifetime=1;
    }
    if(frostbird3.isTouching(slash)){
      frostbird3.lifetime = 1;
    }
    if(bwaller2.isTouching(slash)){
      bwaller2.lifetime=1;
    }
    if(frostbird4.isTouching(slash)){
      frostbird4.lifetime = 1;
    }
    if(megabwaller.isTouching(slash)){
      Mbwallerhealth = Mbwallerhealth - 1;
    }
    if(frostbird5.isTouching(slash)){
      frostbird5.lifetime = 1;
    }
    if(frostbird6.isTouching(slash)){
      frostbird6.lifetime = 1;
    }
    if(frostbird7.isTouching(slash)){
      frostbird7.lifetime = 1;
    }
  }

  if(player.isTouching(ocean)){
    lifeCount = 0;
  }


  if(playerState === "normal"||playerState === "jumpboost"){
    player.velocityY = player.velocityY+0.5;
  }
  else if(playerState === "hover"){
    player.velocityY = player.velocityY+0.2;
  }

  if(player.isTouching(testcheckpoint)){
    checkpointcounter.x = testcheckpoint.x;
    checkpointcounter.y = testcheckpoint.y;
  }

  if(player.isTouching(testspring)){
    playerState = "jumpboost";
    testspring.lifetime = 1;
  }

  if(player.isTouching(testlifeup)){
    testlifeup.lifetime = 1;
    lifeCount = lifeCount + 1;
  }

  if(player.isTouching(testinvisibleconveyorR)){
    player.velocityX = 15;
  }

  if(player.isTouching(testinvisibleconveyorL)){
    player.velocityX = -15;
  }

  if(player.isTouching(testladder)){
    testladder.lifetime = 1;
    levelCount = levelCount + 1;
  }



  if(player.isTouching(testwingleaf)){
    testwingleaf.lifetime = 1;
    playerState = "hover";
  }

  if(player.isTouching(testsunmedallion)){
    testsunmedallion.lifetime = 1;
    medalCount = medalCount + 1;
  }

  if(player.isTouching(platformGroup)){
    jumpCount = 0;
    player.changeAnimation("idleRight");
  }

  if(player.isTouching(sundial)){
    gameState = "win";
  }

  if(lifeCount === 0){
    gameState = "end";
  }

  if(keyDown("K")){
    testbwaller.lifetime = 1;
    testshadowling.lifetime = 1;
    testfrostbird.lifetime = 1;
  }

  shadowlingAI(testshadowling);
  bwallerAI(testbwaller);
  frostbirdAI(testfrostbird);
  livingflameAI(testflame);
  icicleAI(testicicle);
  medallionProperties(testsunmedallion);
  eggbotProperties(testeggbot);


  //Level 1 AI
  frostbirdAI(frostbird,normal);  
  frostbirdAI(frostbird2,normal);
  eggbotProperties(eggbot);
  cloudProperties(cloud,tempcloud); 
  leafProperties(wingleaf);
  bwallerAI(bwaller);
  checkpointProperties(checkpoint1);
  checkpointProperties(checkpoint2);
  frostbirdAI(frostbird3);
  heartProperties(heart);
  icicleAI(icicle1);
  icicleAI(icicle2);
  icicleAI(icicle3);
  icicleAI(icicle4);
  icicleAI(icicle5);
  icicleAI(icicle6);
  icicleAI(icicle7);
  icicleAI(icicle8);
  icicleAI(icicle9);
  icicleAI(icicle10);
  icicleAI(icicle11);
  icicleAI(icicle12);
  icicleAI(icicle13);
  icicleAI(icicle14);
  checkpointProperties(checkpoint3);
  cloudProperties(cloud2,tempcloud2); 
  cloudProperties(cloud3,tempcloud3); 
  cloudProperties(cloud4,tempcloud4); 
  cloudProperties(cloud5,tempcloud5); 
  cloudProperties(cloud6,tempcloud6); 
  cloudProperties(cloud7,tempcloud7); 
  cloudProperties(cloud8,tempcloud8); 
  cloudProperties(cloud9,tempcloud9); 
  heartProperties(heart2);
  checkpointProperties(checkpoint4);
  eggbotProperties(eggbot2);
  heartProperties(heart3);
  eggbotProperties(eggbot3);

  frostbirdAI(frostbird4);
  frostbirdAI(frostbird5);
  frostbirdAI(frostbird6);
  frostbirdAI(frostbird7);

  bwallerAI(bwaller2);
  megabwallerAI(megabwaller);
}

  if(gameState === "end"){
    textSize(100);
    fill("RED");
    text("GAME OVER",player.x - 300,player.y - 100);

    testbwaller.velocityX = 0;
    testbwaller.velocityY = 0;
    player.velocityX = 0;
    player.velocityY = 0;
    testshadowling.velocityX = 0;
    testshadowling.velocityY = 0;
    testfrostbird.velocityX = 0;
    testfrostbird.velocityY = 0;
    testflame.velocityY = 0;
    
    testicicle.velocityY = 0;


    bwaller.velocityX = 0;
    frostbird.velocityX = 0;
    frostbird2.velocityX = 0;
    frostbird3.velocityX = 0;
    frostbird4.velocityX = 0;
    frostbird5.velocityX = 0;
    frostbird6.velocityX = 0;
    frostbird7.velocityX = 0;

    bwaller2.velocityX = 0;
    megabwaller.velocityX = 0;
  }

  if(gameState === "win"){
    textSize(100);
    fill("BLACK");
    text("YOU WIN!!",player.x - 290,player.y - 200);

    

    testbwaller.velocityX = 0;
    testbwaller.velocityY = 0;
    player.velocityX = 0;
    player.velocityY = 0;
    testshadowling.velocityX = 0;
    testshadowling.velocityY = 0;
    testfrostbird.velocityX = 0;
    testfrostbird.velocityY = 0;
    testflame.velocityY = 0;
    
    testicicle.velocityY = 0;


    bwaller.velocityX = 0;
    frostbird.velocityX = 0;
    frostbird2.velocityX = 0;
    frostbird3.velocityX = 0;
    frostbird4.velocityX = 0;
    frostbird5.velocityX = 0;
    frostbird6.velocityX = 0;
    frostbird7.velocityX = 0;

    bwaller2.velocityX = 0;
    megabwaller.velocityX = 0;
  }


  drawSprites();
}





function shadowlingAI(enemy){
  if(enemy.x < player.x && playerDirection === "Right"){
    enemy.velocityX = 4;
    enemy.changeAnimation("Alive",shadowImg1);
  }
  else if(enemy.x < player.x && playerDirection === "Left"){
    enemy.velocityX = 0;
    enemy.changeAnimation("Dead",shadowImg2);
  }
  if(enemy.y < player.y){
    enemy.velocityY = 4;
  }
  else if(enemy.y > player.y){
    enemy.velocityY = -4;
  }
  if(enemy.x > player.x && playerDirection === "Left"){
    enemy.velocityX = -4;
    enemy.changeAnimation("Alive",shadowImg1);
  }
  else if(enemy.x > player.x && playerDirection === "Right"){
    enemy.velocityX = 0;
    enemy.changeAnimation("Dead",shadowImg2);
  }

  if(player.isTouching(enemy)){
    player.x = checkpointcounter.x;
    player.y = checkpointcounter.y;
    lifeCount = lifeCount - 1;
    
  }

}

function bwallerAI(enemy){
  enemy.velocityY = player.velocityY;

  if(player.x > enemy.x - 100 && player.x < enemy.x + 350){
    enemy.velocityX = 5;
  }
  else if(player.x < enemy.x + 100 && player.x > enemy.x - 350){
    enemy.velocityX = -5;
  }
  else{
    enemy.velocityX = 0;
  }
  if(player.isTouching(enemy)){
    player.x = checkpointcounter.x;
    player.y = checkpointcounter.y;
    lifeCount = lifeCount - 1;
    
  }
}

function frostbirdAI(enemy,attrabute){


  if(player.x < enemy.x && player.x > enemy.x - 350){
    enemy.velocityX = -5;
  }
  else if(player.x > enemy.x && player.x < enemy.x + 350){
    enemy.velocityX = 5;
  }

    if(attrabute === normal){
  enemy.velocityY = enemy.velocityY + 0.3;
    }
    else if(attrabute === flying){
      enemy.velocityY = 0;
    }
  if(player.isTouching(enemy)){
    player.x = checkpointcounter.x;
    player.y = checkpointcounter.y;
    lifeCount = lifeCount - 1;
    enemy.velocityX = 0;
    
  }

  if(enemy.velocityX < 0){
    enemy.changeAnimation("birdRight");
  }
  else if(enemy.velocityX > 0){
    enemy.changeAnimation("birdLeft");
  }
}

function livingflameAI(enemy){
  if(enemy.y > 650){
    enemy.velocityY = -7;
  }
  else if(enemy.y < windowHeight/2){
    enemy.velocityY = 7;
  }

  if(player.isTouching(enemy)){
    player.x = checkpointcounter.x;
    player.y - checkpointcounter.y;
    lifeCount = lifeCount - 1;
    
  }
}

function icicleAI(enemy){

  var Iciclepos;
  //Iciclepos = createSprite(enemy.x,enemy.y,10,10);
  //Iciclepos.visible = false;
  if(player.position.x > enemy.x - 100 && player.position.x < enemy.x + 100){
    enemy.velocityY = 15;
  }
  if(enemy.y > 2000){
    enemy.y = 310;
    enemy.velocityY = 0;
  }

  if(player.isTouching(enemy)){
    player.x = checkpointcounter.x;
    player.y = checkpointcounter.y;
    lifeCount = lifeCount - 1;
    
  }
}


function medallionProperties(object){
  if(player.isTouching(object)){
    object.lifetime = 1;
    medalCount = medalCount + 1;
  }
}

function eggbotProperties(object){
  if(player.isTouching(object)){
    player.velocityY = -20;
  }
}

function cloudProperties(object,tempobject){
  if(player.isTouching(object)){
    object.lifetime=20;
    tempobject.lifetime=20;
    jumpCount = 0;
  }
}

function leafProperties(item){
  if(player.isTouching(item)){
    item.lifetime = 1;
    playerState = "hover";
  }
}

function checkpointProperties(object){
  if(player.isTouching(object)){
    levelCount = levelCount + 1;
    checkpointcounter.x = object.x;
    checkpointcounter.y = object.y;
    var fauxcheckpoint;

    fauxcheckpoint = createSprite(object.x,object.y,10,10);
    fauxcheckpoint.addAnimation("flag",flagImg);
    fauxcheckpoint.scale = 0.5;
    object.lifetime = 1;
  }
}

function heartProperties(item){
  if(player.isTouching(item)){
    item.lifetime = 1;
    lifeCount = lifeCount + 1;
  }
}



function megabwallerAI(enemy){

  

  if(player.x > enemy.x - 100 && player.x < enemy.x + 350){
    enemy.velocityX = 1;
  }
  else if(player.x < enemy.x + 100 && player.x > enemy.x - 350){
    enemy.velocityX = -1;
  }
  else{
    enemy.velocityX = 0;
  }
  if(player.isTouching(enemy)){
    player.x = checkpointcounter.x;
    player.y = checkpointcounter.y;
    lifeCount = lifeCount - 1;
    
  }


  if(Mbwallerhealth < 1){
    megabwaller.lifetime = 1;
  }


}