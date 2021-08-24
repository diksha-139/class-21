
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var ball;

function setup() {
    createCanvas(400,400);

    engine = Engine.create();
  world = engine.world;
var ball_options={restitution:1}


var ground_options={
  isStatic:true
}


  ball = Bodies.circle(100,20,20,ball_options)
  World.add(world,ball);

console.log(ball)

}

function draw() 
{
  background("red");
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect()
}

