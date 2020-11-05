const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;

function preload(){
  load = loadImage("bacground1.jpg");
}
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  
  engine = Engine.create();
  world = engine.world;

  bob1 = new cradle(350);
  bob2 = new cradle(430);
  bob3 = new cradle(510);
  bob4 = new cradle(590);
  bob5 = new cradle(670);

  string= new thread(bob1.newton,{x:350,y:300});
  string2 = new thread(bob2.newton,{x:430,y:300});
  string3 = new thread(bob3.newton,{x:510,y:300});
  string4 = new thread(bob4.newton,{x:590,y:300});
  string5 = new thread(bob5.newton,{x:670,y:300});

 
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(load);  

  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();
  
  string.const();
  string2.const();
  string3.const();
  string4.const();
  string5.const();
}
function mouseDragged(){
   Body.setPosition(bob1.newton,{x:mouseX,y:mouseY});
}
