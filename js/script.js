
// komputer // 

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

// print komputera
printMessage('Mój ruch to: ' + computerMove);

// gracz //

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

//input gracza//
let playerMove;

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2') {
  playerMove = 'papier';
}
else if(playerInput == '3') {
  playerMove = 'nożyce';
}

// print gracza
printMessage('Twój ruch to: ' + playerMove);

//wynik gry//
let argPlayerMove = playerMove;
let argComputerMove = computerMove;

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Wygrywasz!');
} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Przegrywasz!');
} else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Wygrywasz!');
} else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Przegrywasz!');
} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Wygrywasz!');
} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Przegrywasz!');
} else if ( argComputerMove == argPlayerMove){
  printMessage('Remis!');
} else {
  printMessage('Wykonałeś nie poprawny ruch!');
}

