function three (){
scene = 3;
var time = 0; 
var x = canvas.width/2;
var y = canvas.height/2;
var x1 = 0, distance = 0, equis = 0, ye = 0;
var y1 = 0;
var numCells = 20;
var cells = [];
var inside = false; 
var score = 0 ;
var size = 30;
var size2 = 17
var lost =false; 

function initiate () {
	for ( var i = 0; i < numCells; i++){
		var cell = {
			x: Math.random()*canvas.width,
			y: Math.random()*canvas.height,
			speed: 1+Math.random()*3,
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

//blood
function circle(x,y,d){
	context.beginPath();
	if (size >= 1){
	var radgrad4 = context.createRadialGradient(x,y,d,x+10,y+5,0.05);
    radgrad4.addColorStop(0, 'rgba(150, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(100, 0, 0, 1)');
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
	console.log(d);
	}
}

function circle2(x,y,d){
	context.beginPath();
	// Create gradient
	if (size >= 1){
	var radgrad4 = context.createRadialGradient(x,y,d,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(98, 0, 0, 1)');
    radgrad4.addColorStop(0.8, 'rgba(160, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(171, 0, 0, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
	}
}

//oxygen

function circle4(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
//radgrad4.addColorStop(0, 'rgba(0, 0, 180, 1)');
    radgrad4.addColorStop(0, 'rgba(0, 255, 255, 1)');
    radgrad4.addColorStop(0.9, 'rgba(0, 0, 230, 0.4)');
	//'rgba(100, 0, 0, 1)'
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circle41(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.001);
    radgrad4.addColorStop(0, 'rgba(0, 0, 98, 0.4)');
    radgrad4.addColorStop(0.8, 'rgba(196, 255, 255, 0.4)');
    radgrad4.addColorStop(0.9, 'rgba(0, 255, 255, 0.4)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

//virus

function circle31(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
//radgrad4.addColorStop(0, 'rgba(0, 0, 180, 1)');
    radgrad4.addColorStop(0, 'rgba(0, 255, 0, 0.9)');
    radgrad4.addColorStop(0.9, 'rgba(215, 255, 0, 0.9)');
	//'rgba(100, 0, 0, 1)'
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circle3(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.001);
    radgrad4.addColorStop(0, 'rgba(0, 0, 98, 0.4)');
    radgrad4.addColorStop(0.8, 'rgba(196, 255, 255, 0.4)');
    radgrad4.addColorStop(0.9, 'rgba(0, 255, 255, 0.4)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

function text () {
	context.font="20px Georgia";
	context.fillStyle="white";
	context.fillText("Score: " + score,canvas.width-140,100);	
	context.fillText("Top Score: " + topscore,canvas.width-140,150);	

}

function rules () {
	if (size2 <= 0){
		alert('You lost!');
		console.log('lost');
		size2=17;
		three();
	}
	if (topscore < score){
		topscore = score;
	}
}

function bloodCell (x,y) {
	for ( var i = 0; i < cells.length; i++){
		var cell = cells[i];
		if ( i < 1){
			circle(cell.x,cell.y, size);
			circle2(cell.x,cell.y, size2);
		}
		else if (i >= 17){
			circle31(cell.x,cell.y, 15+(score/4));
			circle3(cell.x,cell.y, 7+(score/4));
		}
		else{
			circle4(cell.x,cell.y, 10);
			circle41(cell.x,cell.y,  2);
		}
	}
}

function move() {
	for ( var i = 0; i < cells.length; i++){
		var cell = cells[i];
		if ( i < 1){
			var cell = cells[i];
			var disX = x1-cell.x ;
			var disY = y1-cell.y;
			distance = Math.sqrt(disX*disX + disY*disY);
			var unitX = disX / distance;
        	var unitY = disY / distance;
        	var force = distance * 0.05;
			time+= 0.0001;
			//values
			if (x1 != 0 &&  distance >5) {
				cell.x += unitX*force;
				cell.y += unitY*force;
			}

			//tangent
			for(j = i + 1; j < cells.length; j++){
				  var cell2 = cells[j];
				  var dx = cell2.x - cell.x;
				  var dy = cell2.y - cell.y;
				  var d = Math.sqrt(dx*dx + dy*dy);
					
				  if ( j > 1  ){  
						if ( d < size ) {
							cell2.x = 0;
							cell2.y = canvas.height;
							if ( j < 17){
								score++;
								size++;
								size2++;
							}
							else{
								score-=10;
								size -=10;
								size2 -=10;
							}
						}
				  }
			}
		}	 
			
    	else {
    		cell.x += 3*cell.speed;
    		if (cell.x > canvas.width){
				cell.x = 0;
				cell.y = Math.random()*canvas.height; 
			}
    	}
	
	}
}


canvas.addEventListener ("mousemove", function (e){
		x1=e.x-10;
		y1=e.y-70;
		var cell = cells[0];
		cell.equis = x1-cell.x;
		cell.ye = y1-cell.y; 
		inside = true;
});

canvas.addEventListener ("mouseout", function (e){	
		inside = false;
});

initiate();
(function animloop(){
	  if (scene == 3) {
		  requestAnimFrame(animloop);
		  context.clearRect(0,0,0,0);
		  rules();
		  background();
		  bloodCell(x,y);
		  move();
		  text();
	  }
	  else {
	  	context.clearRect(0,0,0,0);
	  	context.beginPath();
		context.fillStyle="black";
		context.fillRect(0,0,canvas.width,canvas.height);
		context.fill();
	  }
    })();

}
