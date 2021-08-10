

console.log('Hello World!'); 
  
let userName= prompt('What is your name?');

console.log('The userName is ' + userName); 
let alertReturn = alert('Welcome to the page ' + userName);

let userBeach= prompt('Did you bring your beach umbrella?');

if(userBeach.toLowerCase() =='yes'){
  alert('Awesome Job ' + userName + '!');
  
}
if(userBeach.toLowerCase() =='no'){
alert('Why not?');

}

if(userBeach.toLowerCase() !=='yes' && userBeach.toLowerCase() !=='no'){
alert('Confused?');
};

let person= prompt('what hand do you write with?');
if(person.toLowerCase() =='right'){
  alert('You have unlocked the ultimate beach package discount. We will be contacting you by telephone in the next 24 hours.');
  
}
if(person.toLowerCase() =='left'){
alert('Please close your browser and do not return.');}