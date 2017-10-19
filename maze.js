
window.onload = function () {
	var walls = document.querySelectorAll(".boundary");
	var wall = document.getElementById("boundary1");
	var start = document.getElementById("start");
	start.addEventListener('click', function() {startGame(walls)});
	var end = document.getElementById("end");
	wall.addEventListener('mouseover', function()
		{ this.setAttribute('class', 'boundary youlose')
	});
	for (var i = 0; i < walls.length; i++) {
		walls[i].addEventListener("mouseover",function(){lose(walls)});
	}
	end.addEventListener("mouseover",function(){endGame(walls)});
	
};
function lose(elem){
	gameLost=false; 
	for (var i = 0; i < elem.length; i++) {
		elem[i].setAttribute("class","boundary youlose");
	}
	document.getElementById("status").innerHTML="You lose";

}

function endGame(elem)
{
	var status = elem[0].getAttribute('class');
	if (status=== 'boundary') {
			document.getElementById("status").innerHTML="You Win!";
	}
}

function startGame(elem)
{
	var status = elem[0].getAttribute('class');
	if (status=== 'boundary youlose')
	{
		for (var i = 0; i < elem.length; i++) {
		elem[i].classList.remove("youlose");
		}
	}
}




