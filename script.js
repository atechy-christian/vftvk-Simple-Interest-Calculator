function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("year").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    var result = parseInt(interest) + parseInt(principal);

    if(principal <= 0) {
        alert("Please enter a positive number!")
    }
    else if (years < 1){
        alert("Please provide number of years!")
    }
    else {
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + "%</mark>,<br> You will receive an amount of <mark>" + result +"</mark>,<br> in the year <mark>" + year +"</mark>." 
    }
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval +"%";
}
        