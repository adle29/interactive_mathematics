function two(){
scene = 1;

var time = 0; 
var x = canvas.width/2;
var y = canvas.height/2;
var x1 = 0, distance = 0, equis = 0, ye = 0;
var y1 = 0;

var cells = [];

function initiate () {
	for ( var i = 0; i < 165; i++){
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
//two

function circle1(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
    radgrad4.addColorStop(0, 'rgba(100, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(50, 0, 0, 1)');
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
    radgrad4.addColorStop(0, 'rgba(58, 0, 0, 1)');
    radgrad4.addColorStop(0.8, 'rgba(110, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(121, 0, 0, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}

//three

function circle31(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
//radgrad4.addColorStop(0, 'rgba(0, 0, 180, 1)');
    radgrad4.addColorStop(0, 'rgba(0, 0, 255, 0.4)');
    radgrad4.addColorStop(0.9, 'rgba(0, 0, 200, 0.4)');
	//'rgba(100, 0, 0, 1)'
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circle32(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(0, 0, 98, 0.4)');
    radgrad4.addColorStop(0.8, 'rgba(0, 0, 160, 0.4)');
    radgrad4.addColorStop(0.9, 'rgba(0, 0, 255, 0.4)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}


//cuatro

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


//cinco

function circle5(x,y,d){
	context.beginPath();
	var radgrad4 = context.createRadialGradient(x,y,30,x+10,y+5,0.05);
    radgrad4.addColorStop(0, 'rgba(70, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(20, 0, 0, 1)');
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);
	context.strokeStyle="rgba(0, 0, 0, 0.3)";
	context.lineWidth=6;
	context.stroke();
	context.fill();	
}

function circle51(x,y,d){
	context.beginPath();
	// Create gradient
	var radgrad4 = context.createRadialGradient(x,y,17,x+10,y+5,0.0001);
    radgrad4.addColorStop(0, 'rgba(28, 0, 0, 1)');
    radgrad4.addColorStop(0.8, 'rgba(80, 0, 0, 1)');
    radgrad4.addColorStop(0.9, 'rgba(91, 0, 0, 1)');
	
	// Fill with gradient
	context.fillStyle=radgrad4;
	context.arc(x,y,d,0,2*Math.PI);	
	context.fill();	
}


function bloodCell (x,y) {
	for ( var i = 0; i < cells.length; i++){
		 var cell = cells[i];
		 if (i >= 96 && i < 100){	
			
			circle31(cell.x,cell.y, (Math.sin(time) / 7 + 1) *45);
			circle32(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *32);
		}
		else if (i >= 45 && i < 96){
			//Math.sin(time) / 7 + 1) * 3
			circle1(cell.x,cell.y, (Math.sin(time) / 7 + 1) *25);
			circle12(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *12);
		}
		else if (i >= 100 && i < 145){
			//uevo1
			circle4(cell.x,cell.y, (Math.sin(time) / 7 + 1) *10);
			circle41(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *2);
		}
		else if (i >= 145 && i <= 165){
			//uevo2
			circle5(cell.x,cell.y, (Math.sin(time) / 7 + 1) *20);
			circle51(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *7);
		}
		else {
			
			//Math.sin(time) / 7 + 1) * 3
			circle(cell.x,cell.y, (Math.sin(time) / 7 + 1) *30);
			circle2(cell.x,cell.y,  (Math.sin(time) / 7 + 1) *17);
		}
		
	}
}

function move() {
	for ( var i = 0; i < cells.length; i++){
		if (i <= 100 || i>=145){
			var cell = cells[i];
			var disX = x1-cell.x ;
			var disY = y1-cell.y;
			distance = Math.sqrt(disX*disX + disY*disY);
			if (x1 != 0 &&  distance >5) {
				cell.x += (cell.equis/200)*cell.speed;
				cell.y += (cell.ye/200)*cell.speed;
			}
			time+= 0.0001;
			if (cell.x > canvas.width){
				cell.x = 0;
			}
			if (cell.y+20 > canvas.height){
				cell.y = canvas.height-20;
			}
			if (cell.y < 20){
				cell.y = 20;
			}
		
		
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
		else {
			var cell = cells[i];
			cell.x += 5;
			if (cell.x > canvas.width ){
				cell.x = 0;
				cell.y = Math.random()*canvas.width	;
			}
		}
	
	}
}

canvas.addEventListener ("mousemove", function (e){
		x1=e.x-10;
		y1=e.y-70;
		for ( var i = 0; i < cells.length; i++){
			if (i < 165){
			var cell = cells[i];
			cell.equis = x1-cell.x;
			cell.ye = y1-cell.y; 
			}
		}
});



initiate();
(function animloop(){
	  if (scene == 1) {
		  requestAnimFrame(animloop);
		  context.clearRect();
		  background();
		  bloodCell(x,y);
		  move();
	  }
	  else {
	  	context.clearRect();
	  	context.beginPath();
		context.fillStyle="black";
		//rgba(67, 0, 0, 1)
		context.fillRect(0,0,canvas.width,canvas.height);
		context.fill();
	  }
    })();


}