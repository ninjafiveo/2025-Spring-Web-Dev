let x = 220;
let y = 220;

if (x < y) 
    {
        document.getElementById("mainHeader").innerHTML = "Condition 1 Fired";
        document.getElementById("mainBody").style.backgroundColor = "#fcba03";
    }
else if (x == y) 
    {
        document.getElementById("mainHeader").innerHTML = "Condition 2 Fired";
        document.getElementById("mainBody").style.backgroundColor = "#40ff63"; 
        //green     
    }
else if (x == 220) 
        {
            document.getElementById("mainHeader").innerHTML = "Condition 3 Fired";
            document.getElementById("mainBody").style.backgroundColor = "#fffc40";
            //yellow       
        }
else
    {
        document.getElementById("mainHeader").innerHTML = "Nothing Fired";
        document.getElementById("mainBody").style.backgroundColor = "#d93838";
    }