var fixedRect, movingRect;
var objet1, objet2;
var edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  objet1= createSprite(200,200,70,100);
  objet1.shapeColor= "blue";
  objet1.debug= true;
  objet2= createSprite(600,200,70,90);
  objet2.shapeColor= "blue";
  objet2.debug= true;
  objet1.velocityX= 3;
  objet2.velocityX= -3;

  edges = createEdgeSprites();
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Touching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if(Touching(movingRect, objet1)){
    objet2.velocityY= 3;
    objet1.shapeColor= "pink";
  }
  else{
    objet2.velocityY= 0;
    objet1.shapeColor= "blue";
  }
   
   jump(objet2,objet1);

  drawSprites();
}
