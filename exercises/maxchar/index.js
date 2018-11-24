// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// var str = 'hello world';

function maxChar(str) {
    console.log(str);
    const charMap = {};
    let max = 0;
    let maxCahr = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    // console.log(charMap);

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    
    // console.log(maxChar);
    return maxChar;
}

// console.log(maxChar(str));

module.exports = maxChar;
