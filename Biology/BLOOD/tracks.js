function intro(){
	stop();
	document.getElementById("id1").play();
}

function comp(){
	stop();
	document.getElementById("id6").play();
	document.getElementById("id2").play();

}


function phys () {
	stop();
	
	document.getElementById("id5").play();
	document.getElementById("id3").play();

}

function path(){
	stop();
	document.getElementById("id5").play();
	document.getElementById("id4").play();

}


function stop(){

				document.getElementById('id1').pause();
				document.getElementById("id2").pause();
				document.getElementById("id3").pause();
				document.getElementById("id4").pause();
				document.getElementById("id5").pause();
				document.getElementById("id6").pause();
}