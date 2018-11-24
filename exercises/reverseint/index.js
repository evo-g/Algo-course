// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// var n = 51

function reverseInt(n) {
    let revNum= parseInt(n.toString().split('').reverse().join('')); 
    return revNum * Math.sign(n); 
 }
 
 // console.log(reverseInt(n))
 
 
 
 module.exports = reverseInt;
 
 //otpion 1 if statement
 
 // function reverseInt(n) {
 //     let revNum= parseInt(n.toString().split('').reverse().join('')); 
 //     if (n < 0) {
 //         return revNum * -1;
 //     }
 //     return revNum; 
 //  }
 
 //option 2 Math.sign()
 
 // function reverseInt(n) {
 //     let revNum= parseInt(n.toString().split('').reverse().join('')); 
 //     return revNum * Math.sign(n); 
 //  }
  