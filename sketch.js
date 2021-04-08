const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
const Mouse=Matter.Mouse
const Mc=Matter.MouseConstraint

var engine, world;
var box1, pig1;
var bg="pic-main/bg.png"
var platform;
var log5;
var chain;
var gamestate="onsling"
var bg1
var score=0

function preload(){
  bg1 = loadImage("pic-main/bg2.jpg");
 // getbackground()
 myFont=loadFont("Inconsolata/static/Inconsolata_SemiCondensed-Black.ttf")
}

function setup(){
  var students=["aahana","sadika","coding",[1,2,3,[true,false]]]
  console.log(students[3][3][1])
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var mouse=Mouse.create(canvas.elt)
var options={
  mouse:mouse
}
mc=Mc.create(engine,options) 
World.add(world,mc)
    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,305,300,170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    
   log1 = new Log(810,260,20,300, PI/2);

     box3 = new Box(700,240,70,70);
   pig2 = new Pig(810, 220);
   box4 = new Box(920,240,70,70);
    log2 =  new Log(810,180,20,300, PI/2);



    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,20,150,PI/7);
    log4 = new Log(870,120,20,150,-PI/7);

    bird = new Bird(200,50);
    //log5=new Log(230,180,20,80,PI/2)        
   sling= new Slingshot(bird.body,{x:200,y:50})

}

function draw(){
    background   (bg1); 
    noStroke()
    textSize(25 )
    fill("white")
    textFont(myFont)
    text("SCORE: "+score,900,50)
 
    Engine.update(engine);
    
    box1.display();
    box2.display();
   ground.display();
    pig1.display();
    pig1.score();
    log1.display();

 box3.display();
    box4.display();
    pig2.display();
    pig2.score();
   log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    platform.display();
sling.display()

}




/*function mouseDragged(){
if(gamestate=="onsling"){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
}*/

  



function mouseReleased(){ 
  gamestate="launched"
setTimeout(()=>{

  sling.fly()

},100)

   
}

function keyPressed(){ 
  if (keyCode===32){
    bird.trajectory=[]
    gamestate="onsling"
    Matter.Body.setPosition(bird.body,{x:200,y:50})
    

    sling.attach(bird.body)
  }
  }

  async function getbackground(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson= await response.json()
    console.log(responsejson)
    var time=responsejson.datetime
    var hour=time.slice(11,13)

    console.log(hour)
    if (hour>=06 && hour<=18){
    bg="pic-main/bg.png"
    }
    else {
     bg= "pic-main/bg2.jpg"
    }
    bg1=loadImage(bg)
  }