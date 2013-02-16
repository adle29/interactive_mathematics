function pag1 () {

	var board = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-7,300,35,-10],  axis:true});
	var board2 = JXG.JSXGraph.initBoard('jxgbox1',{boundingbox:[-1,2200,12,-250], axis:true});
	
	function drawFunction (func,num) {	
		eval("function f(x) { return "+ func+";}");
		if (num == 1) {
			var graph = board.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#00FFFF', strokeWidth:3.0});
		}
		else {
			var graph = board2.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
	
	}
	
	var p3 = board.create('point',[3,120], {name:"A", fixed:true, size:3});
	var p4 = board.create('point',[4,160], {name:"B",fixed:true,size:3});
	var p5 = board.create('point',[5,200], {name:"C",fixed:true,size:3});
	var p6 = board.create('point',[6,240], {name:"D",fixed:true,size:3});
	var p7 = board.create('point',[7,280], {name:"E",fixed:true,size:3});
	var li2 = board.create('line',["A","B"], {strokeColor:'#00ff00',strokeWidth:2});
	var glider = board.create('glider',[0,0,li2 ],{name:'glider0', size:5, color: '#3366FF'});

	function x11(){return glider.X()};
	function y11(){return glider.Y()};
	var text2 = board.create('text',[15,40, function(){ return 'X = '+Math.round(x11()) }]);
	var text2 = board.create('text',[15,25, function(){ return 'Y = '+Math.round(y11()) }]);
	
	//board2
	var p1 = board2.create('point',[1,600], {name:"A", fixed:true, visible:false, size:3});
	var p2 = board2.create('point',[5,1800], {name:"B",fixed:true, visible:false, size:3});
	var p11 = board2.create('point',[0,600], {name:"C", fixed:true, visible:false, size:3});
	var p22 = board2.create('point',[0,1800], {name:"D",fixed:true, visible:false, size:3});
	
	var li = board2.create('line',["A","B"], {strokeColor:'#00ff00',strokeWidth:2});
	var glider1 = board2.create('glider',[1,600,li],{name:'P1', size:5, color: '#00FF00'});
	var glider2 = board2.create('glider',[5,1800,li],{name:'P2', size:5, color: '#00FF00'});
	
	
	var l1 = board2.create('segment',["P1",[0,function(){return glider1.Y()} ]], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	var l3 = board2.create('segment',[[function(){return glider1.X()},0],"P1"], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
		
	var l2 = board2.create('segment',["P2",[0,function(){return glider2.Y()}]], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	var l4 = board2.create('segment',[[function(){return glider2.X()},0],"P2"], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
		
	drawFunction ("y = x*300 +300",2);
	
	function x1(){return glider1.X()};
	function y1(){return glider1.Y()};
	function x2(){return glider2.X()};
	function y2(){return glider2.Y()};
	function slope1(){return li.getSlope()};
	var slopy = (y2()-y1())/(x2()-x1());
	var text = board2.create('text',[6,100, function(){ return 'y2-y1/x2-x1 ='+Math.round(y2())+'-'+Math.round(y1())
	 +'/'+Math.round(x2())+'-'+Math.round(x1())+'='+Math.round(slopy) }]);
//+'/'+x2()+'-'+x()+'='+slope()
}