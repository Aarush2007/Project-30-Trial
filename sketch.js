//Matter.js constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Matter.js variables
var engine,world;

//game variables
var ground,ground2,mainGround;
var polygon,slingshot;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,block15,block16;

function setup() {
  //creating the canvas
  createCanvas(800,400);
  //creating the Matter.js engine
  engine = Engine.create();
  //creating the Matter.js world
  world = engine.world; 

  //grounds
  mainGround = new Ground(width/2,height-10,width,30);
  ground = new Ground(405,320,270,10);
  ground2 = new Ground(685,195,200,10);

  //first row of blocks
  //level one
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);

  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top
  block16 = new Box(390,155,30,40);

  //second row blocks
  //bottom
  s_block1 = new Box(610,150,30,40);
  s_block2 = new Box(640,150,30,40);
  s_block3 = new Box(670,150,30,40);
  s_block4 = new Box(700,150,30,40);
  s_block5 = new Box(730,150,30,40);

  //middle
  s_block6 = new Box(640,110,30,40);
  s_block7 = new Box(670,110,30,40);
  s_block8 = new Box(700,110,30,40);

  //top
  s_block9 = new Box(670,70,30,40);

  polygon = new Polygon();
  slingshot = new Slingshot(polygon.body,{x:200,y:200});

  Engine.run(engine);   

}

function draw() {
  background(0);  
  //displaying the grounds
  ground.display();
  ground2.display();
  mainGround.display();

  //displaying the bottom most layer 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //displaying the middle row
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //displaying the second last layer
  block13.display();
  block14.display();
  block15.display();

  //displaying the last layer
  block16.display();

  //second row blocks
  //bottom
  s_block1.display();
  s_block2.display();
  s_block3.display();
  s_block4.display();
  s_block5.display();

  //middle
  s_block6.display();
  s_block7.display();
  s_block8.display();

  //top
  s_block9.display();

  polygon.display();
  slingshot.display();

  drawSprites();

  fill(255);
  textSize(20);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",75,50);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(polygon);
  }
}