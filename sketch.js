var form, player,game;
var gameState=0;
var PlayerCount=0;
var database;


function setup()
{
  database=firebase.database();
  createCanvas(400,400);
  
  game = new Game();
  game.getState();
  game.start();
  // call the game object and the functions getState and start
}
function draw(){


}