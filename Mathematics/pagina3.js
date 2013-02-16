function pag3 () {

	var board3 = JXG.JSXGraph.initBoard('jxgbox3',{boundingbox:[-14,8,14,-8], axis:true});
	var board4 = JXG.JSXGraph.initBoard('jxgbox4',{boundingbox:[-14,8,14,-8],  axis:true});
	var board5 = JXG.JSXGraph.initBoard('jxgbox5',{boundingbox:[-14,8,14,-8],  axis:true});
	var board6 = JXG.JSXGraph.initBoard('jxgbox6',{boundingbox:[-14,8,14,-8],  axis:true});
	var board7 = JXG.JSXGraph.initBoard('jxgbox7',{boundingbox:[-14,8,14,-8],  axis:true});
	var board8 = JXG.JSXGraph.initBoard('jxgbox8',{boundingbox:[-14,8,14,-8],  axis:true});
	//var board9 = JXG.JSXGraph.initBoard('jxgbox9',{boundingbox:[-14,8,14,-8],  axis:true});
	//var board10 = JXG.JSXGraph.initBoard('jxgbox10',{boundingbox:[-14,8,14,-8],  axis:true});
		
		
	/*function drawFunction (func,num) {	
		eval("function f(x) { return "+ func+";}");
		if (num == 1) {
			var graph = board3.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 2) {
			var graph = board4.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 3) {
			var graph = board5.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 4) {
			var graph = board6.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 5) {
			var graph = board7.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 6) {
			var graph = board8.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 7) {
			var graph = board9.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
		else if (num == 8) {
			var graph = board10.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'#0000FF', strokeWidth:3.0});
		}
	
	}*/
	
	//board1
	var s = board3.create('slider',[[2,-5],[10,-5],[-14,2,14]], {name:'b'});	
	var p1 = board3.create('point',[1,5], {name:"A", size:3});
	
	var p2 = board3.create('point',[function(){return 0}, function(){return s.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line = board3.create('line',[p1,p2], {color:'#FFCCFF'});
	var text = board3.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line.getSlope().toFixed(3)+'x'+'+'+Math.round(s.Value ());; }]);
	
	//board2
	var s2 = board4.create('slider',[[2,-5],[10,-5],[-14,0,14]], {name:'b'});	
	var p3 = board4.create('point',[4,4], {name:"A", size:3});
	var p4 = board4.create('point',[function(){return 0}, function(){return s2.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line2 = board4.create('line',[p3,p4], {color:'#CCCC00'});
	var text2 = board4.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line2.getSlope().toFixed(3)+'x'+'+'+Math.round(s2.Value ()); }]);
	
	//board3
	var s3 = board5.create('slider',[[2,-5],[10,-5],[-14,-0.5,14]], {name:'b'});	
	var p5 = board5.create('point',[1,-1], {name:"A", size:3});
	var p6 = board5.create('point',[function(){return 0}, function(){return s3.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line3 = board5.create('line',[p5,p6], {color:'#66FF33' });
	var text3 = board5.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line3.getSlope().toFixed(3)+'x'+'+'+Math.round(s3.Value ()); }]);
	
	//board4
	var s4 = board6.create('slider',[[2,-5],[10,-5],[-14,0,14]], {name:'b'});	
	var p7 = board6.create('point',[-4,-3], {name:"A", size:3});
	var p8 = board6.create('point',[function(){return 0}, function(){return s4.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line4 = board6.create('line',[p7,p8], {color:'#9900CC' });
	var text4 = board6.create('text',[2,-7, function(){ return 'f(x) ='+ 
	line4.getSlope().toFixed(3)+'x'+'+'+Math.round(s4.Value ()); }]);
	
	//board5
	var s5 = board7.create('slider',[[2,-5],[10,-5],[-14,-2,14]], {name:'b'});	
	var p9 = board7.create('point',[3,0], {name:"A", size:3});
	var p10 = board7.create('point',[function(){return 0}, function(){return s5.Value();} ], {name:"B", color: '#3366FF', size:3});
	var line5 = board7.create('line',[p9,p10], {color:'#669900' });
	var text5 = board7.create('text',[2,-6, function(){ return 'L1: f(x) ='+ 
	line5.getSlope().toFixed(3)+'x'+'+'+Math.round(s5.Value ()); }]);
	
	//board7
	var s6 = board8.create('slider',[[2,-7],[10,-7],[-14,-5,14]], {name:'b'});
	var p11 = board8.create('point',[-2,-5], {name:"C", size:3});
	var p12 = board8.create('point',[function(){return 0}, function(){return s6.Value();} ], {name:"D", color: '#3366FF', size:3});
	var line6 = board8.create('line',[p11,p12], {color:'#669900' });
	var text6 = board8.create('text',[-8,-7, function(){ return 'L2: f(x) ='+ 
	line6.getSlope().toFixed(3)+'x'+'+'+Math.round(s6.Value ()); }]);
	

}