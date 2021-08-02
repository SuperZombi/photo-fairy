function check_widht(firs_time){
	if (window.innerWidth > 950){
		document.getElementById("body").style.width = "75vw";
		document.getElementById("galery").style.width = "55%";
		document.getElementById("description").style.width = "42%";
		document.getElementById("description").style.maxHeight = "46.5vh";
		document.getElementById("dropdownmenu").style.maxWidth = "70vw";
		document.getElementById("dropdownmenu").style.width = "calc(100% - 250px)";
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

function orientation(){
	if (screen.orientation.angle == 0){
		document.getElementsByClassName("gallery-nav")[0].style.marginTop = "0px"
		document.getElementById("description").style.marginTop = "0px";
	}
	if (screen.orientation.angle == 90){
		document.getElementsByClassName("gallery-nav")[0].style.marginTop = "120px"
		document.getElementById("description").style.marginTop = "120px";
	}
}

function return_(){
	document.getElementById("body").innerHTML = "<h1>404 Not Found</h1>"
	document.body.classList.add('loaded_hiding');
	document.getElementById("body").style.transform = "scale(1)";
}

window.onload = function(){
	try{
		document.getElementById("header").innerHTML = header_;
	}
	catch{;}

	cup_name = window.location.href.split("?")[1]
	if (cup_name){
		cup_arr = CUPS[cup_name]
		if (cup_arr){
			// Название
			document.getElementById("name").innerHTML = cup_arr.name
			document.title = "Photo Fairy - " + cup_arr.name
			// Цена
			document.getElementById("price").innerHTML = cup_arr.price
			// Характеристики
			if (cup_arr.characteristic){
				var keys = Object.keys(cup_arr.characteristic);
				for (i = 0; i < keys.length; i++){
					first = keys[i]
					second = cup_arr.characteristic[first]

					tr = document.createElement("tr")
					td1 = document.createElement("td")
					td1.innerHTML = first
					td2 = document.createElement("td")
					td2.innerHTML = second

					tr.appendChild(td1)
					tr.appendChild(td2)
					document.getElementById("characteristics").appendChild(tr)
				}
			}

			if (cup_arr.description){
				document.getElementById("more_block").innerHTML = cup_arr.description;
			}

			comand1 = ""
			comand2 = ""

			// Главная картинка
			comand1 += `<div class="gallery-cell">\
			<img id="main_img" src="${cup_arr.main_img}"></div>`
			comand2 += `<div class="gallery-cell">\
			<img id="main_img_thumb" src="${cup_arr.main_img}"></div>`

			// 360
			if (cup_arr._360){
				comand1 += `<div class="gallery-cell"><div class="sketchfab-embed-wrapper" style="height: 100%;"> <iframe style="border-radius: 8px;" title="Чашка" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="100%" \
				src="${cup_arr._360}?autospin=1&preload=1"> </iframe> </div></div>`
				comand2 += `<div class="gallery-cell"><div style="padding: 15% 20% 10%;"><svg id="v-360" viewBox="0 0 46 30"><text font-family="Arial" font-size="21" font-weight="bold"><tspan x="5" y="16.9">360</tspan></text><path fill-rule="evenodd" clip-rule="evenodd" d="M42 5a2 2 0 100-5 2 2 0 000 5zm0-1a1 1 0 100-3 1 1 0 000 3z"></path><path d="M21 29v-3C9 26 0 22 0 16c0-3 2-5 6-7-3 2-4 4-4 6 0 5 8 9 19 9v-3l4 4-4 4zm7-5v2c10-1 18-5 18-10 0-3-2-5-6-7 3 2 4 4 4 6 0 4-7 8-16 9z"></path></svg></div></div>`
			}

			// YouTube
			if (cup_arr.youtube){
				comand1 += `<div class="gallery-cell"><iframe width="100%" style="border-radius: 8px;" height="100%" \
				src="${cup_arr.youtube}?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
				comand2 += `<div class="gallery-cell"><div style="padding: 10% 20%;"><svg xmlns="http://www.w3.org/2000/svg" id="i-youtube-icon-multicolored" viewBox="0 0 24 16"><path d="M23.5 2.5a3 3 0 00-2.12-2C19.5 0 12 0 12 0S4.49 0 2.62.48A3 3 0 00.5 2.5 28.42 28.42 0 000 8a28.42 28.42 0 00.5 5.5 2.93 2.93 0 002.12 2C4.49 16 12 16 12 16s7.5 0 9.38-.48a2.93 2.93 0 002.12-2A28.42 28.42 0 0024 8a28.42 28.42 0 00-.5-5.5z" fill="#ec2725"></path><path d="M10 11V5l6 3z" fill="#fff"></path></svg></div></div>`
			}

			// mp4 видео
			if (cup_arr.video){
				comand1 += `<div class="gallery-cell"><video loop controls> \
				<source src="${cup_arr.video}"></video></div>`
				comand2 += `<div class="gallery-cell"><div style="padding: 10% 20%;"><svg xmlns="http://www.w3.org/2000/svg" id="i-youtube-icon-multicolored" viewBox="0 0 24 16"><path d="M23.5 2.5a3 3 0 00-2.12-2C19.5 0 12 0 12 0S4.49 0 2.62.48A3 3 0 00.5 2.5 28.42 28.42 0 000 8a28.42 28.42 0 00.5 5.5 2.93 2.93 0 002.12 2C4.49 16 12 16 12 16s7.5 0 9.38-.48a2.93 2.93 0 002.12-2A28.42 28.42 0 0024 8a28.42 28.42 0 00-.5-5.5z" fill="#ec2725"></path><path d="M10 11V5l6 3z" fill="#fff"></path></svg></div></div>`
			}

			// Остальные фотки
			if (cup_arr.other_imgs){
				for (i = 0; i < cup_arr.other_imgs.length; i++){
					comand1 += `<div class="gallery-cell">\
					<img id="main_img" src="${cup_arr.other_imgs[i]}"></div>`
					comand2 += `<div class="gallery-cell">\
					<img id="main_img_thumb" src="${cup_arr.other_imgs[i]}"></div>`
				}
			}


			// Инициализация
			document.getElementById("gallery-main").innerHTML = comand1
			document.getElementById("gallery-nav").innerHTML = comand2

			$('.gallery-main').flickity({
			  sync: ".gallery-nav",
			  fullscreen: true
			});

			$('.gallery-nav').flickity({
			  asNavFor: ".gallery-main", 
			  contain: true, 
			  pageDots: false
			});

			var $carousel = $('.gallery-main');
			$carousel.flickity('resize')
		}
		else{
			return_();return;
		}
	}
	else{
		return_();return;
	}

	window.scrollTo(0,0)
	check_widht(true);
	var $carousel = $('.gallery-main');
	$carousel.on( 'fullscreenChange.flickity', function( event, isFullscreen ) {
		window.scrollTo(0,0)
	});

	document.body.classList.add('loaded_hiding');
	document.getElementById("body").style.transform = "scale(1)";
	new WOW().init();
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
		document.getElementById("body").style.transition = "0.3s ease-in-out";
	}, 500);


	window.addEventListener("resize", function(){
		check_widht()
	});
	window.addEventListener("orientationchange", function() {
		orientation()
	});
}
