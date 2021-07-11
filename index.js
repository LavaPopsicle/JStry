var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Won!"
} else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Won!"
}else{
  document.querySelector("h1").innerHTML = "It's a DRAW!"
}

// once i've divided the value to  "" + randomNumber1 + "" it worked!apple
// no need to complicate stuff with creation of new array or shit like that, just use the basic
// tools of the language! (the + sign etc...)


//img.img1 === every 'img' that has the class of '.img1' ^^
