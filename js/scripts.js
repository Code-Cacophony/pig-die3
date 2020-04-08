////////////business logic

//player logic
function Player(name) {
  this.name = name,
    this.turnScore = 0,
    this.totalScore = 0,
}






//game logic
function Game(player1, player2) {
  this.player1 = player1,
    this.player2 = player2,
    this.playerTurn = 1,
    this.gameOver = false
}

Game.prototype.executeTurn = function () {
  // var rollNumber = game.roll();
  // if rollNumber === 1
  //      game.endTurn
  // else
  //      turnScore += rollNumber
}

Game.prototype.roll = function () {
  // return a random number, 1-6
  // 

}

Game.prototype.endTurn = function () {
  //if 1 is not rolled, add turnScore to totalScore
  //if 1 is rolled, don't add  to totalScore
  //if totalscore === 100, execute gameOver
  // else changeTurn

}

Game.prototype.changeTurn = function () {
  // if playerTurn === 1
  // playerTurn = 2
  //else
  // playerTurn = 1


}

//only when player 1 or player 2 score reaches 100 after endTurn is executed
Game.prototype.gameOver = function () {

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

    console.log(game);

    $("#rollButton").click(function () {
      //game.executeTurn();


    });

    $("#endTurnButton").click(function () {
      //game.endTurn();

    });

  });

});