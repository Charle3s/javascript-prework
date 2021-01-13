function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } 

    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  
  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Tym razem przegrywasz :(');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch'





function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

//final part ^^^^^^^^



// let computerMove = `kamień`;

// printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to przegrywasz!');

// let playerMove = 'papier';

// printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz')

// let randomFraction = Math.random();

// printMessage('Wylosowany ułamek to: ' + randomFraction);

// let calculation = randomFraction * 3 + 1;
// printMessage('Ułamek pomnozony przez 3 i powiększony o 1: ' + calculation);

// let roundNumber = Math.floor(calculation);

// printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);





//trzy kroki mozna zapisac w let randomNumber = Math.floor(Math.random() * 3 + 1);

// let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log('Wylosowana liczba to: ' + randomNumber);

// let computerMove = 'nieznany ruch';

/*if(randomNumber == 1) {
    computerMove = 'kamień';
}
else if(randomNumber == 2) {
    computerMove = 'papier';
}
else if(randomNumber == 3) {
    computerMove = 'nożyce';
} */

// printMessage('Mój ruch to: ' + computerMove);





// // nzapisywanie odpowiedzi gracza



// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + playerInput);

// let playerMove = 'nieznany ruch';

// if(playerInput == '1'){
//   playerMove = 'kamień';
// }
// if(playerInput == '2'){
//     playerMove = 'papier';
//   }
//   if(playerInput == '3'){
//     playerMove = 'nożyce';
//   }

// printMessage('Twój ruch to: ' + playerMove);

// last part

  