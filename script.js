function showLove(){
document.getElementById("message").innerHTML="my swweetuuuu❤️";
}

function showSurprise(){
document.getElementById("surprise").innerHTML="You are the bestestttttesttttttttttt person eveerrrrrrrrrrrrrrr ❤️"; 

}
function yesClicked(){
document.getElementById("answer").innerHTML =
"Yay! I love you forever ❤️";
}

function moveButton(){
var button = document.getElementById("noButton");

var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;

button.style.position = "absolute";
button.style.left = x + "px";
button.style.top = y + "px";
}
// change this date to the day your relationship started
var startDate = new Date("2021-06-3");

var today = new Date();

var difference = today - startDate;

var days = Math.floor(difference / (1000 * 60 * 60 * 24));

document.getElementById("loveDays").innerHTML =
days + " days with you and counting ❤️";
function playMusic(){
document.getElementById("music").play();
}