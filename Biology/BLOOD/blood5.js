function five (){
scene = 5;
var time = 0; 
var x = canvas.width/2;
var y = canvas.height/2;
var x1 = 0, distance = 0, equis = 0, ye = 0;
var y1 = 0;

var cells = [];

function initiate () {
	for ( var i = 0; i < 100; i++){
		var cell = {
			x: Math.random()*canvas.width,
			y: Math.random()*canvas.height,
			speed: 1+Math.random()*2,
			equis:0,
			ye:0,
			rad:Math.random()*500,
			rad2:Math.random()*500
			
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
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
//radgrad4.addColorStop(0, 'rgba(180, 0, 0, 1)');
    radgrad4.addColorStop(0, 'rgba(150, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(100, 0, 0, 1)');
	//'rgba(100, 0, 0, 1)'
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
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(98, 0, 0, 1)');
    radgrad4.addColorStop(0.8, 'rgba(160, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(171, 0, 0, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

function bloodCell (x,y) {
	for ( var i = 0; i < cells.length; i++){
		var cell = cells[i];
		//Math.sin(time) / 7 + 1) * 3
		circle(cell.x,cell.y, 20);
		circle2(cell.x,cell.y,  	7);
	}
}

function move() {
	for ( var i = 0; i < cells.length; i++){
		var cell = cells[i];
		var disX = x1-cell.x ;
		var disY = y1-cell.y;
		distance = Math.sqrt(disX*disX + disY*disY);
		if (x1 != 0 &&  distance >5) {
			cell.x += (cell.equis/200)*cell.speed;
			cell.y += (cell.ye/200)*cell.speed;
		}
		time+= 0.0001;


		//tangent
		for(j = i + 1; j < cells.length; j++){
		  var cell2 = cells[j];
		  var dx = cell2.x - cell.x;
		  var dy = cell2.y - cell.y;
		  var d = Math.sqrt(dx*dx + dy*dy);
		  
		  if(d <= 2*30){
			if(d === 0){
			  d = 0.1;
			}
			var unitX = dx/d;
			var unitY = dy/d;
			var forceX = unitX*2;
			var forceY = unitY*2;
			
			//cell.x += forceX;
			//cell.y += forceY;
			
			cell2.x += forceX;
			cell2.y += forceY;
     		 }
    	}
	}
}

canvas.addEventListener ("mousemove", function (e){
		x1=e.x-10;
		y1=e.y-70;
		for ( var i = 0; i < cells.length; i++){
			var cell = cells[i];
			cell.equis = x1-cell.x;
			cell.ye = y1-cell.y; 
		}
		console.log('happens');
});

initiate();
(function animloop(){
	  if (scene == 5) {
		  requestAnimFrame(animloop)
		  bloodCell(x,y);
		  move();
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
