
								
function setup() {																		
	createCanvas(480, 450);
	frameRate(30) 

}

function draw() {
	background(244,244,244)
	//middle circles
	stroke(1)
	strokeWeight(1)
	fill(224,224,244,0);
	ellipse(100, 300, 200-frameCount%400, 200-frameCount%400);
	fill(224,224,244,0);
	ellipse(150, 300, frameCount%200, 200-frameCount%400);
	fill(224,224,244,0);
	ellipse(200, 300, 200-frameCount%400, 200-frameCount%400);
	
	//top circles
	noStroke(0);
	fill(255,0,255,100);
	ellipse(100, 200+frameCount%200, 100, 100);
	fill(102,255,255,150)
	ellipse(150, 200+frameCount%200, 100, 100);
	fill(255,255,0,150)
	ellipse(200, 200+frameCount%200, 100, 100);
	
	//bottom circles
	noStroke()
	fill(102,255,255,140);
	ellipse(100, 400-frameCount%200, 100, 100);
	fill(255,255,0,130);
	ellipse(150, 400-frameCount%200, 100, 100);
	fill(255,0,255,110);
	ellipse(200, 400-frameCount%200, 100, 100);

}
