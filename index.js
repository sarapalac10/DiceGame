function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

var getRandomInt1 = getRandomInt(1,7)
console.log(getRandomInt1)

var getRandomInt2 = Math.floor(Math.random()*6)+1
console.log(getRandomInt2)

var getImage1 = "./images/" + "dice" + getRandomInt(1,7) + ".png"; 
var getImage2 = "./images/" + "dice" + (getRandomInt2) + ".png"; 

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", getImage1);
img2.setAttribute("src", getImage2);

if(getRandomInt1 > getRandomInt2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! "
}

else if(getRandomInt1 < getRandomInt2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}

else if(getRandomInt1 = getRandomInt2){
    document.querySelector("h1").innerHTML = "🎌 Draw! One more time? 🎌 " 
}