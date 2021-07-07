function check_widht(firs_time){
	if (window.innerWidth > 950){
		document.getElementById("body").style.width = "75vw";
		document.getElementById("galery").style.width = "55%";
		document.getElementById("description").style.width = "42%";
		document.getElementById("description").style.maxHeight = "46.5vh";
		document.getElementById("dropdownmenu").style.maxWidth = "54vw";
		document.getElementById("dropdownmenu").style.width = "calc(100% - 325px)";
		document.getElementById("dropdownmenu").style.textAlign = "left";
		document.getElementById("logo").style.float = "left";

		array = document.getElementsByClassName("gallery-main")
		Object.keys(array).forEach(function (key){
		    array2 = array[key].getElementsByClassName("gallery-cell")
		    Object.keys(array2).forEach(function (key){
			    array2[key].style.width = "66%";
			});
		});
	}
	else{
		document.getElementById("body").style.width = "auto";
		document.getElementById("galery").style.width = "100%";
		document.getElementById("description").style.width = "100%";
		document.getElementById("description").style.maxHeight = "100%";
		document.getElementById("dropdownmenu").style.maxWidth = "92vw";
		document.getElementById("dropdownmenu").style.width = "100%";
		document.getElementById("dropdownmenu").style.textAlign = "center";
		document.getElementById("logo").style.float = "none";

		array = document.getElementsByClassName("gallery-main")
		Object.keys(array).forEach(function (key){
		    array2 = array[key].getElementsByClassName("gallery-cell")
		    Object.keys(array2).forEach(function (key){
			    array2[key].style.width = "100%";
			});
		});

		if (firs_time){
			var $carousel = $('.gallery-main').flickity();
			$carousel.flickity();
		}
	}
}

window.onload = function(){check_widht(true)}
window.addEventListener("resize", function(){
	check_widht()
})
