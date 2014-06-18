var random = Math.floor((Math.random() * 100) + 1);

var guess = prompt('Guess a number 1 - 100');

while (guess != random) {
  if (guess < random) {
    guess = prompt('You guessed to low, guess higher');
  }
  else {
    guess = prompt('Wrong! Guess lower');
  }
}

alert('YOU WIN!');
