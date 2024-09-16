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

// bet black
function betBlack(){
    player.bor = 0
    spin()
}

// bet red
function betRed(){
    player.bor = 1
    spin()
}

// Spin the roulette 0 = Black; 1 = Red
function spin(){
    var rndm = Math.floor(Math.random () * 38)
    var betValue = parseFloat(document.getElementById('bet').value)

    var numbers = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]

    if(betValue !== 0 && betValue != undefined && player.money >= betValue){
    
    if(numbers[rndm] === player.bor){
        player.money += betValue
        document.getElementById('balance').innerHTML = "+ " + betValue.toString()
    } else {
        player.money -= betValue
        document.getElementById('balance').innerHTML = "- " + betValue.toString()   
    }

    document.getElementById('money').innerHTML = player.money
 }
 console.log("Spin = ", rndm)
 console.log("Black/Red = ", numbers[rndm])
}

// Import and export save
function importSave() {
    let savecode = prompt("Enter your save code here:");
    if (savecode == null || savecode == "") {
      console.log("Invalid savecode")
    } else {
      player = JSON.parse(atob(savecode))
    }
}

function exportSave(){
    console.log(btoa(JSON.stringify(player)))
}