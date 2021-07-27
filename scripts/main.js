window.onload = function(){
	try{
		document.getElementById("header").innerHTML = header_;
	}
	catch{;}

	window.scrollTo(0,0)

	document.body.classList.add('loaded_hiding');
	document.getElementById("body").style.transform = "scale(1)";
	new WOW().init();
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
		document.getElementById("body").style.transition = "0.3s ease-in-out";
	}, 500);
}
