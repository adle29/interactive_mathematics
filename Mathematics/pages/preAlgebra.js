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
	var div = document.getElementById("ques");
	var abec = ['x','y','a','b','c',''];
	var sign = ['+','-'];
	var signs = ['','-'];
	var firstTerm = Math.floor( Math.random() * (21 - 1) + 1);
	var secTerm = Math.floor( Math.random() * (21 - 1) + 1);
	var sign1 = signs[Math.floor(Math.random ()*2)];
	var sign2 = Math.floor(Math.random ()*2);
	var sign3 = signs[Math.floor(Math.random ()*2)];
	var letter = abec[Math.floor(Math.random ()*6)];
	
	var ques1 = parseInt(sign1+firstTerm);
	var ques2 = parseInt(sign3+ secTerm);
	
	if (sign2 == 0){
		question = ques1 - ques2 +letter;
		//console.log(sign2);
		console.log(ques1 +'-'+ques2+'='+question) ;
		sign2='-';
	}
	else {
		question = ques1 + ques2+letter;
		sign2='+';
		//console.log(Math.floor(Math.random ()*2));
	}
	textQuestion = '('+sign1+firstTerm+ letter +') ' + sign2 + ' ('+sign3+ secTerm+ letter+')';
	div.innerHTML = '<p style="margin:10px;">'+textQuestion+'=</p>';
	
}

function solution(){
	document.getElementById('ans').value = question;

}