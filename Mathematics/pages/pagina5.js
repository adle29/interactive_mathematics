function pag5 () {
    
    var board = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-2,7,12.5,-2],keepaspectratio: true, axis:false});
    var board2 = JXG.JSXGraph.initBoard('jxgbox1',{boundingbox:[-2,7,12.5,-2],keepaspectratio: true, axis:true});
    var s = board.create('slider',[[7,-1],[13,-1],[-5,0,5]], {name:'b'});
    
    var cc1 = board.create('point',[function () { return 6+s.Value(); }, 0], {name:'C',size:4});
    var aa1 = board.create('point',[0, 0], {name:'A',size:4});
    var bb1 = board.create('point',[function () { 
        return 3+s.Value();}, function () { return Math.sqrt(27)+s.Value();}], {name:'B',size:4});
  
  var triangle = board.create('polygon',["A","B","C"]);
    var a1 = board.create('angle',[cc1,aa1,bb1],{name:''});
    var a2 = board.create('angle',[aa1,bb1,cc1],{name:''});
    var a3 = board.create('angle',[bb1,cc1,aa1],{name:''});
 //   board.create('text',[16,6,function(){return "α = "+a1.Value().toFixed(2); } ]);
 //   board.create('text',[16,5,function(){return "β = "+a2.Value().toFixed(2); } ]);
 //   board.create('text',[16,4,function(){return "γ = "+a3.Value().toFixed(2); } ]);    
    
    var aa = board.create('point',[10,0], {name:"A'",size:4});
    var cc = board.create('point',[function  () { return 13+s.Value(); },0], {name:"C'",size:4});
    var bb = board.create('point',[function  () { return 11.5+s.Value(); }, function  () { 
        return Math.sqrt(6.75)+s.Value(); }], {name:"B'",size:4});
        
    var triangle2 = board.create('polygon',["A'","B'","C'"]);
    var a4 = board.create('angle',[cc,aa,bb],{name:''});
    var a5 = board.create('angle',[aa,bb,cc],{name:''});
    var a6 = board.create('angle',[bb,cc,aa],{name:''});
  //  board.create('text',[16,2,function(){return "ζ = "+a4.Value().toFixed(2); } ]);
  //  board.create('text',[16,3,function(){return "δ = "+a5.Value().toFixed(2); } ]);
  //  board.create('text',[16,1,function(){return "ε = "+a6.Value().toFixed(2); } ]);
  
  
    var p1 = board2.create('point',[5, 5], {name:'A',size:4});
    var p2 = board2.create('point',[4, 1], {name:'B',size:4});
    var p3 = board2.create('point',[13, 3], {name:'C',size:4});
    var triangle3 = board2.create('polygon',["A","B","C"]);
    
    var li = board2.create('segment',["A", "C"]);
    var li2 = board2.create('segment',["B", "C"]);
    
    //var glider1 = board2.create('glider',[5,5,li ],{name:"A'", size:5, color: '#00FF00'});
    var glider1 = board2.create('glider',[4,1,li2 ],{name:"B'", size:5, color: '#00FF00'});
   

    var returnedMat = board2.create('perpendicular',[glider1,li], { color:'purple',dash:1});
    var glider2 = board2.create('glider',[5,5,returnedMat ],{name:"A'", size:5, color: '#00FF00'});
  //  var AC = 
    board2.create('text',[14,5,function(){
        var value = Math.sqrt( (glider2.X() -13 )*(glider2.X()-13)+(glider2.Y()-3)*(glider2.Y()-3) );
        var total = Math.sqrt(68).toFixed(2) / value;
        return "AC/A'C = "+Math.sqrt(53).toFixed(2)+'/'+value.toFixed(2)+'='+ total.toFixed(2);
          } ]);
          
    board2.create('text',[14,4,function(){
        var value = Math.sqrt( (glider1.X() -13 )*(glider1.X()-13)+(glider1.Y()-3)*(glider1.Y()-3) );
        var total = Math.sqrt(85).toFixed(2) / value;
        return "BC/B'C = "+Math.sqrt(85).toFixed(2)+'/'+value.toFixed(2)+'='+ total.toFixed(2);
          } ]);
    
}



