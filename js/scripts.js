////////////business logic

//player logic
function Player(name) {
  this.name = name,
    this.turnScore = 0,
    this.totalScore = 0
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

Game.prototype.animateDie = function (roll) {
  var rolNum = roll;

  if (rolNum === 6) {
    $("#dice").html("<p>*-----------*</p><p>*-----------*</p><p>*-----------*</p>");
  } else if (rolNum === 5) {
    $("#dice").html("<p>*-----------*</p><p>------*------</p><p>*-----------*</p>");
  } else if (rolNum === 4) {
    $("#dice").html("<p>*-----------*</p><p>-------------</p><p>*-----------*</p>");
  } else if (rolNum === 3) {
    $("#dice").html("<p>*------------</p><p>------*------</p><p>------------*</p>");
  } else if (rolNum === 2) {
    $("#dice").html("<p>*------------</p><p>-------------</p><p>------------*</p>");
  } else {
    $("#dice").html("<p>-------------</p><p>------*------</p><p>-------------</p>");
  }

}

Game.prototype.executeTurn = function (roll, turn) {
  var rollNumber = roll;
  var index = turn - 1;

  $("#rollDisplay").text(rollNumber);

  if (rollNumber !== 1) {
    this.players[index].turnScore += rollNumber;
    //alert(this.players[index].turnScore);
    $("#turnScorePlayer" + turn).text(this.players[index].turnScore);
  } else {
    this.players[index].turnScore = 0;
    game.endTurn(turn);

  }
}

Game.prototype.roll = function () {
  var number = Math.floor(Math.random() * 6) + 1;
  //console.log(number);
  return number;
}

Game.prototype.endTurn = function (turn) {
  var index = turn - 1;
  var holdPoints = this.players[index].turnScore;
  $("#dice").html("");
  this.players[index].totalScore += holdPoints;

  if (this.players[index].totalScore >= 100) {
    alert(this.players[index].name + " is the Winner!");
    $("#totalScorePlayer" + turn).text(this.players[index].totalScore);
    window.location.reload();
  }

  $("#totalScorePlayer" + turn).text(this.players[index].totalScore);
  this.players[index].turnScore = 0;
  $("#turnScorePlayer" + turn).text(this.players[index].turnScore);

  game.changeTurn(turn);
}

Game.prototype.changeTurn = function (turn) {

  if (turn === 1) {
    game.playerTurn = 2;
  } else {
    game.playerTurn = 1;
  }
  var index = game.playerTurn - 1;
  $("#turnDisplay").text(this.players[index].name);

}

//only when player 1 or player 2 score reaches 100 after endTurn is executed
Game.prototype.gameOver = function () {

}
var game = new Game();

// user interface
$(document).ready(function () {
  $("#register").submit(function (event) {
    event.preventDefault();
    var pOneName = $("#playerOneName").val();
    var pTwoName = $("#playerTwoName").val();


    // if play against computer is chosen, pTwoName = computer and computerChosen = true
    // add computerChosen as a game parameter
    // if computerChosen === true, then when player turn === 2, game.animateDie game.executeTurn go twice

    var pOne = new Player(pOneName);
    var pTwo = new Player(pTwoName);


    game.addPlayer(pOne);
    game.addPlayer(pTwo);

    $("#playerOneNameDisplay").text(pOne.name);
    $("#playerTwoNameDisplay").text(pTwo.name);
    $("#turnDisplay").text(pOne.name);

    console.log(pOne.name);
    console.log(pTwo.name);
    console.log(game);

    $("#rollButton").mousedown(function () {
      $("#dice").html("<p>########</p><p>########</p><p>########</p>");
    });
    $("#rollButton").mouseup(function () {
      var roll = game.roll();
      var turn = game.playerTurn;
      game.animateDie(roll);
      game.executeTurn(roll, turn);

    });

    $("#endTurnButton").click(function () {
      var turn = game.playerTurn;
      game.endTurn(turn);

    });

  });

});