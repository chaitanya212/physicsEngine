const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var obj;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  var obj_options={
    isStatic:true
  }
  obj=Bodies.rectangle(300,100,100,50,obj_options);
  World.add(world,obj);
  console.log(obj);
  console.log(obj.position.x);
  console.log(obj.position.y);

}

function draw() {
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
  rect(200,200,50,50);
  rect(obj.position.x,obj.position.y,50,50);
  drawSprites();
}
