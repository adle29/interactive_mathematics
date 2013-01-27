function pag4 () {
	var board2 = JXG.JSXGraph.initBoard('jxgbox1',{boundingbox:[-25,50,130,-20], axis:true});
	
	var p1 = board2.create('point',[30,20], {name:"A",fixed:true, size:3});
	var p2 = board2.create('point',[60,35], {name:"B",fixed:true, size:3});
	var p3 = board2.create('point',[120,40], {name:"C",fixed:true, size:3});
	var l1 = board2.create('segment',[[0,0],"A"], {strokeColor:'#00ff00',strokeWidth:2});
	var l2 = board2.create('segment',["A","B"], {strokeColor:'#00ff00',strokeWidth:2});
	var l3 = board2.create('segment',["B","C"], {strokeColor:'#00ff00',strokeWidth:2});
	
	var l4 = board2.create('segment',["A",[30,0]], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	var l5 = board2.create('segment',["B",[60,0]], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	var l6 = board2.create('segment',["C",[120,0]], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	
	var l7 = board2.create('segment',[[0,20],"A"], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	var l8 = board2.create('segment',[[0,35],"B"], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	var l9 = board2.create('segment',[[0,40],"C"], {strokeColor:'#3399FF',dash:3, strokeWidth:2});
	
}

