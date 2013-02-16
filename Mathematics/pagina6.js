function pag6 () {
    
    var board2 = JXG.JSXGraph.initBoard('jxgbox1',{boundingbox:[-2,10,12.5,-2],keepaspectratio: true, axis:true});
    
   var board = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-2,7,12.5,-2],keepaspectratio: true, axis:false});
    
   var p1 = board.create('point',[0, 0], {name: "", visible:true});
   var p2 =  board.create('point',[2, 2], {name: "p2", visible:false});
   var a = board.create('point',[2, 0], {name:'A',size:3});
   var b = board.create('point',[1.42, 1.42], {name:'B',size:3});
   var c = board.create('point',[3.69, 1.55], {name:'C',size:3});
   var e = board.create('point',[4, 0], {name:'E',size:3});
   var f = board.create('point',[7.40, 3.11], {name:'F',size:3});
   var g = board.create('point',[2.86, 2.86], {name:'G',size:3});
   var triangle3 = board.create('polygon',[e,f,g], {color:"#FF0000"});
   var h = board.create('point',[4.27, 4.27], {name:'H',size:3});
   var i = board.create('point',[6, 0], {name:'I',size:3});
   var j = board.create('point',[11.07, 4.65], {name:'J',size:3});
   var triangle4 = board.create('polygon',[h,i,j], {color:"#6600FF"});
   
    var l12 = board.create('line',[p1,p2], { dash:3});
    var l13 = board.create('line',[[0,0],c], { dash:3});
    var l14 = board.create('line',[[0,0],e], { dash:3});
    

    //var glider2 = board.create('glider',[0,0,l12 ],{name:"Y'", size:5, color: '#00FF00'});
  //  board.create('text',[10,5,function(){return Math.sqrt (glider2.X()*glider2.X() + glider2.Y()*glider2.Y() ); } ]);
    
   // var glider1 = board.create('glider',[0,0,l13 ],{name:"X'", size:5, color: '#00FF00'});
   // board.create('text',[10,4,function(){return Math.sqrt (glider1.X()*glider1.X() + glider1.Y()*glider1.Y() ); } ]);
    
    var triangle2 = board.create('polygon',[b,a,c]);
    
    
}