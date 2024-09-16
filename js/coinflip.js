var player = {money: 1000,hot: 0, bor: 0}

// Select your input element.
var bet = document.getElementById('bet');

// Listen for input event on number input
bet.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

// Select heads
function heads(){
    player.hot = 0
    flip()
}

// Select tails
function tails(){
    player.hot = 1
    flip()
}

// Flip the coin
function flip(){
    var rndm = Math.floor(Math.random () * 2)
    var betValue = parseFloat(document.getElementById('bet').value)

    if(betValue !== 0 && betValue != undefined && player.money >= betValue){
    
    if(rndm === player.hot){
        player.money += betValue
        document.getElementById('balance').innerHTML = "+ " + betValue.toString()
    } else {
        player.money -= betValue
        document.getElementById('balance').innerHTML = "- " + betValue.toString()   
    }

    document.getElementById('money').innerHTML = player.money
 }
}