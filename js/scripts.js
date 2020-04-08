//business logic

//player logic
function Player(name) {
  this.name = name,
    this.turnScore = 0,
    this.totalScore = 0
}








// user interface
$(document).ready(function () {
  $("#register").submit(function (event) {
    event.preventDefault();
    var pOneName = $("#playerOneName").val();
    var pTwoName = $("#playerTwoName").val();

    var pOne = new Player(pOneName);
    var pTwo = new Player(pTwoName);

    console.log(pOne.name);
    console.log(pTwo.name);




  });

});