var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#chk-button");
var outputD = document.querySelector("#output");


function calculatingStock(initalprice, quantity, current) {
    if (current < initalprice) {
        var loss = (initalprice - current) * quantity;
        var lossPercentage = (loss / initalprice) * 100;
        showoutPut(`😔 The loss is ${loss} and the losspercentag is ${lossPercentage}%`)
    } else if (current > initalprice) {
        var profit = (current - initalprice) * quantity;
        var profitPercentage = (profit / initalprice) * 100;
        showoutPut(`😊 your profit is ${profit} and profitpercentage is ${profitPercentage}`)
    } else {
        showoutPut("No pain no gain,no gain no pain")
    }


}

function showoutPut(message) {
    outputD.innerText = message;
}


function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(quantity.value);
    var cps = Number(currentPrice.value);
    calculatingStock(ip, qty, cps);

}




checkButton.addEventListener("click", clickHandler)