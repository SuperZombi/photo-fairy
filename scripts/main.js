window.onload = function(){
	try{
		document.getElementById("logo").innerHTML = logo_;

		document.getElementById("body").innerHTML += '<div style="width:100%;float:right;height:50px;"></div>'
		div = document.createElement("div");
		div.id = "social_networks";
		div.innerHTML = social_networks_;
		document.getElementById("body").appendChild(div);
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
