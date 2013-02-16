function pag2 () {

	var board3 = JXG.JSXGraph.initBoard('jxgbox3',{boundingbox:[-14,8,14,-8], axis:true});
	var board4 = JXG.JSXGraph.initBoard('jxgbox4',{boundingbox:[-14,8,14,-8],  axis:true});
	var board5 = JXG.JSXGraph.initBoard('jxgbox5',{boundingbox:[-14,8,14,-8],  axis:true});
	var board6 = JXG.JSXGraph.initBoard('jxgbox6',{boundingbox:[-14,8,14,-8],  axis:true});
	var board7 = JXG.JSXGraph.initBoard('jxgbox7',{boundingbox:[-14,8,14,-8],  axis:true});
	var board8 = JXG.JSXGraph.initBoard('jxgbox8',{boundingbox:[-14,8,14,-8],  axis:true});
	var board9 = JXG.JSXGraph.initBoard('jxgbox9',{boundingbox:[-14,8,14,-8],  axis:true});
		
		
	function drawFunction (func,num) {	
		eval("function f(x) { return "+ func+";}");
		if (num == 1) {
			var graph = board3.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#66FF99', strokeWidth:3.0});
		}
		else if (num == 2) {
			var graph = board4.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 3) {
			var graph = board5.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#FF99FF', strokeWidth:3.0});
		}
		else if (num == 4) {
			var graph = board6.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#9900CC', strokeWidth:3.0});
		}
		else if (num == 5) {
			var graph = board7.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#669900', strokeWidth:3.0});
		}
		else if (num == 6) {
			var graph = board8.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#FF3300', strokeWidth:3.0});
		}
		else {
			var graph = board9.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#00FFFF', strokeWidth:3.0});
	
		}
	
	}

	
	//board1
	var s = board3.create('slider',[[2,-5],[10,-5],[-14,4,14]], {name:'b'});	
	var p1 = board3.create('point',[-3,3], {name:"A", size:3});
	
	var p2 = board3.create('point',[function(){return 0}, function(){return s.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line = board3.create('line',[p1,p2], {color:'#FFCCFF'});
	var text = board3.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line.getSlope().toFixed(3)+'x'+'+'+'+'+Math.round(s.Value ());; }]);
	
	
	
	//board2
	var s2 = board4.create('slider',[[2,-5],[10,-5],[-14,0,14]], {name:'b'});	
	var p3 = board4.create('point',[3,2], {name:"A", size:3});
	var p4 = board4.create('point',[function(){return 0}, function(){return s2.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line2 = board4.create('line',[p3,p4], {color:'#CCCC00'});
	var text2 = board4.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line2.getSlope().toFixed(3)+'x'+'+'+Math.round(s2.Value ()); }]);
	
	//board3
	var s3 = board5.create('slider',[[2,-5],[10,-5],[-14,0,14]], {name:'b'});	
	var p5 = board5.create('point',[1,-3], {name:"A", size:3});
	var p6 = board5.create('point',[function(){return 0}, function(){return s3.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line3 = board5.create('line',[p5,p6], {color:'#66FF33' });
	var text3 = board5.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line3.getSlope().toFixed(3)+'x'+'+'+Math.round(s3.Value ()); }]);
	
	//board4
	//drawFunction ("y = -x/4-2", 4);
	var s4 = board6.create('slider',[[2,-5],[10,-5],[-14,-2,14]], {name:'b'});	
	var p7 = board6.create('point',[-4,-1], {name:"A", size:3});
	var p8 = board6.create('point',[function(){return 0}, function(){return s4.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line4 = board6.create('line',[p7,p8], {color:'#9900CC' });
	var text4 = board6.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line4.getSlope().toFixed(3)+'x'+'+'+Math.round(s4.Value ()); }]);
	
	//board5
		
	var s5 = board7.create('slider',[[2,-5],[10,-5],[-14,1.5,14]], {name:'b'});	
	var s6 = board7.create('slider',[[2,-7],[10,-7],[-14,-3,14]], {name:'b'});
	var p9 = board7.create('point',[-5,1.5], {name:"A", size:3});
	var p10 = board7.create('point',[function(){return 0}, function(){return s5.Value();} ], {name:"B", color: '#3366FF', size:3});
	var p11 = board7.create('point',[-4.5,-3], {name:"C", size:3});
	var p12 = board7.create('point',[function(){return 0}, function(){return s6.Value();} ], {name:"D", color: '#3366FF', size:3});
	
	var line5 = board7.create('line',[p9,p10], {color:'#669900' });
	var line6 = board7.create('line',[p11,p12], {color:'#669900' });
	
	var text5 = board7.create('text',[-8,-5, function(){ return 'L1: f(x) ='+ 
	line5.getSlope().toFixed(3)+'x'+'+'+Math.round(s5.Value ()); }]);
	
	var text6 = board7.create('text',[-8,-7, function(){ return 'L2: f(x) ='+ 
	line6.getSlope().toFixed(3)+'x'+'+'+Math.round(s6.Value ()); }]);
	
	//board6
	var s7 = board8.create('slider',[[2,-5],[10,-5],[-14,0,14]], {name:'b'});	
	var p13 = board8.create('point',[-3.5,2.5], {name:"A", size:3});
	var p14 = board8.create('point',[function(){return 0}, function(){return s7.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line7 = board8.create('line',[p13,p14], {color:'#FF9933' });
	var text7 = board8.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line7.getSlope().toFixed(3)+'x'+'+'+Math.round(s7.Value ()); }]);
	
	//board7
	
	drawFunction ("y = x/3	+3", 7);
	
	drawFunction ("y = x/3+1", 7);
	
	drawFunction ("y = x/3", 7);
	
	drawFunction ("y = x/3-2", 7);
	board9.create('point',[0,3], {name:"L1", size:3});
	board9.create('point',[0,1], {name:"L2", size:3});
	board9.create('point',[0,0], {name:"L3", size:3});
	board9.create('point',[0,-2], {name:"L4", size:3});
	
	board9.create('text',[8,-3, function(){ return 'L1: f(x) = x+3' }]);
	board9.create('text',[8,-4, function(){ return 'L2: f(x) = x+1' }]);
	board9.create('text',[8,-5, function(){ return 'L3: f(x) = x' }]);
	board9.create('text',[8,-6, function(){ return 'L4: f(x) = x-2' }]);
}
