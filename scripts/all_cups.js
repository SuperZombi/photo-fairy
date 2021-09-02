function check_widht(firs_time){
	if (window.innerWidth > 950){
		document.getElementById("body").style.width = "85vw";
		document.getElementById("logo").style.float = "left";
		document.getElementById("logo").style.marginRight = "25px";
		document.getElementById("left").style.width = "25%";
		document.getElementById("left").style.marginLeft = 0;
		document.getElementById("left").style.marginRight = 0;
		document.getElementById("right").style.maxWidth = "70%";
	}
	else{
		document.getElementById("body").style.width = "auto";
		document.getElementById("logo").style.float = "none";
		document.getElementById("logo").style.marginRight = "auto";
		document.getElementById("left").style.width = "85%";
		document.getElementById("left").style.marginLeft = "auto";
		document.getElementById("left").style.marginRight = "auto";
		document.getElementById("right").style.maxWidth = "100%";
	}
}
window.addEventListener("resize", function(){
	check_widht()
});

function build(key){
	name = CUPS[key].name
	image = CUPS[key].main_img
	href = "cup.html#?" + key

	var a = document.createElement("a")
	a.classList = "content_el"
	a.href = href

	var div = document.createElement("div")
	div.className = "loading";
	div.id = key

	var img = document.createElement("img")
	img.onload = function(){document.getElementById(key).classList.remove("loading")}
	img.src = image

	var label = document.createElement("label")
	label.innerHTML = name
	label.title = name

	div.appendChild(img)
	a.appendChild(div)
	a.appendChild(label)
	document.getElementById("right").appendChild(a)
}

async function load_content(){
	document.getElementById("right").innerHTML = ""
	document.getElementById("right").style.transition = "0s";
	document.getElementById("right").style.opacity = 0;
	document.getElementById("right").style.transform = "translateY(50%)";

	params = window.location.href.split("?").slice(1)
	if (params.length != 0){
		Object.keys(CUPS).forEach(function (key){
			if (params.length == 1){
				if (CUPS[key].category.includes(params[0])){
					build(key)
				}
			}
			if (params.length == 2){
				if (CUPS[key].category.includes(params[0]) && CUPS[key].category.includes(params[1])){
					build(key)
				}
			}
		});
	}
	else{
		Object.keys(CUPS).forEach(function (key){
			build(key)
		});
	}

	check_empty()

	await sleep(50)
	document.getElementById("right").style.transition = "0.3s";
	document.getElementById("right").style.opacity = 1;
	document.getElementById("right").style.transform = "";
}

function load_href(){
	params = window.location.href.split("?").slice(1)
	if (params.includes("child")){
		document.getElementById("c1").checked = true;
		group("group1", true)
	}
	if (params.includes("boy")){
		document.getElementById("c2").checked = true;
	}
	if (params.includes("girl")){
		document.getElementById("c3").checked = true;
	}

	if (params.includes("adult")){
		document.getElementById("c4").checked = true;
		group("group2", true)
	}
	if (params.includes("man")){
		document.getElementById("c5").checked = true;
	}
	if (params.includes("woman")){
		document.getElementById("c6").checked = true;
	}
}

function active_group(g1, g2){
	document.getElementById(g1).style.display = "block";
	document.getElementById(g1).style.transform = "scale(1)";
	document.getElementById(g2).style.display = "none";
	document.getElementById(g2).style.transform = "scale(0)";
}
function group(g, what){
	if (g == "group1" && what){
		document.title = "Photo Fairy - Детские чашки";
		setTimeout(function(){ active_group("group1", "group2") }, 0)
		document.getElementById("c4").checked = false;
		document.getElementById("c5").checked = false;
		document.getElementById("c6").checked = false;
	}
	if (g == "group2" && what){
		document.title = "Photo Fairy - Взрослые чашки";
		setTimeout(function(){ active_group("group2", "group1") }, 0)
		document.getElementById("c1").checked = false;
		document.getElementById("c2").checked = false;
		document.getElementById("c3").checked = false;
	}
	if (!what){
		document.title = "Photo Fairy - Все чашки";
		setTimeout(function(){
			document.getElementById(g).style.display = "none";
			document.getElementById(g).style.transform = "scale(0)";
		}, 0)
		
		document.getElementById("c2").checked = false;
		document.getElementById("c3").checked = false;
		document.getElementById("c5").checked = false;
		document.getElementById("c6").checked = false;
	}
}

function check_groups(clicked){
	// Group 1
	if (clicked == "c1"){
		if (document.getElementById("c1").checked){
			group("group1", true);
			location.hash = "?child";
		}
		else {
			group("group1", false);
			location.hash = "";
		}
	}
	
	if (clicked == "c2"){
		if (document.getElementById("c2").checked){
			document.getElementById("c3").checked = false;
			location.hash = "?child?boy";
		}
		else { location.hash = "?child"; }
	}
	if (clicked == "c3"){
		if (document.getElementById("c3").checked){
			document.getElementById("c2").checked = false;
			location.hash = "?child?girl";
		}
		else { location.hash = "?child"; }
	}


	// Group 2
	if (clicked == "c4"){
		if (document.getElementById("c4").checked){
			group("group2", true);
			location.hash = "?adult";
		}
		else {
			group("group2", false);
			location.hash = "";
		}
	}

	if (clicked == "c5"){
		if (document.getElementById("c5").checked){
			document.getElementById("c6").checked = false;
			location.hash = "?adult?man";
		}
		else { location.hash = "?adult"; }
	}
	if (clicked == "c6"){
		if (document.getElementById("c6").checked){
			document.getElementById("c5").checked = false;
			location.hash = "?adult?woman";
		}
		else { location.hash = "?adult"; }
	}
}

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

	window.scrollTo(0,0);
	check_widht();
	load_href();
	load_content();

	window.addEventListener("hashchange", function(){load_content();});

	document.body.classList.add('loaded_hiding');
	document.getElementById("body").style.transform = "scale(1)";
	new WOW().init();
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
		document.getElementById("body").style.transition = "0.3s ease-in-out";
	}, 500);
}


function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
async function search(){
	zapros = document.getElementById("search_input").value
	if (zapros){
		document.getElementById("right").innerHTML = ""
		document.getElementById("right").style.transition = "0s";
		document.getElementById("right").style.opacity = 0;
		document.getElementById("right").style.transform = "translateY(50%)";
		Object.keys(CUPS).forEach(function (key){
			if (CUPS[key].name.toLowerCase().includes(zapros.toLowerCase())){
				build(key)
			}
		});
		await sleep(50)
		document.getElementById("right").style.transition = "0.3s";
		document.getElementById("right").style.opacity = 1;
		document.getElementById("right").style.transform = "";

		check_empty()
	}
	else{
		elem = document.getElementById("search").style.transform
		elem = "translate(10px)"
		await sleep(100)
		elem = "translate(-10px)"
		await sleep(100)
		document.getElementById("search").style.transform = "translate(10px)"
		await sleep(100)
		document.getElementById("search").style.transform = "translate(-10px)"
		await sleep(100)
		document.getElementById("search").style.transform = "translate(10px)"
		await sleep(100)
		document.getElementById("search").style.transform = ""
	}
}

async function enter(e){
	if (e.keyCode == 13){
		search()
	}
	else if (e.key == "Backspace"){
		if (!document.getElementById("search_input").value){
			load_content()
		}
		else{
			search()
		}
	}
	else{
		search()
	}
}

function check_empty(){
	if (document.getElementById("right").innerHTML == ""){
		document.getElementById("right").innerHTML = `<h2 id="empty">Тут пусто   ¯\\_(ツ)_/¯</h2>`
	}
}
