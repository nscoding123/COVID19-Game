//COVID19 Game
//Created by: Neeti Suggula on 1/1/2021

//This creates Variables for the code
var ground, backgroundImage;
var vbottle, vbottleImage;
var greyVirus, greyImageVirus;
var pinkVirus, pinkImageVirus;
var blueVirus, blueImageVirus;
var yellowVirus, yellowImageVirus;
var redB, blueB, greenB, pinkB;
var shot, arrowImage, arrowGroup;
var score;

function preload() {
  // loads my images

  //backgroundImage = loadImage("PeopleAllOverTheWorld.jpg");
  backgroundImage = loadImage("WorldMap.jpg");
  vbottleImage = loadImage("vaccinebottle.png");
  greyImageVirus = loadImage("coronavirus.png");
  pinkImageVirus = loadImage("coronavirus2.png");
  blueImageVirus = loadImage("coronavirus3.png");
   yellowImageVirus = loadImage("coronavirus4.png");
  arrowImage = loadImage("vaccine.png");
}

function setup() {
  // creates the canvas
   createCanvas(windowWidth, windowHeight);

  // creates the ground sprite
  ground = createSprite(0, 0, width, height);
  ground.addImage("ground", backgroundImage);
  ground.x = ground.width / 2;
  ground.scale = 1.5;

  // creates the bottle sprite
      
  vbottle = createSprite(width-30, 200, 50, 50);
  vbottle.addImage("vbottle", vbottleImage);
  vbottle.scale = 0.15;
  score = 0;

  //Creates group
  greyV = new Group();
  pinkV = new Group();
  blueV = new Group();
  yellowV = new Group();
  shotGroup = new Group();


}

function draw() {
 
  // Background in motion
  ground.velocityX = -4;
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  // moving the bottle with the mouse
  vbottle.y = mouseY;

  // shot generation
  if ((touches.length > 0 || keyDown("space"))) {
    createshot();
    shot.y = vbottle.y;
    touches = [];

  }

  //Prints virus colors at random
  var select_virus = Math.round(random(1, 4));
  //Prints Text in console bar about random numbers
  //console.log(select_virus)
  //Creates a Balloon every 80 spaces

  if (World.frameCount % 50 == 0) {
    //This statement helps in printing the virus color

    if (select_virus == 1){
      greyVirusFn();
    } else if (select_virus == 2) {
      pinkVirusFn();
    } else if (select_virus == 3) {
      blueVirusFn();
    } else if (select_virus == 4) {
      yellowVirusFn();
    }
  }

  //If the Shot is touching the virus then both shot and virus gets destroyed
  if (shotGroup.isTouching(greyV)) {
    greyV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
  }
  if (shotGroup.isTouching(pinkV)) {
    pinkV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
  }

  if (shotGroup.isTouching(blueV)) {
    blueV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
  }

  if (shotGroup.isTouching(yellowV)) {
    yellowV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
  }

  // draws the sprites
  drawSprites();
  // how score looks 
  text("Vaccines Given : " + score, 230, 30);
  text("NeeTi", 600, 30);

}
//Creates shot when space is pressed
function createshot() {
  //shot = createSprite(400, 200, 10, 20);
  shot = createSprite(width-70, 200, 10, 20);
  shot.lifetime = 150;
  shot.scale = 0.1;
  shot.velocityX = -5;
  shot.addImage("shot", arrowImage);
  shotGroup.add(shot);
}
//These functions Print at random, generates speed, and size
function greyVirusFn() {
  //var greyVirus = createSprite(0, Math.round(random(20, 370)), 10, 10);
  var greyVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  greyVirus.addImage(greyImageVirus);
  greyVirus.velocityX = 5;
  greyVirus.lifetime = width;
  greyVirus.scale = 0.1;
  greyV.add(greyVirus);
}

function pinkVirusFn() {
  var pinkVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  pinkVirus.addImage(pinkImageVirus);
  pinkVirus.velocityX = 5;
  pinkVirus.lifetime = width;
  pinkVirus.scale = 0.1;
  pinkV.add(pinkVirus);
}

function blueVirusFn() {
  var blueVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  blueVirus.addImage(blueImageVirus);
  blueVirus.velocityX = 5;
  blueVirus.lifetime = width;
  blueVirus.scale = 0.2;
  blueV.add(blueVirus);
}


function yellowVirusFn() {
  var yellowVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  yellowVirus.addImage( yellowImageVirus);
  yellowVirus.velocityX = 5;
  yellowVirus.lifetime = width;
  yellowVirus.scale = 0.08;
  yellowV.add(yellowVirus);
}