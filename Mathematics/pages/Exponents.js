var question;
var textQuestion;

function news(){
	start();
	erase();
}
function erase(){
	 document.getElementById("ans").value="";
	 
}
function check(){
	var answer = document.getElementById('ans').value.toLowerCase().replace(/\s+/g, '');
	console.log(answer.replace(/\s+/g, ' '));
	if (question == answer){
		document.getElementById('ans').value= 'Correct!';
	}
	else {
		document.getElementById('ans').value= 'Wrong!';
	}
	
}

function start(){
	operation ();
}

function solution(){
	document.getElementById('ans').value = question;

}


function exponentPower () {
	var exp1,exp2, anws;
	exp1 = Math.floor(Math.random()*(10+1)+(1));
	exp2 = Math.floor( Math.random()*(10+1)+(1));
	answ = exp1 * exp2;
	textQuestion = "$(x^{"+exp1+"})^{"+exp2+"} = x^{p}$"+'what is p?';
	question = answ;
	
	var div = document.getElementById("ques");
	div.innerHTML = '<p style="margin:10px;">'+textQuestion+'</p>';
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function operation() {
	var choosetype,num,exp1,exp2,string,exp3,exp4;
	
	choosetype = Math.random();
	num = rand(1,6);
	
	switch (num) {
		case 1:  // (1 / x^m) ^ n = x^(-mn) 
			exp1 = rand(-5,5);
			exp2 = rand(-5,5);
			textQuestion = "$\\displaystyle\\frac{1}{(x^{"+exp1+"})^{"+exp2+"}} = x^p$";
			question = exp1 * exp2 * (-1); // global variable
		break;
			case 2:  // ( x^m / x^n )^q = x^(q*(m-n))
			exp1 = rand(-5,6);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$\\displaystyle\\left(\\frac{x^{"+exp1+"}}{x^{"+exp2+"}}\\right)^{"+exp3+"} = x^p$";
			question = exp3 * (exp1 - exp2);
		break;
		case 3:  // ( x^m x^n )^q = x^(q(m+n))
			exp1 = rand(-5,5);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$(x^{"+exp1+"}x^{"+exp2+"})^{"+exp3+"} = x^p$";
			question = exp3 * (exp1 + exp2);
		break;
		case 4:  // ( x^m x^n) / x^p = x^(m+n-p)
			exp1 = rand(-5,5);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$\\displaystyle\\frac{x^{"+exp1+"}x^{"+exp2+"}}{x^{"+exp3+"}} = x^p$";
			question = exp1 + exp2 - exp3;
		break;
		case 5:  //  x^m / ( x^n x^p) = x^(m-n-p)
			exp1 = rand(-5,5);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$\\displaystyle\\frac{x^{"+exp1+"}}{x^{"+exp2+"}x^{"+exp3+"}} = x^p$";
			question = exp1 - exp2 - exp3;
		break; 
		case 6:  //  (x^m)^n / (x^p)^q
			exp1 = rand(-5,5);
			exp2 = rand(-5,5);
			exp3 = rand(-5,5);
			exp4 = rand(-5,5);
			textQuestion = "$\\displaystyle\\frac{(x^{"+exp1+"})^{"+exp2+"}}{(x^{"+exp3+"})^{"+exp4+"}} = x^p$";
			question = exp1*exp2 - exp3*exp4;
		break;
	} // end of switch
 
	
	var div = document.getElementById("ques");
	div.innerHTML = '<p style="margin:10px;">'+textQuestion+', what is p?</p>';
	//MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	MathJax.Hub.Typeset('ques'); // process math
	console.log('solution:' + question);
}


function rand(a,b) {
	var c = Math.floor((b+1-a)*Math.random() + a); 
	return c;
}


