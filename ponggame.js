var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
var yPaddle;
var paddleWidth = 125;
var paddleHeight = 25;
var started = false;
var score = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background("black");
  xBall += xBallChange;
  yBall += yBallChange;
  if(xBall < diameter / 2 ||
    xBall > windowWidth - 0.5*diameter){
    xBallChange *= -1;
  }
  if(yBall < diameter / 2 ||
    yBall > windowHeight - diameter){
    yBallChange *= -1;
  }
  
  fill("white");
  noStroke();
  ellipse(xBall,yBall,diameter,diameter);
  

  if ((xBall > mouseX &&
      xBall < mouseX + paddleWidth) &&
    (yBall + (diameter/2) >= yPaddle))  
    {
    xBallChange *= -1;
  yBallChange *= -1;
      score++;
    }
  
  if (!started)
    {
      yPaddle = windowHeight -100;
      started = true;
    }
  fill("white");
  noStroke();
  rect(mouseX,yPaddle,paddleWidth,paddleHeight);
  
  if (mouseX < 0){
    mouseX = 0;
  }
  if (mouseX + 125 > windowWidth){
    mouseX = windowWidth - 125;
    rect(mouseX,yPaddle,paddleWidth,paddleHeight);
  }
  
  fill ("blue");
  textSize(40);
  text("Score:" + score,20,35);
  
}
