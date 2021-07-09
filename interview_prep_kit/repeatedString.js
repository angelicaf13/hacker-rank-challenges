/*
* Problem description: https://bit.ly/3hlCNY8
*/

function repeatedString(s, n){
    let c = 0, //total amount of chars without remaining
      ca = 0, //remaining 'a' chars
      r = n % s.length //remaining characters

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      ++c
      i < r ? ++ca : " ";
    }
  }

  return ((n - r) / s.length * c) + ca
}

const stringOne = "a";
const stringTwo = "abc";

console.log(repeatedString(stringTwo, 10));
console.log(repeatedString(stringOne, 10));