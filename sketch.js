const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;
let particles = [];
let plinko = [];
let division = [];
let divisionHeight=300;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,695,480,10);
  for (let k = 0; k <=width; k=k+80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for (let j = 40; j <= width; j=j+50) {
    plinko.push( new Plinko(j,75));
  }
  for (let j = 15; j <=width-10; j=j+50) {
    plinko.push(new Plinko(j,175));
    
  }
}
function draw() {
    background("black");  
    Engine.update(engine);
   
    for(var k=0; k<division.length; k++){
      division[k].display();
    }
  
    for(var k=0; k<plinko.length; k++){
      plinko[k].display();
    }
    if (frameCount%60===0){
      particles.push(new Partic(random(width/2-10,width/2+10),2,2));
    }
  
  for(var k=0; k<particles.length; k++){
    particles[k].display();
  }
  //division.display();
  ground.display();
}
