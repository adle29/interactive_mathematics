//////////////////////START//////////////////////////

var canvas = document.getElementById('pbox');
var context = canvas.getContext('2d');

var canvas2 = document.getElementById('pbox2');
var context2 = canvas2.getContext('2d');
 
var mouseX = 0;
var mouseY = 0;
var distanceMouseBall;
var balls = [];
var mouseDown=0;
var time=0;
animate();

//////////////////////FUNCTION///////////////////////


function world() {
	canvas.width  = 600;
	canvas.height = 300; 
	//inner design
	context.beginPath();
	context.moveTo(16,4);
	context.lineTo(16,300);
	context.moveTo(10,290);
	context.lineTo(600,290);
	//small lines
	for (var i =1; i< 20; i++){
		//context.moveTo(10,i*29); VERY COOL DESIGN
		//context.lineTo(600,290);
		context.moveTo(10,i*29); 
		context.lineTo(22,i*29);
		
		context.moveTo(16+i*29,284); 
		context.lineTo(16+i*29,296);
		
		context.font="12px Arial";
		context.fillText(i,10+i*29,280);
		
		context.font="12px Arial";
		context.fillText(11-i,2,-29+i*29);
	}
	
	context.stroke();
}

/////////////////////OBJECTS/////////////////////////

function ball(x,y,radius,color){
	if (x == null || y == null){
		x= canvas.width/2;
		y= canvas.height/2;
	}

	var ball = {
		x:x,
		y:y,
		velocity:{x:0, y:0},
		mass:0.62,
		radius:10,
		e:{potential:0}
	}
	
	balls.push(ball);
	console.log(balls);
}

function square(){

}

function stick (){

}

function car(){

}

function bullet(){

}


//////////////PHYSICS AND DRAWING//////////////////////

function clear () {
	world();
}

function animate () {
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame    ||
			  window.oRequestAnimationFrame      ||
			  window.msRequestAnimationFrame     ||
			  function( callback ){
				window.setTimeout(callback, 1000 / 60);
			  };
	})();


	(function animloop(){
	  requestAnimFrame(animloop);
	  clear ();
	  physics();
	  draw();
	  info();
	  
	  drawGraph ();
	})();
	event ();
}

function draw () {
	for (var i = 0; i< balls.length; i++){
		var ball = balls[i];
		context.beginPath();
		

		context.arc(ball.x,ball.y,ball.radius,0,2*Math.PI);
		
		
		context.fill();
	}
}

function physics () {
	var gravity = 0.01;
	var friction = 0.99;
	
	for (var i = 0; i< balls.length; i++){
		var ball = balls[i];
		
		//gravity
		ball.velocity.y+= gravity;
		
		//friction
		ball.velocity.x *= friction;
    	ball.velocity.y *= friction;
    	
    	ball.y+= ball.velocity.y;
		
		if (ball.y > canvas.height-20){
			ball.y = canvas.height - 20;
			ball.velocity.y = -Math.abs(ball.velocity.y);
		}
		
		ball.e.potential = ball.mass*9.8*ball.y;
	}
}

function event () {
	canvas.addEventListener('click', function(e) {
		mouseDown = true;
        mouseX = e.x;
        mouseY= e.y;
        
        
        //distance
        for(i = 0; i < balls.length; i++){
        	var ball = balls[i];
        	ball.x = mouseX;
			ball.y = mouseY;
			
		}
        
    });
    	

}

/////////////////////PANELS/////////////////////////

function info (){
	var infoBox = document.getElementById('info');
	
	for (var i = 0; i< balls.length; i++){
		var ball = balls[i];
		var pos = Math.floor((ball.y)/100); 
		var Ep = Math.floor(pos*9.8*0.62); 
		var Ek = Math.floor(0.5*0.62*ball.velocity.y*ball.velocity.y); 
		infoBox.innerHTML = "<p> Velocity:"+Math.floor(ball.velocity.y)+"</p> <p> Potential Energy: "+Ep+"</p>  <p> Position: "+pos+"</p> <p> Kinetic: "+Ek+"</p>";
		//infoBox.innerHTML = "<p> Postion:</p>";
	}
	
	
	
}

function graph () {
	canvas2.width  = 600;
	canvas2.height = 300;
	//inner design
	context2.beginPath();
	context2.moveTo(16,4);
	context2.lineTo(16,300);
	context2.moveTo(10,290);
	context2.lineTo(600,290);
	//small lines
	for (var i =1; i< 20; i++){

		context2.moveTo(10,i*29); 
		context2.lineTo(canvas2.width ,i*29);
		
		context2.moveTo(16+i*29,0); 
		context2.lineTo(16+i*29,296);
		
		context2.font="12px Arial";
		context2.fillText(i,10+i*28,280);
		
		context2.font="12px Arial";
		context2.fillText(11-i,2,-29+i*29);
	}
	
	context2.stroke();
	
	
}

function drawGraph () {
	///graph
	var potential = [];
	var position = [];

	for (var i = 0; i< balls.length; i++){
		var ball = balls[i];	
		var pos = Math.floor((ball.y)); 
		var Ep = Math.floor(pos*.1*0.62); 
		context2.beginPath();
		context2.arc(pos,Ep,2,0,2*Math.PI);
		context2.fill();
	}
	
}



