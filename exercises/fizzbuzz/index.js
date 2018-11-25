// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// var n = 100;

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // is the muber a multiple of 3 and 5?
        if (i % 3 === 0 && i % 5 === 0) {
             console.log('fizzbuzz');
        } else if (i % 3 == 0) {
            //is the number a multiple of 3?
             console.log('fizz');
        }  else if (i % 5 == 0) {
            //is the number a multiple of 5?
             console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// console.log(fizzBuzz(n));

module.exports = fizzBuzz;

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         // is the muber a multiple of 3 and 5?
//         if (i % 3 === 0 && i % 5 === 0) {
//              console.log('fizzbuzz');
//         } else if (i % 3 == 0) {
//             //is the number a multiple of 3?
//              console.log('fizz');
//         }  else if (i % 5 == 0) {
//             //is the number a multiple of 5?
//              console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i % 3 == 0 ? 
//             'fizz' : i % 5 == 0 ? 
//             'buzz': i % 3 == 0 && i % 5 == 0 ? 
//             'fizzbuzz': i)
//     }
// }