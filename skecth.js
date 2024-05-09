let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  createCanvas(300, 300);
  background(color(700, 0 , 0));
  cor = color(random(0, 220), random(0, 155), random(0, 55));
  
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  
  fill(cor);
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);    
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3); 
    
    if(circuloX[contador] >= width){
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 240), random(0, 240), random(0, 240), random(0, 100));
  }
}

