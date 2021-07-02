function check_widht(){
	if (window.innerWidth > 950){
		document.getElementById("galery").style.width = "55%";
		document.getElementById("description").style.width = "42%";
	}
	else{
		document.getElementById("galery").style.width = "100%";
		document.getElementById("description").style.width = "100%";
	}	
}

window.onload = function(){check_widht()}
window.addEventListener("resize", function(){
	check_widht()
})