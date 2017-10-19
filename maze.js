
window.onload = function () {
	var walls = document.querySelectorAll(".boundary");
	var wall = document.getElementById("boundary1");
	wall.addEventListener('mouseover', function()
		{ this.setAttribute('class', 'boundary youlose')
	});
	for (var i = 0; i < walls.length; i++) {
		walls[i].addEventListener("mouseover",function(){lose(walls)});
	}
	//document.getElementsByClassName("boundary").mouseover.setAttribute("id", "youlose");
};
function lose(elem){
	gameLost=false;
	//document.getElementById("status").innerHTML="Move your mouse over the 'S' to begin."; 
	for (var i = 0; i <= elem.length; i++) {
		elem[i].setAttribute("class","boundary youlose");
	}
}

//document.getElementById("maze").addEventListener("load", myFunction);
//function myFunction() {
//	wall.mouseover.setAttribute("class", "boundary youlose");
//}


