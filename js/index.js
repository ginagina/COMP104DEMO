console.log("index.js loaded");

var spot = {
    x: 100,
    y: 50
}

var col = {
    r: 255,
    g: 0,
    b: 0
}

//var circle ={
//    x: 0,
//    y: 200,
//    diameter: 50
//};
    
//var circleX; //declare custom variable

//var r;  //declare variable
//var b;  //declare variable



function setup(){var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("p5Canvas");
    background(0);
//    col = 0; //initialize variable
//    background(250, 250, 100);
//    circleX = 50; //initialize custom variable
}



function draw(){
    spot.x = random(0, width);
    spot.y = random(0, height);
    col.r = random(0, 255)
    col.g = random(0, 255)
    col.b = random(0,255)
    fill (col.r, col.g, col.b);
    ellipse(spot.x, spot.y, 24, 24);
    
//    r=map(mouseX, 0, width, 0, 255);
//    b=map(mouseX, 0, width, 0, 255);
////    col = map(mouseX, 0, width, 0, 255);
//    background(r, 20, b);
//    noStroke();
//    fill(255, 118, 222);
//    ellipse(mouseX, 300, 64,64);
//    ellipse(circle.x, circle.y, 25, 25);
//    ellipse(circleX, 300, 25, 25);
//    circleX = circleX +1;
//    ellipse(width/2, mouseY, 25, 25);
//    ellipse(mouseX, height/2, 25, 25);
//    ellipse(mouseX, mouseY, 25, 25);
    
//    
//    fill(255, 0, 0);
//    stroke(0, 255, 0);
//    rect(40, 120, 120, 40);
//    
//    noStroke();
//    triangle(300, 100, 500, 100, 500, 300);
};


function mousePressed(){
//    background(250, 250, 100);
//    background(250, 250, 250);
};

