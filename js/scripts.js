////////////business logic

//player logic
function Player(name) {
  this.name = name,
    this.turnScore = 0,
    this.totalScore = 0
}

Game.prototype.updateTurnScore = function (rollNumber, turn) {
  var id = turn;
  for (var i = 0; i < this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.players[i];
      }
    }
  };
  return false
}


//game logic
function Game(player1, player2) {
  this.players = [];
  this.currentId = 0,
    this.playerTurn = 1,
    this.gameOver = false
}

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players.push(player);
}

Game.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.executeTurn = function (roll, turn) {
  var rollNumber = roll;
  var pTurn = turn;

  this.updateTurnScore(rollNumber, pTurn);

  // if (pTurn === 1) {
  //   game.updateTurnScore(rollNumber, pTurn);
  //   console.log(update.turnScore);
  // } else {
  //   player2.turnScore += rollNumber;
  //   console.log(player2.turnScore);
  // }

  //console.log(rollNumber);
  $("#rollDisplay").text(rollNumber);

  //return rollNumber;

  // if rollNumber === 1
  //      game.endTurn
  // else
  //      turnScore += rollNumber
}

Game.prototype.roll = function () {
  var number = Math.floor(Math.random() * 6) + 1;
  //console.log(number);
  return number;

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
    var game = new Game();

    game.addPlayer(pOne);
    game.addPlayer(pTwo);

    $("#playerOneNameDisplay").text(pOne.name);
    $("#playerTwoNameDisplay").text(pTwo.name);
    $("#turnDisplay").text(pOne.name);

    console.log(pOne.name);
    console.log(pTwo.name);
    console.log(game);

    $("#rollButton").click(function () {
      var roll = game.roll();
      var turn = game.playerTurn;
      game.executeTurn(roll, turn);


    });

    $("#endTurnButton").click(function () {
      //game.endTurn();

    });

  });

});