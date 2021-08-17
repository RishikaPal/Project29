const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
  const Constraint = Matter.Constraint;
   var engine, world; var holder,ball,ground;
    var stand1,stand2; var ball;
     var slingShot; var polygon_img;
function preload(){
    polygon_img=loadImage("polygon.png")
}
function setup (){
    createCanvas(900,400)
    engine=Engine.create()
    world=engine.world
    Engine.run(engine)
    ground=new Ground()
    box1=new Box(300,275,30,40)

}
function draw(){
    background("white")
    ground.display()
    strokeWeight(2)
    stroke(15)
    fill("skyblue")
    box1.display()
    fill("gold")
    //image

}