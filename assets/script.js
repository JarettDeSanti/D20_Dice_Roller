var options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
    "18", "19", "20"]



var playGame = function () {

    var rollDice = window.confirm("Roll the D20!")

    if (!rollDice) {
        return;
    }

    var index = Math.floor(Math.random() * options.length);
    var userChoice = options[index];

    window.alert("You rolled " + userChoice);


    playGame();
}



playGame();