/*
 * @name Array of Objects
 * @description Create a Jitter class, instantiate an array of objects
 * and move them around the screen.
 */
var bugs = []; // array of Jitter objects

var But = 0; // the button 

var Xloc1, Xloc2, Xloc3, Yloc; 

 




function setup() {
  createCanvas(1000, 650);
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
  
  frameRate(40); 
  Xloc1 = 0;
  Xloc2 = 0;
  Xloc3= 0;
 
 
  
  
  }
  
   
}

function draw() {
  background(0, 0, 0);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
  
  fill(230, 30, 30);
  rect(900, 125, 10, 499); 
  
  drawboat(100+Xloc1, 200, 1, 230, 50, 50);
  drawboat(100+Xloc2, 400, 1, 50, 250, 50);
  drawboat(100+Xloc3, 600, 1, 60, 70, 250);
  

  
  var step1 = random(2, 40); 
  var step2 = random(2, 40);
  var step3 = random(2, 40); 
  
  if (Xloc1 > 800)  { 
    StopSteps();
  } 
  
  if (Xloc2 > 800)  { 
    StopSteps
  }
  
  if (Xloc3 > 800)  { 
    StopSteps
  }
      //if (Xloc2 > 800) { step2 = 0;} 
     // if (Xloc3 > 800) { step3 = 0;} 
      
      if (Xloc1 >753) { StopSteps } 
      
      if (Xloc2 > 753 ) { StopSteps } 


      if (Xloc3 > 753) { StopSteps }


  
  if (But === 0) {
    
    Xloc1 = Xloc1
    Xloc2 = Xloc2
    Xloc3 = Xloc3
    
    
    
  } 
    else { Xloc1 = Xloc1+step1 
    
    Xloc2 = Xloc2+step2
    Xloc3 = Xloc3+step3
    
        
      
    }
    
  
  
}


function StopSteps () { 
  step1=0;
    step2 =0;
    step3 = 0;
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
  arc(Xstart, Ystart, 80, 80, 0, PI, CHORD);

  
} 

 function ChangeVariable () { 

if (But === 0) {
  
  But = 1; }
  
  else { But = 0 ;} 
  
  console.log("The But Variable = "+But)
  
 }
  
 