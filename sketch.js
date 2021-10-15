var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var obstacles;
var cars = [];
var Steve;
var g1,g2,g3;


function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  g1 = new Group();
  g2 = new Group();
  g3 = new Group();
  grp = new Group();

  Steve = createSprite(800,600);
  Steve.addImage("demo",car1_img);
  Steve.scale = 0.1;
}

function draw() {
  background(backgroundImage);

  if(keyDown(UP_ARROW)){
    Steve.position.y -= 5;
  }

  spawnSprites(car2_img,200,0.1,g1)
  spawnSprites(fuelImage,350,0.02,g2)
  spawnSprites(powerCoinImage,500,0.08,g3)


  drawSprites();
}

function spawnSprites(img,interval,scale,grp) {
  //write code here to spawn the sprites
  if (frameCount % interval === 0) {
    sprite1 = createSprite(600,100,40,10);
    sprite1.position.x = Math.round(random(50,width-100));
    sprite1.position.y = Math.round(random(50,height-100));
    sprite1.addImage(img);
    sprite1.scale = scale;
    // sprite.lifetime = 30;
    grp.add(sprite1);
    grp.setLifetimeEach(30);
   
  }
}
