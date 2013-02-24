//////////////////////START//////////////////////////

var canvas = document.getElementById('pbox');
var context = canvas.getContext('2d');

var board = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-1,11,20,-1],axis:true});
 
var mouseX = 0;
var mouseY = 0;
var distanceMouseBall;
var d = new Date();
var balls = [];
var mouseDown=0;
var time=0;
setInterval(function(){time++;}, 100);
animate();
var happen = false;

//physics
var Cd = 0.47; // Dimensionless
var rho = 1.22; // kg / m^3
var A = Math.PI * ball.radius * ball.radius / (10000);
var ag = 9.81;
var frameRate = 1/40; // Seconds
var frameDelay = frameRate * 1000; // ms

	var vi = 0;
	var vf = 0;
	var EPI = 0;
	var EPF = 0;
	var EKI = 0;
	var EKF = 0;



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
		mass:0.1,
		radius:10,
		e:{potential:0}
	}
	
	balls.push(ball);
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
	var gravity = 9.8;
	var friction = -0.7;
	
	for (var i = 0; i< balls.length; i++){
		var ball = balls[i];
		var Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
		var Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);
		
		Fx = (isNaN(Fx) ? 0 : Fx);
		Fy = (isNaN(Fy) ? 0 : Fy);
		
		var ax = Fx / ball.mass;
		var ay = ag + (Fy / ball.mass);
	
		
		//gravity
		ball.velocity.x += ax*frameRate;
		ball.velocity.y += ay*frameRate;
    	
    	ball.y+= ball.velocity.y*frameRate*100;
		
		if (ball.y > canvas.height-20){
			ball.velocity.y *= friction;
			ball.y =canvas.height-20;

			ball.velocity.y = -Math.abs(ball.velocity.y);
		}
		
		ball.e.potential = ball.mass*9.8*ball.y;
	}
}

function event () {
	canvas.addEventListener('click', function(e) {
		mouseDown = true;
        mouseX = e.x-230;
        mouseY= e.y-70;
        time=0;	
         
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
		var pos = Math.floor(9-(ball.y)/33.33); 
		
		
		
		var Ep = Math.floor(pos*9.8*ball.mass); 
		
		var Ek = Math.floor(0.5*ball.mass*ball.velocity.y*ball.velocity.y);
		
		if(time == 0){
			vi = Math.floor(ball.velocity.y);
			EPI = Ep;
			EKI = Ek
		}
		if (Math.floor(ball.y) == canvas.height-25 && happen == false){
			vf = Math.floor(ball.velocity.y);
			EPF = Ep;
			EKF = 0.5*ball.mass*ball.velocity.y*ball.velocity.y;
			console.log('hap'+EKF);
			happen = true;
		} 
		infoBox.innerHTML = "<p> Time: "+time+" s</p>"+
							"<p> Position: "+pos+" m</p>"+
							"<p> vi: "+vi+" m/s</p>"+
							"<p> vf: "+vf+" m/s</p>"+
							"<p> EPI: "+EPI+" J</p>"+
							"<p> EKI: "+EKI+" J<p> "+
							"<p> EPF: "+EPF+" J</p>"+
							"<p> EKF: "+EKF+" J</p>";
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
		var pos = Math.abs(Math.floor(9-(ball.y)/29));
		var vel = Math.floor(ball.velocity.y); 
		if (ball.y != 280 && ball.velocity.y != 0){
		board.create('point',[function(){return time},function(){return pos}], {name:'',size:1});
		
		}
		if (time <10){
		//	console.log(pos+ '---' + time);
		}
	}
	
}

function clearGraph () {
	board = JXG.JSXGraph.freeBoard(board);
	board = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-1,11,20,-1],axis:true});	
}


