'use strict';

function randomNumber(){
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
  console.log(randomNumber);
}

function getguessingGame(){

 
  let userGuess = prompt('Please enter a number between 1 and 10.')
  let correctAnswer = randomNumber();
 console.log(randomNumber);
  let guesses = 5;
  for(let i=0; i < guesses; i=i+1) {
      let guessLeft = guesses - i;
      let userGuess = parseInt(prompt('Please enter a number between 1 and 10. You have ' + (guesses - i) + ' guesses left'));
      while(userGuess < 1 && userGuess >4){
      userGuess = parseInt(prompt('Try Again: Enter a number between 1 and 10'));}

  
  if(userGuess == correctAnswer){
      alert('WooHoo! You nailed it!');
      break;
      };
  
  if(userGuess > correctAnswer){
      alert ('sorry, too high')};
  if(userGuess < correctAnswer){
          alert ('sorry, too low')};
         
         }       ;
    

}
getguessingGame();





console.log('Were in');

let userName2 = prompt('Enter your credentials please.');

console.log(userName2);

while(!userName2) {
  userName2 = prompt('invalid');
  console.log(userName2);
}

if(userName2 !== 'dinosaur') {
  alert('I was expecting company');

}

alert('Youve made it thorugh, ' + userName2);


// arrary



// drinkArray.push();
// // added ice water to the array
// console.log(drinkArray);


// drinkArray.unshift('vodka');
// // added beer at the 0 position on the array
// console.log(drinkArray);

// console.log(drinkArray.indexOf('iced tea'));

// use splice top remove values

// for(let index = 0; index < drinkArray.length; index++){
// console.log(drinkArray[index]);
// // debugger;

// asking user to guess a drink

// let userGuess = prompt('what am i drinking right now?');

// for(let index = 0; index < drinkArray.Arrary.length; index ++) {
// let currentDrink = drinkArray[index];
// console.log('is ' + userGuess + '=== ' + currentDrink);
// if (userGuess === currentDrink) {
//   alert('nice, you got it!');
// }
// }

// give users multiple chances to guess



// while (correctAnswer = false){



// }

let drinkArray = ['doctor pepper', 'coffee', 'iced tea', 'orange juice', 'ice water', 'vodka',];

console.log(drinkArray);

let attempts = 0;
let correctAnswer = false;



// while (attempts < 5 && correctAnswer === false) {
//   let drink = prompt('There are six types of drinks that I can usually be found with. If you have paid attention, submit one of my top six usual drinks to continue. You have 6 guesses total, and you are on your '  + attempts + ' guess.');
//   let index = 0; index < drinkArray.length; index ++ {
//   let currentDrink = drinkArray[index];
//   console.log('is ' + drink + '=== ' + currentDrink);
    

//     if (drink === currentDrink) {
//       alert('nice, you got it!');
//       correctAnswer = true;
      
//     }}
    
    
//     attempts ++;

// if(correctAnswer === false) {
//   alert('wrong...  try again');

 
// }
//   else (alert(drinkArray))
//   }




// while(userGuess !== currentDrink) {
//   prompt('wrong, please guess again')
// }