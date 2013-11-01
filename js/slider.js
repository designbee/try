/* --------------- 

	Script for Slider 
		- Images in the slider change automatically
		- They stop changing on mouseover
		- The navigation dots are clickable and they display the image corresponding to each dot

	---------------*/

var images = new Array();
var t;

images[0] ="img/img1.png";
images[1] ="img/img2.png";
images[2] ="img/img3.png";
images[3] ="img/img4.png";
images[4] ="img/img5.png";


var index = 0;

document.getElementById("slider").innerHTML = "<img src="+images[0]+" />";
document.getElementById("circle1").style.background = "#FF9696";

window.onload = function (){
	t=setTimeout(forward,3100);
}

document.getElementById('slider').onmouseover = function(){
	clearTimeout(t);
}

document.getElementById('slider').onmouseout = function(){
	t=setTimeout(forward,2000);
}

function forward () {
	index++;
	if (index >= images.length) { index = 0; }
	i=index;
	i++;
	document.getElementById("slider").children[0].style.left = "none";
	document.getElementById("slider").innerHTML = "<img src="+images[index]+" />";
	
	resetCircle();
	document.getElementById("circle"+i).style.background = "#FF9696";

	t=setTimeout(forward,3100);
}

function displaySlide(circleDiv){

	resetCircle();

	var circleID = circleDiv.getAttributeNode('id').value;
	document.getElementById(circleID).style.background = "#FF9696";

	var IDnum = circleID.slice(6);
	IDnum--;
	document.getElementById("slider").children[0].style.display = "none";
	document.getElementById("slider").innerHTML = "<img src="+images[IDnum]+" />";
	clearTimeout(t);
	index = IDnum;
	t=setTimeout(forward,7000);
}

function resetCircle() {
	var navdots = document.getElementsByClassName('circle');
	for(j=0; j < navdots.length; j++){
		navdots[j].style.background = "#ffffff";
	}
}