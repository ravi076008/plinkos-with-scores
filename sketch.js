const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions=[];
var plinko=[];
var particle=[];
var divisionHeight=300
var score=0;

var ball
var count = 0;
var gameState ="start";


function setup() {
  createCanvas(800,600);
 
  engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(400,height,800,30);
    
    for(var k=0;k<width;k=k+80){
     divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))

    }
    
    for(var j=75;j<width;j=j+50){
     plinko.push(new Plinko(j,50))
     }
     
     for(var j=50;j<width;j=j+50){
      plinko.push(new Plinko(j,90))
      }

      for(var j=75;j<width;j=j+50){
        plinko.push(new Plinko(j,150))
        }
        
      
}

function draw() {
  background(0,0,0); 
  Engine.update(engine) ;
  ground.display();
  textSize(20)
  text("score "+score,600,30)

  text(" 500 ", 15, 550);
  text(" 500 ", 90, 550);
  text(" 500 ", 170, 550);
  text(" 500 ", 250, 550);
  text(" 100 ", 330, 550);
  text(" 100 ", 410, 550);
  text(" 100 ", 490, 550);
  text(" 200 ", 570, 550);
  text(" 200 ", 650, 550);
  text(" 200 ", 730, 550);
 
 for(k=0;k<divisions.length;k++){
   divisions[k].display();
}
 
for(j=0;j<plinko.length;j++){
  plinko[j].display();
}
if(frameCount%60===0){
   particle.push(new Particle(random(100,700),10,10));
    score++;
   } 
  for (var j = 0; j < particle.length; j++) { 
  particle[j].display();
 }



for (var i = 0; i < plinko.length; i++) {
  plinko[i].display();  
}

 if(ball!=null)
 {
    ball.display();
     
     if (ball.body.position.y>760)
     {
           if (ball.body.position.x < 300) 
           {
               score=score+500;      
               ball=null;
               if ( count>= 5) gameState ="end";                          
           }


           else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
           {
                 score = score + 100;
                 ball=null;
                 if ( count>= 5) gameState ="end";

           }
           else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
           {
                 score = score + 200;
                 ball=null;
                 if ( count>= 5)  gameState ="end";

           }      
           
     }

   }

  }
  function mousePressed(){
  if(gameState!="end"){
     count++ ;
     ball=new Ball(mouseX,10,10,10);

  }

  }
