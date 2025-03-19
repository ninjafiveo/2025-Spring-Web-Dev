// var charName = "bob"
// console.log(typeof(charName))
// console.log(charName.length)
// var charName = 15
// console.log(typeof(charName))
// console.log(charName.length)
// var charName = 15.5
// console.log(typeof(charName))
// console.log(charName.length)
// var charName = true
// console.log(typeof(charName))
// console.log(charName.length)

// document.getElementById("welcome").style.color = "red";
// document.getElementById("welcome").innerHTML = "Ninja's Rule"

let a;
a = 20;
let b = 10;
answer = a + b;
document.getElementById("math_stuff").innerHTML = answer

if (a < b){
    document.getElementById("math_stuff").innerHTML = "a is less than b"
}

let num3 = 3
let num4 = "3"
console.log(num3 == num4)
console.log(num3 === num4)


function sayHello(){
    document.getElementById("welcome").innerHTML = "Helllllloooooooooo"
}

function doMath(){
    let num1 = 10;
    let num2 = 30;
    let answer = num1 * num2;
        document.getElementById("welcome").innerHTML = "The answer is: "+answer;
}

