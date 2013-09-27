function four (){
scene = 4;
var time = 0; 
var x = canvas.width/2;
var y = canvas.height/2;
var x1 = 0, distance = 0, equis = 0, ye = 0;
var y1 = 0;
var size = 20;
var size2 = 10;
var numCells = 50;
var click = false;
var numWhite = 0;
var mouseX = 0;
var mouseY = 0;
var help = 1000;
var cellsHurt = 0;
var timeOver =false;
var working = []; 
happ = 0;
var gameTime = 0;

var cells = [];

function initiate () {
	for ( var i = 0; i < numCells; i++){
		var cell = {
			x: Math.random()*canvas.width,
			y: Math.random()*canvas.height,
			speed: 1+Math.random()*2,
			equis:0,
			ye:0,
			rad:Math.random()*500,
			rad2:Math.random()*500,
			life:0,
			i:i,
			health: true,
			help: 1000
			
		};
		cells.push(cell);
	}
	console.log('initiated');
}

function background () {
	context.beginPath();
	context.fillStyle="black";
	//rgba(67, 0, 0, 1)
	context.fillRect(0,0,canvas.width,canvas.height);
	context.fill();
}

function circle(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,d,x+10,y+5,0.05);
    radgrad4.addColorStop(0, 'rgba(150, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(100, 0, 0, 1)');
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circle2(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,d,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(98, 0, 0, 1)');
    radgrad4.addColorStop(0.8, 'rgba(160, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(171, 0, 0, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

//medio
function circle1(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
    radgrad4.addColorStop(0, 'rgba(120, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(70, 0, 0, 1)');
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circle12(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(78, 0, 0, 1)');
    radgrad4.addColorStop(0.8, 'rgba(130, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(141, 0, 0, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

//ya muerta

function circle3(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
    radgrad4.addColorStop(0, 'rgba(90, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(40, 0, 0, 1)');
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circle31(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(48, 0, 0, 1)');
    radgrad4.addColorStop(0.8, 'rgba(100, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(111, 0, 0, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

//white body

function circleW(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
    radgrad4.addColorStop(0, 'rgba(0, 255, 255, 1)');
    radgrad4.addColorStop(0.9, 'rgba(0, 155, 255, 0.9)');
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circleW1(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(0, 155, 255, 0.9)');
    radgrad4.addColorStop(0.8, 'rgba(0, 255, 255, 1)');
    radgrad4.addColorStop(0.9, 'rgba(255, 255, 255, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

function rules () {
	if (timeOver && happ == 0){
		if (cellsHurt >= 40 ) {
			alert('You win!');
			timeOver = false;
			four();
			happ = 30;
	
		}else{
			alert('You lost!');	
			four();
			timeOver = false;
			happ = 30;
		}
	}
}

function text(){
	
	context.font="20px Georgia";
	context.fillStyle="white";
	context.fillText("Damaged Cells: " + cellsHurt,canvas.width-200,100);	
	context.fillText("Time: " + Math.round(gameTime*1000),canvas.width-200,50);
	if ( Math.round(gameTime*1000) == 59){
		timeOver = true;
	}
}

function bloodCell (x,y) {
	for ( var i = 0; i < cells.length; i++){
		var cell = cells[i]; 
		if (cell.life == 0) {
			circle(cell.x,cell.y, (Math.sin(time) / 7 + 1) *size);
			circle2(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *size2);
		}
		if (cell.life == 1) {
			circle1(cell.x,cell.y, (Math.sin(time) / 7 + 1) *size);
			circle12(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *size2);
		}
		if (cell.life == 2) {
			circle3(cell.x,cell.y, (Math.sin(time) / 7 + 1) *size);
			circle31(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *size2);
		}
		if (i >= 50){
			circleW(cell.x,cell.y, (Math.sin(time) / 7 + 1) *size);
			circleW1(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *size2);
		}
		

	}
}

function move() {
	for (var i = 0; i < cells.length-numWhite; i++){
		var cell = cells[i];
		var disX = x1-cell.x;
		var disY = y1-cell.y;
		distance = Math.sqrt(disX*disX + disY*disY);
		time+= 0.001;

		//cell followed
		if (cell.health == false && cell.x <canvas.width+30){
				
				var cellHelped; 
				for(a = 50; a < cells.length; a++){
					var selection = cells[a]; 
					if (selection.help == i){ console.log('match'); cellHelped = cells[a]; }  
				}
				var followX = cell.x-cellHelped.x;
				var followY = cell.y-cellHelped.y;
				var distan = Math.sqrt(followX*followX + followY*followY);
				if (distan >size){
				cellHelped.x += (followX/distan)*6;
				cellHelped.y += (followY/distan)*6;	
				}
				working = true;
				console.log('following cell hurt' + working);
		}
		if (i <50) {
			cell.x += cell.speed;
			if (cell.x > canvas.width){
				cell.x = 0;
				cell.y = canvas.height*Math.random();
				cell.life = 0;
				cell.health = true; 
				if (cell.help != 1000){
					console.log(cell.help);
					var newWhite = cells[cell.help];
					newWhite.help = 1000;
					console.log('white memory erased');
					numWhite--;
				}
				console.log('No necessity of a white memory erased');
				cell.help = 1000;

			}
			//first white cell to follow
			///white cell
		}
		else {
				var followX = mouseX-cell.x;
				var followY = mouseY-cell.y;
				var dist = Math.sqrt(followX*followX + followY*followY);
				if (dist >size){
					cell.x += (followX/dist)*8;
					cell.y += (followY/dist	)*8;
				}	
				console.log(i);	
		}
		
		//tangent
		for(j = i + 1; j < cells.length; j++){
		  var cell2 = cells[j];
		  var dx = cell2.x - cell.x;
		  var dy = cell2.y - cell.y;
		  var d = Math.sqrt(dx*dx + dy*dy);
		  
		  if(d <= 2*size){
			if(d === 0){
			  d = 0.1;
			}
			var unitX = dx/d;
			var unitY = dy/d;
			var forceX = unitX;
			var forceY = unitY;
			
			cell2.x += forceX;
			cell2.y += forceY;
     		 }
    	}
	}
}



canvas.addEventListener ("click", function (e){
		x1=e.x-10;
		y1=e.y-70;
		for ( var i = 0; i < cells.length; i++){
			var cell = cells[i]; 
			var disX = x1-cell.x ;
			var disY = y1-cell.y;
			distance = Math.sqrt(disX*disX + disY*disY);
			if (distance <= size+3	 && i <50 ){
				cell.life++;
				numWhite++;
				cellsHurt++;
				var white = {
					x: Math.random()*canvas.width,
					y: canvas.height,
					speed: 1+Math.random()*2,
					equis:0,
					ye:0,
					rad:Math.random()*500,
					rad2:Math.random()*500,
					life:0,
					help: cell.i
				};
				cells.push(white);
				cell.health = false; 
				cell.help = i;
				console.log('cell hurt');
			}
		}
})

canvas.addEventListener ("mousemove", function (e){
	 mouseX = e.x-10;
     mouseY = e.y-70;
})


initiate();
(function animloop(){
	  if (scene == 4) {
		  requestAnimFrame(animloop);
		  context.clearRect(0,0,0,0);
		  background();
		  bloodCell(x,y);
		  rules();
		  text();	
		  move();
		  gameTime+= 0.00002;
	  }
	  else {
	  	context.clearRect(0,0,0,0);
	  	context.beginPath();
		context.fillStyle="black";
		//rgba(67, 0, 0, 1)
		context.fillRect(0,0,canvas.width,canvas.height);
		context.fill();
	  }
    })();

}
