mustela=document.querySelectorAll(".mustela");
var mustela;
var level=1000;
var speed=700;
var rand=0;
console.log(mustela);
for (var i = 0; i < mustela.length; i++) {
	mustela[i].addEventListener("click",kick)
}
function kick(){
	this.classList.remove("visible");
}
function randomInteger() {
    rand=Math.random() * (8-1)
    rand=Math.round(rand);
  }

function jump(){
		randomInteger();
		console.log(rand)
		mustela[rand].classList.add("visible");
	}
function jump_invisible(){
		randomInteger();
		console.log(rand)
		mustela[rand].classList.remove("visible");
	}

function action() {
	setInterval(jump,level)
}
function action_invisible() {
	setInterval(jump_invisible,speed)
}
action();
action_invisible();


