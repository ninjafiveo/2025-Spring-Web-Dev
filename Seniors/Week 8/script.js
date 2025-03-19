document.getElementById("mainHeader").style.color = "red";
document.getElementById("mainHeader").innerHTML = "Ninjas Rule";

var num1 = 10;
var num2 = 20.1;
var num3 = "10"

var answer1 = num1 + num2;
document.getElementById("mathStuff").innerHTML = answer1;

var charName = "Bob";
var bagsEmpty = true;

console.log(typeof(num1))
console.log(typeof(num2))
console.log(typeof(answer1))
console.log(typeof(charName))
console.log(typeof(bagsEmpty))

console.log(num1 == num3); 
console.log(num1 === num3); 