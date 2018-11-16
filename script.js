var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

body.addEventListener("load", setGradient());

function gen() {
	return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradientButton() {
	color1.value = gen();
	color2.value = gen();
	setGradient();
}

button.addEventListener("click", setGradientButton);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

