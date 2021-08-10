console.log('hello world!');

let hotSpringOriginal = prompt('would you like to go to the hotsprings?');
console.log(hotSpring);
let hotSpring = hotSpringOriginal.toLowerCase();

if( hotSpring === 'yes' || hotSpring === 'y') {
  alert('We will show you the way.') 
} else if (hotSpring === 'no' || hotSpring === 'n') {
  alert ('you must find your own way.')
} else {
    alert('Confused again?')
}


// prompts always return strings!!!

let review = promt('On a scale of 1-7, please submit a number which you rate our site as: 1 being terrible, 7 being the best you ever saw');

console.log(typeof review);

let reviewNumber = parseInt(review);

switch (reviewNumber) {
  case 1,2,3,4: 
    alert('join our team to help us!');
    break;
  case 5,6,7:
      alert('Please spread the world!');
      break;
  default:
      alert('Enjoy your time!')
      
}
