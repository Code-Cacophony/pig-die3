////////////business logic

//player logic
function Player(name) {
  this.name = name,
    this.turnScore = 0,
    this.totalScore = 0
}


//game logic
function Game(player1, player2) {
  this.player1 = player1,
    this.player2 = player2,
    this.playerTurn = 1,
    this.gameOver = false
}






// user interface
$(document).ready(function () {
  $("#register").submit(function (event) {
    event.preventDefault();
    var pOneName = $("#playerOneName").val();
    var pTwoName = $("#playerTwoName").val();

    var pOne = new Player(pOneName);
    var pTwo = new Player(pTwoName);

    var game = new Game(pOne, pTwo);

    console.log(pOne.name);
    console.log(pTwo.name);

    console.log(game.player1.name, game.player2.name);

    $("#rollButton").click(function () {



    });

    $("#endTurnButton").click(function () {


    });

  });

});