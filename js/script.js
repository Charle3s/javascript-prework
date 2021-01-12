
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
    playerMove = 'papier';
  }
  if(playerInput == '3'){
    playerMove = 'nożyce';
  }

printMessage('Twój ruch to: ' + playerMove);
// unknown move

if(playerInput == '>3')
printMessage('Twój ruch to: nieznany ruch');

// add score script 

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrywasz :)!');
  }
else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('REMIS!');
  }
else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz :(!');
  }

  if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrywasz :)!');
  }
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('REMIS!');
  }
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz :(!');
  }

  if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrywasz :)!');
  }
else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('REMIS!');
  }
else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz :(!');
  }

  //
  else if( playerMove == 'nieznany ruch')
  printMessage('odświerz i wybierz prawidłowy ruch od 1 do 3!');
  