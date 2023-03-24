
var numDrumButtons = document.querySelectorAll(".drum").length;

var audio = new Audio("sounds/tom-1.mp3");

var audioArr =[];
var mp3Arr = [];

mp3Arr = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/crash.mp3" ,"sounds/kick-bass.mp3" ,"sounds/snare.mp3"]



function activateSound(key) {
    var buttonID = key;
    switch (buttonID){
        case "w":
            var tom1 =new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        
        case "a":
            var tom2 =new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 =new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
            
        case "d":
            var tom4 =new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            var crash =new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "k":
            var kick =new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
                
        case "l":
            var snare =new Audio("sounds/snare.mp3")
            snare.play();
            break;
        
        case "c":
            var cl =new Audio("sounds/cliodhna.m4a")
            cl.play();
            break;

        case "e":
            var eo =new Audio("sounds/eoghan.mp3")
            eo.play();
            break;
        
        case "r":
            var ro =new Audio("sounds/ronan.mp3")
            ro.play();
            break;

        case "m":
            var mam =new Audio("sounds/mammy.mp3")
            mam.play();
            break;
        }
        
}

        


for (var i=0; i<numDrumButtons; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            console.log(this.classList)
            var buttonID = this.innerHTML;
            activateSound(buttonID);
            buttonAnimation(buttonID);

    });
    }

document.addEventListener("keydown", function (event) {
    var keyD = event.key;
    activateSound(keyD)

})

function buttonAnimation(currentKey){
    var aButton = document.querySelector("."+ currentKey)
    
    aButton.classList.add("pressed");
    setTimeout( function () {
        aButton.classList.remove("pressed");
      }, 200);
    
}