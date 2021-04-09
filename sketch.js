var player, ball, edges;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7;
var brickGroup;
var lives = 3;

function setup() {
  createCanvas(2000,1200);
  player = createSprite(1000, 1100, 200, 50);
  ball = createSprite(1000, 600, 40, 40);

  brickGroup = new Group();
  
  for (i = 200; i < 1800; i= i+170)
  {
    brick1 = createSprite(i, 100, 150, 40);
    brick1.shapeColor = "blue";
    brickGroup.add(brick1);
  }

  for (j = 200; j < 1800; j = j+170)
  {
    brick2 = createSprite(j, 180, 150, 40);
    brick2.shapeColor = "magenta"
    brickGroup.add(brick2);
  }

  for (k = 200; k < 500; k += 170)
  {
    brick3 = createSprite(k, 260, 150, 40);
    brick3.shapeColor = "blue"
    brickGroup.add(brick3);
  }

  for (i = 880; i < 1200; i+= 170)
  {
    brick4 = createSprite(i, 260, 150, 40);
    brick4.shapeColor = "blue"
    brickGroup.add(brick4);
  }

  for (i = 1560; i < 1800; i+= 170)
  {
    brick5 = createSprite(i, 260, 150, 40);
    brick5.shapeColor = "blue"
    brickGroup.add(brick5);
  }
 // h

  for (k = 200; k < 500; k += 170)
  {
    brick3 = createSprite(k, 340, 150, 40)
    brick3.shapeColor = "magenta"
    brickGroup.add(brick3);
  }

  for (i = 880; i < 1200; i+= 170)
  {
    brick4 = createSprite(i, 340, 150, 40);
    brick4.shapeColor = "magenta"
    brickGroup.add(brick4);
  }

  for (i = 1560; i < 1800; i+= 170)
  {
    brick5 = createSprite(i, 340, 150, 40);
    brick5.shapeColor = "magenta"
    brickGroup.add(brick5);
  }

  for (i = 200; i < 1800; i= i+170)
  {
    brick1 = createSprite(i, 420, 150, 40);
    brick1.shapeColor = "blue";
    brickGroup.add(brick1);
  }

  for (k = 200; k < 1800; k += 170)
  {
    brick3 = createSprite(k, 500, 150, 40)
    brick3.shapeColor = "magenta"
    brickGroup.add(brick3);
  }

  edges = createEdgeSprites();
  //ball.velocityY =  12;
  //ball.velocityX = 5;
  ball.shapeColor = "red";
  player.shapeColor = "yellow";
}

function draw() {
  background(0);  
  playerMovement();
 // text("Lives: "+lives)
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(player);

  if (keyDown("space"))
  {
    ball.velocityX = 5
    ball.velocityY =  12
  }

  if (ball.y > 1141 && lives > 0)
  {
    ball.y = 700
    ball.x = player.x
    ball.velocityX = 0
    ball.velocityY = 0
    lives = lives-1
  }

  if (lives < 1)
  {
    brickGroup.destroy()
    textSize(32)
  //  fill("white")
    text("Game Over", 1000, 600)
  }
  

  for (i = 0; i< brickGroup.length ;i++){
    if (ball.isTouching(brickGroup.get(i)))
    {
      ball.bounceOff(brickGroup.get(i))
      brickGroup.get(i).destroy()
    }
  }
  drawSprites();
}

function playerMovement(){
  if (keyDown("a"))
  {
    player.x = player.x - 12
  }

  if (keyDown("d"))
  {
    player.x = player.x + 8
  }

}
