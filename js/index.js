console.log("index.js loaded");

function setup(){var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("p5Canvas");
}



function draw(){
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 25, 25);
//    
//    fill(255, 0, 0);
//    stroke(0, 255, 0);
//    rect(40, 120, 120, 40);
//    
//    noStroke();
//    triangle(300, 100, 500, 100, 500, 300);
}
