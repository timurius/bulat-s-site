let left = 0;
function sliderMovement(direction) {
	left += 100 * direction;
	if ( left == -500 ) {
		left = 0;
	}
	else if( left == 100 ){
		left = -400;
	}
	document.getElementById("slider").style.left = left + "%";
}
let autoMoving = setInterval(sliderMovement, 4000, -1)
document.getElementById("next").addEventListener("click", function(){
	sliderMovement(-1)
})
document.getElementById("prev").addEventListener("click", function(){
	sliderMovement(1)
})