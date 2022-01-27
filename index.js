// Adding event listeners to HTML elements

// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");

//     // What to do when clicked.
// });


var allButtons = document.querySelectorAll("button");

// Adding event listeners to all the buttons at once using loop
for (var i=0; i < allButtons.length; i++) {

    allButtons[i].addEventListener("click", function () {

        // console.log(this);  // this keyword returns the current DOM object (HTML element) to which the event listener is added.
        // console.log(this.style.color = "white");

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);  // to play sound when html buttons are clicked

        buttonAnimation(buttonInnerHtml);
        
    });

}

document.addEventListener("keydown", function (event) {
    // alert("Key was pressed.");
    // console.log(event);  // to know which event triggered this function.
    // console.log(event.key);  // fetching the value of key property of event object

    makeSound(event.key);  // to play sound when keyboard keys are pressed
    // console.log(this);

    buttonAnimation(event.key);
}
);

function makeSound(key) {

    switch (key) {

        case "w":
            var crash = new Audio("./sounds/crash.mp3");  //creating object of Audio Class
            crash.play();
            break;

        case "a":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "l":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        default:
            console.log(key);
    }

}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);  // html element or DOM object from the webpage
    activeButton.classList.add("pressed");  // adds the pressed class in css to button elements when this function is called

    // To remove the pressed class from the buttons classlist after certain time interval
    setTimeout(() => {
        activeButton.classList.remove("pressed");
        
    }, 100);

}
