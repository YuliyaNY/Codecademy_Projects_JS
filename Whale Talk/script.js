let input = 'Hi, Human';
//an array of vowels that we are going to look for in input
const vowels = ['a', 'e', 'i', 'o', 'u'];
//array where we will store vowels that we will find
let resultArray = [];

for(i = 0; i < input.length; i++) {
  for(j = 0; j < vowels.length; j++) {
    if(input[i] === vowels[j]) {
     resultArray.push(input[i]);                
    }
  }
  //double the 'e' and the 'u' that the program finds
  if(input[i] === 'e' || input[i] === 'u') {
     resultArray.push(input[i]);  
  }
}
//printing the result
console.log(resultArray.join('').toUpperCase());