////////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';
function getInput() {
  var input = prompt("Please choose either 'rock', 'paper', or 'scissors'."); 

  if (input === 'rock' || input === 'paper' || input === 'scissors') {
     return input;
  } else {
    alert("Invalid input, try again");
  }
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// ////////////////////////////////////////////////
// /*           Write Your Code Below            */
// ////////////////////////////////////////////////

function getPlayerMove(move) {
  console.log('getPlayerMove');
  return move || getInput(); 
}

function getComputerMove(move) {
  console.log('getComputerMove');
  return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
  
    if (playerMove === computerMove) {
        winner = "tie";

    } else if (playerMove === "rock") {
        if (computerMove === "paper") {
          winner = "computer";
        } else {
          winner = "player"; 
        }
    
    } else if (playerMove === "paper"){ 
        if (computerMove === "scissors"){
          winner = "computer";
        } else {
          winner = "player"; 
        }

    } else if (playerMove === "scissors"){ 
        if (computerMove === "rock") {
          winner = "computer";
        } else {
          winner = "player"; 
        }
    }
  
    return winner;
  }

function playToFive() {
  var playerWins = 0;
  var computerWins = 0;

  do {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    if (winner === "player") {
      playerWins += 1;
        
    } else if (winner === "computer") {
      computerWins +=1;
    }

    console.log('Player = ' + playerMove + ' ; Computer = ' + computerMove);
    console.log('The score is ' + playerWins + ' to ' + computerWins + '\n');
  }

  while (playerWins < 5 && computerWins < 5)

  if (playerWins === 5) {
    console.log("You won!");
  } else {
    console.log("Computer Wins :( ");
    console.log('Game Over');
  }
}
  
  playToFive();