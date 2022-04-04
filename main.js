function handleClickEvent(e) {
    let amountDue = document.getElementById("amount-due").value;
    let amountRec = document.getElementById("amount-received").value;
    let change = (amountRec - amountDue).toFixed(2);

    // let message = document.getElementById("output");
    // message.innerText = '$' + change;

    document.getElementById("output").innerText = '$' + change;
    document.getElementById("change-title").innerText = 'Change';

    let dollars = Math.floor(change);
    document.getElementById("dollars-output").innerHTML = dollars;
    change = (change - dollars).toFixed(2);

    let quarters = Math.floor(change / .25);
    document.getElementById("quarters-output").innerHTML = quarters;
    change = (change - quarters * .25).toFixed(2);

    let dimes = Math.floor(change / .10);
    document.getElementById("dimes-output").innerHTML = dimes;
    change = (change - dimes * .10).toFixed(2);

    let nickels = Math.floor(change / .05);
    document.getElementById("nickels-output").innerHTML = nickels;
    change = (change - nickels * .05).toFixed(2);

    let pennies = Math.round(change / .01);
    document.getElementById("pennies-output").innerHTML = pennies;
    change = change - pennies;
           
    document.getElementById("image-reveal").style.display = "block";
} 


document.getElementById("calculate-change").addEventListener("click", () => handleClickEvent())

// document.querySelector("img").onclick