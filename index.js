var randomNumber =(Math.floor(Math.random()*6))+1;


var randomImage= "./images/dice" +randomNumber+ ".png";
document.querySelector("img").setAttribute("src",randomImage);

if(randomNumber == 1){
        document.querySelector("h1").innerHTML="1";
}
if(randomNumber == 2){
    document.querySelector("h1").innerHTML="2";
}
if(randomNumber == 3){
    document.querySelector("h1").innerHTML="3";
}
if(randomNumber == 4){
    document.querySelector("h1").innerHTML="4";
}
if(randomNumber == 5){
    document.querySelector("h1").innerHTML="5";
}
if(randomNumber == 6){
    document.querySelector("h1").innerHTML="6";
}