var randomNumber1 = (Math.floor(Math.random()*10))%6 + 1;
console.log(randomNumber1);
var randomDice = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice);

var randomNumber2 = (Math.floor(Math.random()*10))%6 + 1;
console.log(randomNumber2);
const image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', 'images/dice'+randomNumber2+'.png');

const heading = document.querySelector('h1');
if(randomNumber1>randomNumber2)
{
	heading.innerHTML = '<h1>Player 1 wins! </h1>';
}
else if(randomNumber2>randomNumber1)
{
	heading.innerHTML = '<h1>Player 2 wins! </h1>';
}
else
{
	heading.innerHTML = '<h1>Its a tie! </h1>';
}