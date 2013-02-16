function pag12 () {
    var board = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-1,10,10,-1],keepaspectratio: true, axis:true});
    
   var a = board.create('point',[0, 0], {name:'A',size:3});
   var b = board.create('point',[0, 10], {name:'B',size:3});
   var c = board.create('point',[10, 0], {name:'C',size:3});
   var e1 = board.create('point',[10, 10], {name:'E1',size:3});
   var square1 = board.create('polygon',[a,b,e1,c], {color:"#FF0000"});
   var d = board.create('point',[0, 2.5], {name:'D',size:3});
   var e = board.create('point',[7.5, 0], {name:'E',size:3});
   var f = board.create('point',[10, 7.5], {name:'F',size:3});
   var g = board.create('point',[2.5, 10], {name:'G',size:3});
   var square2 = board.create('polygon',[d,e,f,g], {color: "#0000FF"});
   var h = board.create('point',[12.5, 7.5], {name:'H',size:3});
   var i = board.create('point',[12.5, 0], {name:'I',size:3});
   var j = board.create('point',[15, 0], {name:'J',size:3});
   var triangle1 = board.create('polygon', [h,i,j]);
   var k = board.create('segment',[d,g], {color: "#00FF00"});
   var l = board.create('segment',[d,e], {color: "#00FF00"});
   var m = board.create('segment',[e,f], {color: "#00FF00"});
   var n = board.create('segment',[f,g], {color: "#00FF00"});
   var o = board.create('segment',[d,a], {color: "#0000FF"});
   var p = board.create('segment',[e,c], {color: "#0000FF"});
   var q = board.create('segment',[f,e1], {color: "#0000FF"});
   var r = board.create('segment',[b,g], {color: "#0000FF"});
   var s = board.create('segment',[i,j], {color: "#0000FF"});
   var t = board.create('segment',[f,c], {color: "#FF0000"});
   var u = board.create('segment',[a,e], {color: "#FF0000"});
   var v = board.create('segment',[d,b], {color: "#FF0000"});
   var z = board.create('segment',[g,e1], {color: "#FF0000"});
   var y = board.create('segment',[i,h], {color: "#FF0000"});
   var a2 = board.create('point',[0, -1], {name:'A2',size:3});
   var b2 = board.create('point',[7.5, -1], {name:'B2',size:3});
   var c2 = board.create('point',[10, -2], {name:'C2',size:3});
   var d2 = board.create('point',[7.5, -2], {name:'D2',size:3});
   var e2 = board.create('segment',[a2,b2], {color: "#FF0000"});
   var f2 = board.create('segment',[c2,d2], {color: "#


 
   //var triangle3 = board.create('polygon',[,,], {color:"#FF0000"});

   
  

}