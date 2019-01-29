var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource = "dice" + randomNumber1 + ".png";
var randomImageSource2 = "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Shinae Wins!";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Jihoon Wins!";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
