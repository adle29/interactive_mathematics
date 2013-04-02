var board = JXG.JSXGraph.initBoard('jxgbox');
var letters =['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Y', 'Z'];
var colors = ['#FF0000', '#00FF00','#0000FF','#FFFF00','#00FFFF','#FF00FF','9966FF','FF33FF'];
var pointNum = 0;
var pointName = letters[0];
var color = 0;
var time; 

//value input
function commands() {
	var cmd_points = /[^\w](crear\s+punto|point|p|points|dot|punto|puntos|puntito)[^\w]/i;
	var cmd_linea = /[^\w]()[^\w]/i;
	var textbox = document.getElementById("graphing");
	var command = " "+textbox.value+ " "; 
	var point = ["hello", "points", "p"];
	
	if (cmd_points.test(command))
	{
		createPoint();
	}
	
}

//input functions
function handle_keypress(event) {
	
	if (event.which == 13 || event.keycode == 13)
	{
		commands();
	}
}

function speech (event) {
	if (event.which != 13 || event.keycode != 13)
	{
		commands();
	}
}

//operations functions
function createPoint () {
	var x = Math.random()*5;
	var y = Math.random()*1;
	var p1 = board.create('point',[x,y], {name:letters[pointNum],size:3});
	pointNum++;
}

function createLine () {
	var name=prompt("Please enter the points the line will intersect."," ");
	name = name.toUpperCase();
	name = name.trim();
	name = name.replace(" ","");
	var n = name.split("");
	console.log(n);
	var li = board.create('line',n, {strokeColor:'#00ff00',strokeWidth:2,straightFirst:false, straightLast:false});	
    
    var p1 = n[0];
    var p2 = n[1];

	board.create('text',[
  		function(){return (p1.X()+p2.X())/2 },
  		function(){return (p1.Y()+p2.Y())/2 },
  		function(){
  			dist = p1.Dist(p2);
    		return 'ρ='+ dist.toFixed(2);
    	}
    ]);
	
	
	
}

function rectLine(){
	var p1 = board.create('point',[0,-1], {name:letters[pointNum],size:3});
	var p2 = board.create('point',[4,-1], {name:letters[pointNum+1],size:3});
	var li = board.create('line',[p1,p2], {strokeColor:'blue',strokeWidth:2});	
	pointNum+=2;
}

function createPolygon () {
	var name=prompt("Please enter the points to form the polygon."," ");
	name = name.toUpperCase().trim().replace(" ","");
	var n = name.split("")
	var poly = board.create('polygon',n);
}
	
function createCircle () {
	var p1 = board.create('point',[3,0], {name:'Y',size: 4, face: 'o'});
	var p2 = board.create('point',[0,0], {name:'Z',size: 4, face: 'o'});
	var ci = board.createElement('circle',["Y","Z"], {strokeColor:'#00ff00',strokeWidth:2});
	pointNum+= 2;
}	
			
function eraseBoard () {
	board = JXG.JSXGraph.freeBoard(board);
	board = JXG.JSXGraph.initBoard('jxgbox');
	pointNum = 0;
}		

function angle(){
	var name=prompt("Please enter the points the line will intersect."," ");
	name = name.toUpperCase();
	name = name.trim();
	name = name.replace(" ","");
	var n = name.split("");
	console.log(n);
	board.create('angle',n, {});
}
	


function drawFunction () {	

	var actualColor = colors[color];
	eval("function f(x) { return "+ document.getElementById("graphing").value+";}");
	var graph = board.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:actualColor, strokeWidth:3.0});
	var element = document.getElementById("imprime");
	color++;
	if (color >7){color=0;}
}


