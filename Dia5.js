Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null

export function findLargestPalindrome(words) {
    // Tu código aquí 👈
  }

const words = [
    "racecar", 
    "level", 
    "world", 
    "hello"
]

// const words = [
//     "Platzi", 
//     "javascript", 
//     "html", 
//     "css"
// ]

var maxLetters = -Infinity;
var currentLetters = undefined;
var testPalindrome = undefined;
var maxPalindrome = undefined;

words.forEach(word => {

    currentLetters = word.length;
    testPalindrome = word.split('').reverse().join().replaceAll(',','');

    if ( word === testPalindrome ) {
        if ( currentLetters > maxLetters ) {
            maxLetters = currentLetters;
            maxPalindrome = word;
        } else {
            maxLetters = maxLetters;
            maxPalindrome = maxPalindrome;
        }
    }

})

if ( maxPalindrome === undefined ) {
    maxPalindrome = null;
} else {
    maxPalindrome = maxPalindrome;
}

console.log(maxPalindrome);
return(maxPalindrome);





// Test

const words = [
    "racecar", 
    "level", 
    "world", 
    "hello"
]

console.log(words[0].length);
var reverse = words[0].split('').reverse().join().replaceAll(',','');

console.log(reverse)