// check if a word is a palindrome
//palindrome is a word that is the same if written backwards
//e.g. racecar, anna is a palindrome

let word = prompt('Enter a word to check if it is a palindrome!')
let rword = '';

let letters = [];

console.log(word[2]);

for (let index = 0; index < word.length; index++) {
    letters.push(word[index]);
}

console.log(letters);

//1----using pop() function
for (let index = 0; index < word.length; index++) {
    rword += letters.pop();
}

console.log(rword);


//2-----using reverse function
/* letters.reverse();

console.log(letters);

for (let index = 0; index < letters.length; index++) {
    rword += letters[index];
} */


if (word == rword) {
    alert(`${word} is a palindrome`)
} else {
    alert(`${word} is not palindrome`)
}