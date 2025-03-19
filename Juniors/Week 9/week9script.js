let x = 20;
let y = 50;

if(x == 21){
    document.getElementById("main_title").innerHTML = "Condition 1 Fired"
} else if(y == 50){
    document.getElementById("main_title").innerHTML = "Condition 2 Fired"
} else if(x == 20){
    console.log("y is equal to 20");
}else{
    console.log("x is not less than 20");
}