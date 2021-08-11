

console.log('Hello World!'); 
  
let userName= prompt('What is your name?');

console.log('The userName is ' + userName); 
let alertReturn = alert('Welcome to the page ' + userName);

let userBeach= prompt('Did you bring your beach umbrella?');

if(userBeach.toLowerCase() =='yes'){
  alert('Awesome Job, so did I. I love Beaches, lets go.' + userName + '!');
  
}
if(userBeach.toLowerCase() =='no'){
alert('Why not? I was going to take you to the beach.');

}

if(userBeach.toLowerCase() !=='yes' && userBeach.toLowerCase() !=='no'){
alert('Confused?');
};

let person= prompt('what hand do you write with?');
if(person.toLowerCase() =='right'){
  alert('After the prompts complete, please close your browser and return to the right-handed version of this site for full compatibility');
  
}
else if(person.toLowerCase() =='left'){
alert('After the prompts complete, please close your browser and return to the left-handed version of this site for full compatibility');}

else{
  alert('Confused Again?');
  };

console.log('hello world 2!');

let hotSpringOriginal = prompt('would you like to go to the hotsprings?');
console.log(hotSpringOriginal);
let hotSpring = hotSpringOriginal.toLowerCase();

if( hotSpring == 'yes' || hotSpring == 'y') {
  alert('We will show you the way. We have a long history of hotsprings exploration'); 
} 

else if (hotSpring == 'no' || hotSpring == 'n') {
  alert ('you must find your own way. you missed out');
} else {
    alert('Confused a third time? Moving on');
}




let review = prompt('On a scale of 1-7, please submit a number which you rate our site as: 1 being terrible, 7 being the best you ever saw');

console.log(typeof review);

let reviewNumber = parseInt(review);

switch (reviewNumber) {
  case 1: 
    alert(userName + ', please join our team to help us!');
    break;
    case 2: 
    alert(userName + ', please join our team to help us!');
    break;
    case 3: 
    alert(userName + ', please join our team to help us!');
    break;
    case 4: 
    alert(userName + ', please join our team to help us!');
    break;
    case 5: 
    alert(userName + ', please join our team to help us!');
    break;
    case 6:
      alert(userName + ', please spread the word!');
      break;
    case 7: 
      alert('woot woot!!! good job '+ userName);
      break;
  default:
      alert('Enjoy your time ' + userName)
      
}

Document.getElementsByClassName('circular-1')

// (userBeach.toLowerCase() !=='right' && userBeach.toLowerCase() !=='left')

// prompts always return strings!!!