var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomDiceImg1;
document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
} else{
    document.querySelector("h1").innerHTML="Draw";
}