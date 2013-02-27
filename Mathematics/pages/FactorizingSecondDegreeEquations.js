var textExample; 
var textExample2; 
var textExample3; 
var textExample4;
var h,k; 
var k = 0; 
var show; 
var num, num2;

function start(){
	operation ();
	k=0
}

function work(){
	k++;
	
	var div = document.getElementById("explanationBox");
	if (k == 1){show = textExample2; factor(num,num2);}
	if (k == 2){show = textExample3;}
	if (k == 3){show = textExample4; }
	div.innerHTML += '<p style="margin:10px;">$'+show+'$</p>';
	MathJax.Hub.Typeset('explanationBox'); // process math
}

function operation() { 
	num = rand(1,6);
	num2 = rand(4,10);
	textExample = 'x^2  +' + num + 'x + ' + num2 + '= 0'; 
	var div = document.getElementById("explanationBox");
	div.innerHTML = '<p style="margin:10px;">${'+textExample+'}$</p>';
	MathJax.Hub.Typeset('explanationBox'); // process math
	
	textExample2 = 'x^2  +' + num + 'x + ' + num2 + '= (x + ?)(x + ?)'; 
	textExample3 = 'x^2  +' + num + 'x + ' + num2 + '= (x + h)(x + k)'; 
	textExample3 = 'x^2  +' + num + 'x + ' + num2 + '= (x + '+h+')(x + '+k+')';
	
}

function factor (num,num2) {
	var factors = [1];
	var primeFactors = [2,3,4,5,7,8,9,10,11,13];
	var simplifiedNumber = num2; 
	var i = 0;
	var count = 1;
	while (simplifiedNumber != 1){
		if (simplifiedNumber % primeFactors[i] == 0 && i <6){
			simplifiedNumber = simplifiedNumber/primeFactors[i];
			factors[count] = primeFactors[i];
			i=-1;
			count++;
		}
		i++;
	}
	//look for h and k
	console.log(factors);
	for (var j = 0; j < factors.length; j++){
		for (var w = j+1; w < factors.length; w++){
		 	if (factors[j]+factors[w] == num){
		 		h = factors[j];
		 		k = factors[w];
		 		
		 	}
		 	var igual = factors[j] +factors[w];
		 	console.log(factors[j]+' +' +factors[w]+' =' + igual);
		}
	}
	
	 
}


function rand(a,b) {
	var c = Math.floor((b+1-a)*Math.random() + a); 
	return c;
}


