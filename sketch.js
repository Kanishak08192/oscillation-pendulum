const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log6;
var chain;

function setup(){
    var canvas = createCanvas(300,400);
    engine = Engine.create();
    world = engine.world;
    log6 = new Log(150,120,80,PI/2);
    bird = new Pendulum(150,220);
    chain = new Chain(bird.body,log6.body);

}

function draw(){
    background("red");
    Engine.update(engine);
    bird.display();
    log6.display();
    chain.display();
}
