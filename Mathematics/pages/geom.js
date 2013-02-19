var board = JXG.JSXGraph.initBoard('jxgbox', {originX:250, originY:250, unitX:10, unitY:10, axis:true});
var letters =['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Y', 'Z'];
var colors = ['#FF0000', '#00FF00','#0000FF','#FFFF00','#00FFFF','#FF00FF','9966FF','FF33FF'];
var pointNum = 0;
var pointName = letters[0];
var color = 0;

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
	var x = Math.random()*20;
	var y = Math.random()*20;
	var p1 = board.create('point',[x,y], {name:letters[pointNum],size:3});
	pointNum++;
}

function createLine () {
	var name=prompt("Please enter the points the line will intersect separated by a space."," ");
	name = name.trim();
	var n = name.split(" ");
	console.log(n);
	var li = board.create('line',n, {strokeColor:'#00ff00',strokeWidth:2});	
}

function createPolygon () {
	var name=prompt("Please enter the points to form the polygon."," ");
	name = name.trim();
	var n = name.split(" ")
	var poly = board.create('polygon',n);
}
	
function createCircle () {
	var p1 = board.createElement('point',[0,0], {name:'P1',size: 4, face: 'o'});
	var p2 = board.createElement('point',[10,10], {name:'P2',size: 4, face: 'o'});
	var ci = board.createElement('circle',["P1","P2"], {strokeColor:'#00ff00',strokeWidth:2});
}	
	
function createSlider () {
	var name=prompt("Enter Point."," ");
	name = name.trim();
	var s = board.create('slider',[[2,-3],[12,-3],[1,10,20]], {name: name+'x',snapWidth:1} );
	var s2 = board.create('slider',[[2,-5],[12,-5],[1,10,20]], {name:name+'y',snapWidth:1} );
	var a = board.create('point',[
                 function(){return s.Value();},
                 function(){return s2.Value();}
                 ],{name:name, fixed: true});
}	
		
function eraseBoard () {
	board = JXG.JSXGraph.freeBoard(board);
	board = JXG.JSXGraph.initBoard('jxgbox', {originX:250, originY:250, unitX:10, unitY:10, axis:true});
	pointNum = 0;
}		
	
function text () {
	var x = Math.random()*20;
	var y = Math.random()*20;
	//var p0 = board.create('point', [0,0], {style:5, color:'blue'});
	var txt = board.create('text',[p0.X(),p0.Y(), "Enter"]);
	//var tOff = board.create('transform', [function(){return p0.X()},function(){return p0.Y()}], {type:'translate'}); 
	//tOff.bindTo(txt); 
}

function drawFunction () {	
	var actualColor = colors[color];
	eval("function f(x) { return "+ document.getElementById("graphing").value+";}");
	var graph = board.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:actualColor, strokeWidth:3.0});
	var element = document.getElementById("imprime");
	//element.innerHTML +=  document.getElementById("graphing").value+ "\n";
	color++;
	
}

