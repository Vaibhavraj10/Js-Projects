//alert("Its working!");
//for the click
var noOfDrum = document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrum;i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //console.log(this.innerHTML);
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);
        buttonAnimation(buttonLetter);
       
	});
}

//var audio = new Audio('sounds/crash.mp3');
		//audio.play();
//For the keyPress
document.addEventListener("keypress",function(event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {

	 switch (key) {
        	case "w":
        	var audio = new Audio('sounds/crash.mp3');
		    audio.play();
		    break;

		    case "a" :
		    var audio = new Audio('sounds/kick-bass.mp3');
		    audio.play();
		    break;

		    case "s" :
		    var audio = new Audio('sounds/snare.mp3');
		    audio.play();
		    break;

		    case "d" :
		    var audio = new Audio('sounds/tom-1.mp3');
		    audio.play();
		    break;

		    case "j" :
		    var audio = new Audio('sounds/tom-2.mp3');
		    audio.play();
		    break;

		    case "k" :
		    var audio = new Audio('sounds/tom-3.mp3');
		    audio.play();
		    break;

		    case "l" :
		    var audio = new Audio('sounds/tom-4.mp3');
		    audio.play();
		    break;

		    default :
		    console.log("error");

        }
}


function buttonAnimation(key) {
	var active = document.querySelector("."+ key);
	active.classList.add("pressed");

	setTimeout(function() {
		active.classList.remove("pressed");
	}, 100);
}