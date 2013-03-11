var board = JXG.JSXGraph.initBoard('jxgbox', {originX:250, originY:230, unitX:10, unitY:10, axis:true});
var h, k, c=0, completeEcuation, completeSolvedEcuation;
var textExample,textExample2,textExample3,textExample4,textExample5; 
var left,right; 
var sign1,sign2; 
var stop =false; 
var option,graphEquation; 


function start(){
	var div = document.getElementById("explanationBox");
	div.innerHTML = '';
	textExample='',textExample2='',textExample3='',textExample4='',textExample5='';
	c=0,h=0,k=0; 
	stop = false; 
	trinomial();
	foil();
	operation();
	work();
	graph();
}

function work(){
	
	var div = document.getElementById("explanationBox");
	switch (c){
		case 0:
			show = textExample;
			break;
		case 1: 
			show = textExample2;
			break;
		case 2:
			show = textExample3;
			break;
		case 3:
			show = textExample4;
			break;
		case 4: 
			show = textExample5;
			var p1 = board.create('point',[h*(-1),0], {name:'x1',size: 2, face: 'o'});
			var p2 = board.create('point',[k*(-1),0], {name:'x2',size: 2, face: 'o'});
			break;
		default: 
			stop = true; 
			break;
	}
	if (stop == false) {
		div.innerHTML += '<p style="margin:10px;">$'+show+'$</p>';
		MathJax.Hub.Typeset('explanationBox'); // process math
	}
	if (c==6){c=0}
	c++;
}

function operation() { 
	textExample = completeEcuation + '= 0'; 
	textExample2 = completeEcuation + '= (x + ?)(x + ?)'; 
	textExample3 = completeEcuation + '= (x + h)(x + k)'; 
	textExample4 = completeEcuation + '= (x  '+h+')(x  '+k+')';
	textExample5 = completeSolvedEcuation + '= 0'; 
}


//the math

function rand(a,b) {
	var c = Math.floor((b+1-a)*Math.random() + a); 
	return c;
}
    
function isNeg(i){
	var str = i.toString();
	var option;
	if ('-' == str.charAt(0)){option=true;}
	else{option=false;}
	return option;
}

function trinomial(){
	left = rand(1,15);
	right = rand(1,15);;
	if(0 == Math.floor(Math.random()*2)){
		sign1 = "+";
	}
	else{
		sign1 = "-";
	}
	if(0 == Math.floor(Math.random()*1)){
		sign2 = "+";
	}
	else{
		sign2 = "-";
	}
	completeSolvedEcuation = "(x "+sign1+" "+left+")" +""+ "(x "+sign2+" "+right+")";
	h = sign1+left;
	k = sign2+right; 
	
}
    
function foil(){
	left = Number(sign1+left);
	right = Number(sign2 + right);

	
	var signLeft = (left + right),
		signRight = left * right;
	 if(Number(left + right) === 0){
		 signLeft = "+";
	 }  
	else if(isNeg(left+right) == false){
		var numen = left + right;
		signLeft = "+"+numen;
		
	}
	if(!isNeg(left*right)){
		signRight = "+"+left*right;
	}
	
	completeEcuation =  "x^2"+signLeft+"x"+signRight;
	graphEquation = 'x*x'+signLeft+"*x"+signRight;
	console.log(graphEquation);
}
    
function graph () {
	board = JXG.JSXGraph.freeBoard(board);
	board = JXG.JSXGraph.initBoard('jxgbox', {originX:250, originY:250, unitX:10, unitY:10, axis:true});
	eval("function f(x) { return "+ graphEquation+";}");
	board.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'lime', strokeWidth:3.0});
	
}   
    

