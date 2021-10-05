function randNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// const randValue = randNumber();
// let guessValue = 5;
// if (randValue >= 1 && randValue <= 10) {
//   if (randValue > guessValue) {
//     console.log(`Too Low, the random number is ${randValue}`);
//   } else if (randValue < guessValue) {
//     console.log(`Too High, the random number is ${randValue}`);
//   } else console.log('You Win!');
// }

function HighLow(guessValue){
const randValue = randNumber();
// let guessValue = guessNum;
if (randValue >= 1 && randValue <= 10) {
  if (randValue > guessValue) {
    return `Too Low, the random number is ${randValue}`;
  } else if (randValue < guessValue) {
    return `Too High, the random number is ${randValue}`;
  } else return 'You Win!';
}
}

console.log(HighLow(5));