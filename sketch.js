var database;
var backImg, playerImg;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var player, form, game, player1, player2;
var players,fruits;
var fruitGroup;
var fruit1Img, fruit2Img, fruit3Img, fruit4Img, fruit5Img;

function preload() {
  backImg = loadImage("images/jungle.jpg");
  playerImg = loadImage("images/basket2.png");
  fruit1Img = loadImage("images/apple2.png");
  fruit2Img = loadImage("images/banana2.png");
  fruit3Img = loadImage("images/melon2.png");
  fruit4Img = loadImage("images/orange2.png");
  fruit5Img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backImg);

  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}
