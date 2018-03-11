/*
 * @name Array of Objects
 * @description Create a Jitter class, instantiate an array of objects
 * and move them around the screen.
 */
var bugs = []; // array of Jitter objects

var But = 0; // the button 

var redBut = 0; // the red button 
var greenBut = 0; 
var blueBut = 0;; 

var angle1 = 0 ;
var angle2 =0; 
var angle3 = 0; 

var song; 
var ct = 0;



function preload() {
  song = loadSound('assets/pirate2.mp3');
  
} 

function setup() {
  createCanvas(1000, 600);
  angleMode(DEGREES);
   frameRate(40);
   
    song.loop();
 
  // Create objects
  for (var i=0; i<1000; i++) { //i = i + 1 
    bugs.push(new Jitter());


  
  button = createButton('Go');
  button.position(90, 65);
  button.size(25,25);  
  button.mouseOver(changeColOver);
  button.mouseOut(changeColOut);
  button.mousePressed(ChangeVariable);
  var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
  
  
  button = createButton('RED');
  button.position(90, 100);
  button.size(50,25);  
  button.mouseOver(changeColOver);
  button.mouseOut(changeColOut);
  button.mousePressed(ChangeVariable1);
  var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
  
  button = createButton('GREEN');
  button.position(90, 300);
  button.size(50,25);  
  button.mouseOver(changeColOver);
  button.mouseOut(changeColOut);
  button.mousePressed(ChangeVariable2);
  var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
  
  button = createButton('BLUE');
  button.position(90, 500);
  button.size(50,25);  
  button.mouseOver(changeColOver);
  button.mouseOut(changeColOut);
  button.mousePressed(ChangeVariable3);
  
  var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
  
 /* var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col); */ 
   
  }
  
   
}

function draw() {
  background(0, 0, 0);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
  
  fill(230, 30, 30);
  rect(900, 50, 10, 499); 
  
  
  
  var y1 =  SineWave(angle1,100,50,2,180)
  var y2 =  SineWave(angle2,300,50,2,180)
  var y3 =  SineWave(angle3,500,50,2,180)

fill(50);
textSize(32); 
textAlign(LEFT);   
  
var redwin = 'YOU BET ON THE RIGHT SHIP, LASSIE! RED WON!';
var redlose = 'YOU BET ON THE WRONG SHIP, LOSER! RED LOST!';
var greenwin = 'YOU BET ON THE RIGHT SHIP, LASSIE! GREEN WON!'; 
var greenlose = 'YOU BET ON THE WRONG SHIP, LOSER! GREEN LOST!';
var bluewin = 'YOU BET ON THE RIGHT SHIP, LASSIE! BLUE WON!'; 
var bluelose = 'YOU BET ON THE WRONG SHIP, LOSER! BLUE LOST!';
 
  
  
  if ((angle1 > 875) ||  (angle2 > 875) ||(angle3 > 875) ){
    x1 = 0; 
    x2 = 0;
    x3 = 0;
    ct = ct+1;
    y1 =  SineWave(ct,100,50,2,180)
    y2 =  SineWave(ct,300,50,2,180)
    y3 =  SineWave(ct,500,50,2,180)
    drawboat(angle1, y1, 1, 230, 50, 50);
    drawboat(angle2, y2, 1, 50, 250, 50);
    drawboat(angle3, y3, 1, 60, 70, 250);
  } else {
    x1 = random(1, 10); 
    x2 = random(1, 10);
    x3 = random(1, 10);
    
    angle1 = angle1 + x1;
    angle2 = angle2 + x2; 
    angle3 = angle3 + x3; 
    
    drawboat(angle1, y1, 1, 230, 50, 50);
    drawboat(angle2, y2, 1, 50, 250, 50);
    drawboat(angle3, y3, 1, 60, 70, 250);
  }
  
if (angle1 > 875 || angle2 > 875 || angle3 > 875 ) { 
  
   stopSteps();
 if (redBut===1 && angle1 > 875) {
  
   fill (250, 10, 10);
  text(redwin, width/2-200, height/2-100, 400, 400 ); 
  console.log ("redwin"+redBut)
   
 } 
 else if (redBut===1) { 
    fill (250, 10, 10);  
  text(redlose, width/2-200, height/2-100, 400, 400 );
  console.log ("redlose"+redBut)
 }
 
 if(greenBut===1 && angle2 > 875)  { 
  
   fill (10, 250, 10);
  text(greenwin, width/2-200, height/2-100, 400, 400 );
  console.log ("greenwin"+greenBut)
   
 } 
 
 else if (greenBut===1) { 
    fill (10, 250, 10);  
  text(greenlose, width/2-200, height/2-100, 400, 400 );
  console.log ("greenlose"+greenBut)
 }
  
if(blueBut === 1 && angle3 > 875){
    
    fill (10, 10, 250);
  text(bluewin, width/2-200, height/2-100, 400, 400 );
  console.log ("bluewin"+blueBut)
    
  } 
  
  else if (blueBut===1){ 
     fill (10, 10, 250);  
  text(bluelose, width/2-200, height/2-100, 400, 400 );
    console.log ("bluelose"+blueBut)
  }
  
 
}//winner 



function stopSteps () { 
  x1 = 0; 
  x2 = 0 ; 
  x3 = 0 ; 
} 
  


  
  if (But === 0) {
    angle1 = 0 ;
    angle2 = 0 ;
    angle3 = 0 ;
  } 
    else { angle1 = angle1 + x1;
           angle2 = angle2 + x2; 
           angle3 = angle3 + x3;
    } 
    
 
  
  
}

function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}

function changeColOver() {
  var col = color(1,1,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
}

function changeColOut() {
  var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(1, 3);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill (242, 230, 201)
    noStroke()
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function drawboat (Xstart, Ystart, flagdir, flagColr, flagColg, flagColb) {
 
  
  fill(flagColr, flagColg, flagColb);
  triangle(Xstart+flagdir*20, Ystart-20, Xstart+5, Ystart-39, Xstart+5, Ystart-20 );
   
   fill(96, 62, 17);
  rect(Xstart, Ystart-40, 5, 40);
  arc(Xstart, Ystart, 80, 80, 0, 180, CHORD);

  
} 

 function ChangeVariable () { 

if (But === 0) {
  
  But = 1; }
  
  else { But = 0 ;} 
  
  console.log("The But Variable = "+But)
  
}

function ChangeVariable1() { 
  
 
    
    redBut = 1;
    greenBut = 0;
    blueBut=0;
    
    console.log("the red button = "+redBut) 
    } 
    


function ChangeVariable2() { 
  

    
    greenBut = 1; 
    blueBut = 0; 
    redBut =0; 
    
    console.log("the green button = "+greenBut)
    
  
}
    
 

function ChangeVariable3() { 
  
   
    
    blueBut = 1;
    redBut = 0;
    greenBut=0;
    
    console.log("the  button = "+blueBut) 
  }
    
 
    
    
    
 

/*function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
   
  } else {
    song.play();
  
  }
} */

