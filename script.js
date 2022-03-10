function loadHtml(filename){
	document.getElementById('cover').style.animation = "switch 0.9s linear";
	setTimeout(function(){document.getElementById('main').innerHTML = '<iframe class="iframe" frameborder="0" src="'+filename+'">';}, 361);
	setTimeout(function(){document.getElementById('cover').style.animation = "none";}, 901);
}
function resetCur(){
	document.getElementById('home').classList.remove('curr');
	document.getElementById('proj').classList.remove('curr');
	document.getElementById('about').classList.remove('curr');
	document.getElementById('contact').classList.remove('curr');
}
function setCur(idname){
	document.getElementById(idname).classList.add('curr');
}
