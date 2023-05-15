const getUserChoice = userInput => {
  if (userInput.toLowerCase() === 'rock' || userInput.toLowerCase() === 'paper' || userInput.toLowerCase() === 'scissors' ) {
    return userInput;
  } else {
    console.log('error');
  }
}

const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random()*2);
  switch (randomNumber) {
    case 0: 
      return 'rock';
      break;

    case 1:
      return 'paper';
      break;

    case 2: 
      return 'scissor'
      break;
  }
}



const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'game was a tie'
  } 
  if(userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'computer won' 
    } else {
      return 'user won'
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissor'){
      return 'computer won'
    } else {
      return 'user won'
    }
  }
  if (userChoice === 'scissor'){
    if (computerChoice === 'rock'){
      return 'computer won'
    } else{
      return 'user won'
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('paper')
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()


