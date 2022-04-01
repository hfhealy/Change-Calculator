// Write your JavaScript here


//subtract amount received by amount due 
//use math.floor for the dollars

// function changeCalculate() {
//     let amountDue = document.getElementById("amount-due").value;

//     let amountRec = document.getElementById("amount-received").value;
//     let change = amountRec - amountDue;
//     return change;

        // let dollars = Math.floor(change);
        // document.getElementById("dollars-output").innerHTML = dollars;
        // let remainder = change - dollars;
        
// }


//click event...
// let message = document.getElementById("dollars-output");
// message.innerText = change;

// document.getElementById("calculate-change").addEventListener("click", () => handleClickEvent())

function handleClickEvent(e) {
    let amountDue = document.getElementById("amount-due").value;
    let amountRec = document.getElementById("amount-received").value;
    let change = (amountRec - amountDue).toFixed(2);

    let message = document.getElementById("output");
    message.innerText = change;

    let dollars = Math.floor(change);
    document.getElementById("dollars-output").innerHTML = dollars;
    // let remainder = change - dollars;
    change = change - dollars;

    let quarters = Math.floor(change / .25);
    document.getElementById("quarters-output").innerHTML = quarters;
    change = change - quarters * .25;

    let dimes = Math.floor(change / .10);
    document.getElementById("dimes-output").innerHTML = dimes;
    change = change - dimes * .10;

    let nickels = Math.floor(change / .05);
    document.getElementById("nickels-output").innerHTML = nickels;
    change = change - nickels * .05;

    let pennies = Math.round(change / .01);
    document.getElementById("pennies-output").innerHTML = pennies;
    change = change - pennies;
           
} 
document.getElementById("calculate-change").addEventListener("click", () => handleClickEvent())

