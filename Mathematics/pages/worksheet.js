var answer = [];
var textQuestion; 
var k=0;

function work (){
	var numProb, half=10, space=0,string;
	var style= 'border-style:solid; border-width:1px; border-color:#356AA0;';
	string = "<table style='width:600px; margin:30px; '>";
	
	for (var j=1; j<=half; j=j+1) {
		string += "<tr style='margin:30px;' >"+
		"<td style='height:100px; margin:30px; ' >"+j+'.'+
		 operation()+"</td>"+
		"<td style='height:100px; margin:30px; '>"+(j+half)+"."+
		operation()+"</td>"+
		"</tr>";
	}
	string += "</table>";
	string += "<h4 style='margin: 30px;'> SOLUTIONS </h4>";
	string += "<table style='width:300px; margin:30px; '>";
	
	for (var j=1; j<=half; j=j+1) {
		string += "<tr style='margin:30px;' >"+
		"<td style='height:100px; margin:30px; ' >"+j+'. $x^{'+
		 answer[j]+"}$</td>"+
		"<td style='height:100px; margin:30px; '>"+(j+half)+". $x^{"+
		answer[10+j]+"}$</td>"+
		"</tr>";
	}
	string += "</table>";

	var doc = document.getElementById('sheet');
	doc.innerHTML = string ; 
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
			textQuestion = "$\\displaystyle\\frac{1}{(x^{"+exp1+"})^{"+exp2+"}} = $";
			question = exp1 * exp2 * (-1); // global variable
		break;
			case 2:  // ( x^m / x^n )^q = x^(q*(m-n))
			exp1 = rand(-5,6);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$\\displaystyle\\left(\\frac{x^{"+exp1+"}}{x^{"+exp2+"}}\\right)^{"+exp3+"} = $";
			question = exp3 * (exp1 - exp2);
		break;
		case 3:  // ( x^m x^n )^q = x^(q(m+n))
			exp1 = rand(-5,5);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$(x^{"+exp1+"}x^{"+exp2+"})^{"+exp3+"} = $";
			question = exp3 * (exp1 + exp2);
		break;
		case 4:  // ( x^m x^n) / x^p = x^(m+n-p)
			exp1 = rand(-5,5);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$\\displaystyle\\frac{x^{"+exp1+"}x^{"+exp2+"}}{x^{"+exp3+"}} = $";
			question = exp1 + exp2 - exp3;
		break;
		case 5:  //  x^m / ( x^n x^p) = x^(m-n-p)
			exp1 = rand(-5,5);
			exp2 = rand(-5,6);
			exp3 = rand(-5,5);
			textQuestion = "$\\displaystyle\\frac{x^{"+exp1+"}}{x^{"+exp2+"}x^{"+exp3+"}} = $";
			question = exp1 - exp2 - exp3;
		break; 
		case 6:  //  (x^m)^n / (x^p)^q
			exp1 = rand(-5,5);
			exp2 = rand(-5,5);
			exp3 = rand(-5,5);
			exp4 = rand(-5,5);
			textQuestion = "$\\displaystyle\\frac{(x^{"+exp1+"})^{"+exp2+"}}{(x^{"+exp3+"})^{"+exp4+"}} = $";
			question = exp1*exp2 - exp3*exp4;
		break;
	} // end of switch
	
	k += 1;
 	answer[k] = question;	
 	return textQuestion; 
}

function rand(a,b) {
	var c = Math.floor((b+1-a)*Math.random() + a); 
	return c;
}
