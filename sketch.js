const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var groundOption={
    isStatic : true
  }
  ground=Bodies.rectangle(400,390,800,10,groundOption);
  World.add(world,ground);
  
  var ballOption={
    restitution : 1
  }
  ball=Bodies.circle(400,10,25,ballOption);
  World.add(world,ball);
}

function draw() {
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}