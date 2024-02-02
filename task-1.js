// Count how many times a string has the letter a
const sentence = 'amar sonar bangla, ami tomai vlobashi, cirodin tomar akash, tomar batash.';

// console.log(sentence)
let hasA = 0;
for (let i of sentence) {
    // if(i)
    if (i === 'a') {
        hasA = hasA + 1;
    }
    // console.log(sentence.length);
}
console.log(hasA)