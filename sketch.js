const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

    var ball_options = { 
        restitution:0.95, 
        frictionAir:0.01
    }

    ball = Bodies.circle(200,200,10,ball_options)

    ground = Bodies.rectangle(200,385,600,20)
    World.add(world,ground);
}


function draw(){
    background("#a7f2fa");
    Engine.update(engine);
    
    ellipse(30,30,20);
    rect(200,385,600,20);

    drawSprites();
}