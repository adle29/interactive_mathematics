//you may have to edit this but the math works
var whole = ""; // stores the whole trinomial ax^2 + bx + c; if (withCoeff), stores factored trinomial gcf(ax^2) + bx + c
var factored = ""; // stores the factored trinomial gcf(x + h)(x + k)
var board = JXG.JSXGraph.initBoard('jxgbox', {originX:250, originY:230, unitX:10, unitY:10, axis:true});
var h, k,x1,x2, completeEquation;

var gcf = 1; // gcf of whole 
var leftGCF = 1; // gcf of left
var rightGCF = 1 ; // understood. :D
var c;
var textExample = [];

var sign = ['-','+'];

var trinom = [1,1,1]; // trinom[0]x^2 + trinom[1]x + trinom[2]

var left = [1,1];
var right = [1,1];
// (left[0] + left[1])(right[0]+ right[1])

var withCoeff = false; // if the eqation has been requested to contain an 'a' coeff

var coeffRange = 5; // range of number to chose from for coeff; a
var hkRange = 10; // range of numbers to chose from for h and k
// if i then the trinomial will have an 'a' coefficiant
function start(i){
	var div = document.getElementById("explanationBox");
	div.innerHTML = "" ;
    c = 0;
    stop = false;
    genTri(i);
    operation();
    graph ();
}
function work() {
	
    var div = document.getElementById("explanationBox");
    show = textExample[c];
   
    if (c == 5) {
       // var p1 = board.create('point', [h * (-1), 0], { name: 'x1', size: 2, face: 'o' });
       // var p2 = board.create('point', [k * (-1), 0], { name: 'x2', size: 2, face: 'o' });
    }
    c++;
    if (c <= textExample.length) {
        div.innerHTML += '<p style="margin:10px;">$' + show + '$</p>';
        MathJax.Hub.Typeset('explanationBox'); // process math
    }
}

function operation() {
	
    textExample = [];
    textExample.push(whole + " = 0");
    foil();
    if (withCoeff) {
        reduce();
        whole = dispTri();
        if (gcf != 1) {
            whole = gcf + "(" + whole + ")";
            textExample.push(whole  + " = 0");
            
        }
    }
	
    textExample.push(whole + " = " + aboveOne(gcf) + "(x + h)(x + k)");
    factored = whole + " = " + aboveOne(gcf) + "(" + aboveOne(left[0]) + "x " + sign[0] + " " + Math.abs(left[1]) + ")" + "" + "(" + aboveOne(right[0]) + "x " + sign[1] + " " + Math.abs(right[1]) + ")";
    textExample.push(factored);
	work();
	
}





// math



function nextInt(i) {
    if (typeof (i) == "number") {
        return Math.floor(Math.random() * i + 1);
    }
}
function nextBool() {
    return Math.floor(Math.random()) == 1
}
function isNeg(i) {
    if (typeof (i) == "number") {
        return (i < 0);
    }
    return NaN;
}
/*
* returns a string of the checked int 
* if the number is greater than 1
* this is used in cases where you would not like showing a 1 or 0,
* where it is preferable to show a blank
* ex:
* 1x^2 + 0x - 1
* would be better shown as
* x^2 - 1
*/
function aboveOne(i) {
    if (i == 1 || i == 0) {
        return "";
    }
    return i;
}
// returns the factors of i as an array
function factors(i) {
    i = Math.abs(i);
    if (typeof (i) == 'number') {
        Math.abs(i);
        facts = []; // factors of i
        for (j = 0; j <= i; j++) {
            if (i % j == 0) {
                facts.push(j);
            }
        }
    }
    return facts;
}
// finds gcf of left[0] left[1], right[0] right[1]
function findGCF(){
    var leftFactors = [];
    var rightFactors = [];
    var leftBreak = false;
    var rightBreak = false;
    leftFactors.push(factors(left[0]));
    leftFactors.push(factors(left[1]));
    rightFactors.push(factors(right[0]));
    rightFactors.push(factors(right[1]));
    
    for (var i0 = leftFactors[0].length - 1; i0 >= 0 ; i0--) {
        for (var i1 = leftFactors[1].length - 1; i1 >= 0 ; i1--) {
            if (leftFactors[1][i0] == leftFactors[0][i1]) {
                leftGCF = leftFactors[1][i0];
                leftBreak = true;
            }
        }
        if (leftBreak) {
            break;
        }

    }
    for(var i0 = rightFactors[0].length - 1; i0 >= 0 ; i0--){
        for (var i1 = rightFactors[1].length - 1; i1 >= 0 ; i1--) {
            if (rightFactors[1][i0] == rightFactors[0][i1]) {
                rightGCF = rightFactors[1][i0];
                rightBreak = true;
            }
        }
        if (rightBreak) {
            break;
        }
    }
    gcf = leftGCF * rightGCF;
}

// once gcf is found, numbers are reduced
function reduce() {
    findGCF();
    for (var i = 0; i < 2; i++) {
        left[i] /= leftGCF;
        right[i] /= rightGCF;
    }

   
    for (var i = 0; i < 3; i++) {
        trinom[i] /= gcf;
    }
}

// creates a factored trinomial
// if withCoeff a trinomial with an 'a' value is created
function genTri(withCoeff) {

    this.withCoeff = withCoeff;

    left[1] = nextInt(hkRange);
    right[1] = nextInt(hkRange);

    if (withCoeff) {
        left[0] = nextInt(coeffRange);
        right[0] = nextInt(coeffRange + 1); // + 1 to ensure at least one side is greater than 1
        trinom[0] = left[0] * right[0];
    }
    for (i = 0; i < 2; i++) {
        if (nextBool()) {
            sign[i] = "+";
        }
        else {
            sign[i] = "-";
        }
    }
    whole = dispTri();
    factored = "(" + aboveOne(left[0]) + "x " + sign[0] + " " + Math.abs(left[1]) + ")" + "" + "(" + aboveOne(right[0]) + "x " + sign[1] + " " + Math.abs(right[1]) + ")";
}


function foil() {
    left[1] = Number(sign[0] + left[1]);
    right[1] = Number(sign[1] + right[1]);
    trinom[1] = Number(left[1] * right[0] + right[1] * left[0]);
    trinom[2] = Number(left[1] * right[1]);
}

function dispTri(){
    var begin = "",
        mid = "",mid2,
        end = "";
    begin = aboveOne(trinom[0]) + "x^2";
    mid = (left[1]*right[0]+ left[0]*right[1])+"x";
    mid2 = (left[1]*right[0]+ left[0]*right[1])+"*x";
    end = left[1]*right[1] + "";

    if ((left[1] + right[1]) == 0) {
        mid = "";
        mid2 =""
    }
    else if (!isNeg(left[1] * right[0] + left[0] * right[1])) {
        mid = "+" + mid;
        mid2 = "+" + mid2;
    }
    if (!isNeg((left[1] * right[1]))) {
        end = "+" + (left[1] * right[1]);
    }
	   
	completeEquation= aboveOne(trinom[0])*aboveOne(trinom[0]) + "*x*x"+mid2+end;
	console.log(completeEquation);
	
    return begin + mid + end;
    
    
}

function graph () {
	board = JXG.JSXGraph.freeBoard(board);
	board = JXG.JSXGraph.initBoard('jxgbox', {originX:250, originY:250, unitX:10, unitY:10, axis:true});
	eval("function f(x) { return "+ completeEquation+";}");
	board.createElement('functiongraph', [function(x){ return f(x); }], {strokeColor:'lime', strokeWidth:3.0});
	
}   
    



