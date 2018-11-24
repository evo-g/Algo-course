// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';

    for (let character of str){
        reversed = character + reversed; 
        // debugger;
    }

    return reversed;

}

// reverse('asdf');

module.exports = reverse;

    //option 1 easy way var changed = str.split('').reverse().join('');
    // console.log(changed);
    // return changed;

    //option 2 condensed first option return str.split('').reverse().join('');

    //option 3 for of solution let reversed = '';

    // for (let character of str){
    //     reversed = character + reversed; 
    // }

    // return reversed;

    //option 4 fancy one using reduce return str.split('').reduce((rev, char) => char + rev, '');