var yourScore = 0;
var enemyScore = 0;
var round = 1;
var inputNumber;
var generate = 0;
var enemyNumber;


function onInput() {
    document.getElementById("winner").innerHTML = ""
    inputNumber = document.getElementById("input").value
    inputNumber = parseInt(inputNumber)
    console.log(typeof inputNumber, inputNumber)
    if (isNaN(inputNumber)) {
        document.getElementById("no").innerHTML = "Es wurde keine Zahl eingegeben"
    }
    else {
        document.getElementById("no").innerHTML = ""

//Rundenanzahl
        round++
        document.getElementById("round").innerHTML = "Runde: " + round

//random target
        generate = Math.floor(Math.random() * 10);
        document.getElementById("target").innerHTML = "Zielnummer: " + generate

//enemy number
        enemyNumber = Math.floor(Math.random() * 10);
        document.getElementById("enemy").innerHTML = "Nummer Gegner: " + enemyNumber

//input number
        inputNumber = document.getElementById("input").value;
        if (inputNumber > 9) {
            inputNumber = 9
            inputNumber = document.getElementById("input").value = 9;
        }
        document.getElementById("output").innerHTML = "Deine Nummer: " + inputNumber

        //Abstand von generierter Nummer
        enemyNumber = Math.abs(generate - enemyNumber);
        inputNumber = Math.abs(generate - inputNumber);

        //output winner
        if (enemyNumber === inputNumber) {
            document.getElementById("winner").innerHTML = "Unentschieden :/"                   //Unentschieden
        } else {
            if (enemyNumber >= inputNumber) {
                document.getElementById("winner").innerHTML = "Du hast gewonnen!! :)"          //Gewonnen
                yourScore++
                document.getElementById("score1").innerHTML = "Deine Punkte: " + yourScore
            } else {
                document.getElementById("winner").innerHTML = "Du hast verloren :("            //Verloren
                enemyScore++
                document.getElementById("score2").innerHTML = "Punkte deines Gegners: " + enemyScore
            }
        }

//input-Feld leeren
        document.getElementById("input").value = undefined
        inputNumber = undefined

    }
}