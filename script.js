let left = 0;

function sliderMovement(direction) {
	clearInterval(autoMoving)
	left += 100 * direction;
	if ( left == -500 ) {
		left = 0;
	}
	else if( left == 100 ){
		left = -400;
	}
	document.getElementById("slider").style.left = left + "%";
	autoMoving = setInterval(sliderMovement, 4000, -1);
}
let autoMoving = setInterval(sliderMovement, 4000, -1);
document.getElementById("next").addEventListener("click", function(){
	sliderMovement(-1)
}, {passive: true})
document.getElementById("prev").addEventListener("click", function(){
	sliderMovement(1)
}, {passive: true})

function burgerMenuDisplay(){
	const menu = document.getElementById("menu");
	if ( menu.className.length < 16 ) {
		menu.className += " active";
	}else{
		menu.className = menu.className.substr(0, 15);
	}
	
}