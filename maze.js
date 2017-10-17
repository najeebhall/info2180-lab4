
window.onload = function () {
	var walls = document.querySelectorAll(".boundary");
	var wall = document.getElementById("boundary1");
	wall.addEventListener('mouseover', function()
		{ this.setAttribute('class', 'boundary youlose')
	});
	//document.getElementsByClassName("boundary").mouseover.setAttribute("id", "youlose");
};

//document.getElementById("maze").addEventListener("load", myFunction);
//function myFunction() {
//	wall.mouseover.setAttribute("class", "boundary youlose");
//}


