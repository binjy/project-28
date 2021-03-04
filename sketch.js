
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree1,kid,chain,mango,mango7,mango2,mango3,mango4,mango5,mango6
var stone
function preload(){
	
}

function setup() {
	createCanvas(1600, 700);
 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(700,700,9000,200)
kid = new Boy(200,550,100,200)
tree1 = new Tree(1000,400,500,500)
//mango6 = new Mango(1000,100,50,50)
//mango = new Mango(950,300,50,50)
//chain = new Chain(mango.body,{x:1000,y:20})
mango2 = new Stone(120,440,50,50)
//mango7 = new Mango(1000,100,50,50)
//chain = new Chain(kid.body,{x:200,y:500})
chain2 = new Chain(mango2.body,{x:100,y:450})
//mango = new Mango(160,500,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 // mango.display()
 // chain.display()
 //mango6.display()
  mango2.display()
  chain2.display()
  kid.display()
ground.display()
tree1.display()
//mango7.display()
  drawSprites();
}



function mouseDragged(){
	Matter.Body.setPosition(mango2.body,{x:mouseX,y:mouseY})
 
 }
 
 function mouseReleased(){
	chain2.fly()
 }
 


 //function detection(){

//mangoBodyPosition = lmango.body.position
//mango2BodyPosition = lstone.body.position

//var distance = dist(stoneBodyPosition.x, mango2BodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
//if (distance<=lmango.r+lmango2.r) {
//  Matter.Body.setStatic(lmango.body,false)
//}




// }




//function keyPressed() {
  //if (keyCode ===32) {
//    Matter.Body.setPosition(mango2.body,{x:235, y:420})
//    launcherObject.attach(mango2.body)
//  }



//}